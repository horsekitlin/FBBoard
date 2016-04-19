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
import Message from 'messagecomponent';
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
                                <Message message={message} key={`message${index}`}/>
                            )
                        })}
                    </ScrollView>
                <View style={styles.footer}></View>
            </View>
        );
    }
}

AppRegistry.registerComponent('fbboard', () => fbboard);
