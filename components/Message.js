import React, {
    Component,
    PropTypes,
    View,
    Text,
    Image,
} from 'react-native';
import styles  from '../styles';

class Message extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { message } = this.props;
        return(
            <View style={[styles.message]}>
                <View style={[styles.row]}>
                    <View style={[styles.column], {flex : 1}}>
                        <Image source={{uri : 'https://scontent-tpe1-1.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/p160x160/11243710_377705219100874_7809988013920691796_n.png?oh=e09ddc9cd6a1ec0229d533dd8207e0bf&oe=57ADBCA2'}} style={[styles.message_logo]}/>
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
                        <Image source = {{uri : message.full_picture}} style={[styles.message_img]} />
                    </View>
                </View>
            </View>
        );
    }
}

Message.propTypes = {
    message : PropTypes.object.isRequired,
};

export default Message;

