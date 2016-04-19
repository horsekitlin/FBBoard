/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  ScrollView,
  Text,
  Image,
  View
} from 'react-native';
import styles from './styles';
import { fansgroup, graphURL, limit, fields, access_token } from './config';

class fbboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages : []
        };
    }
    componentDidMount(){
        let _this = this;
        const url = `${graphURL}/${fansgroup}/feed?limit=${limit}&access_token=${access_token}&fields=${fields.join(",")}`
        fetch(url)
        .then((resp) => {
            if (resp.status >= 400) {
                throw new Error("Bad response from server");
            }
            return resp.json();
        }).then((json) => {
            _this.setState({
                messages : json.data
            });
        });
    }
    render() {
        const { messages } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                </View>
                    <ScrollView style={[styles.content, { padding : 10}]}>
                        {this.state.messages.map((message, index) => {
                            return(
                            <View key={`message${index}`} style={{margin : 5, paddingTop : 5, paddingBottom : 5,borderBottomColor : "#CCC", borderBottomWidth:1}}>
                                <View style={[styles.row]}>
                                    <View style={[styles.column], {flex : 1}}>
                                        <Image source={require('./images/logo.png')} style={{height : 30, width : 30, alignItems:'center'}}/>
                                    </View>
                                    <View style={[styles.column, {flex : 9}]}>
                                        <View>
                                            <Text style={[styles.primarytext, styles.boldertext]}> 電影法蘭克 </Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.mutedtext, {fontSize : 10}]}>2015</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={[styles.column]}>
                                            <Text> {message.message} </Text>
                                    </View>
                                </View>
                                <View style={[styles.row]}>
                                    <View style={[styles.column]}>
                                        <Image source = {{uri : message.full_picture}} style={{width : 400, height : 400 }} />
                                    </View>
                                </View>
                            </View>
                            )
                        })}
                    </ScrollView>
                <View style={styles.footer}></View>
            </View>
        );
    }
}


AppRegistry.registerComponent('fbboard', () => fbboard);
