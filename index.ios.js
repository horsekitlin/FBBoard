/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';
import styles from './styles';
import { fansgroup, graphURL, limit, fields, access_token } from './config';

require('es6-promise').polyfill();
require('isomorphic-fetch');

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
        return (
            <View style={styles.container}>
                <View style={styles.navbar}>
                </View>
                <View style={styles.content}>
                <Text>
                    {JSON.stringify(this.state.messages)}
                </Text>
                </View>
                <View style={styles.footer}></View>
            </View>
        );
    }
}


AppRegistry.registerComponent('fbboard', () => fbboard);
