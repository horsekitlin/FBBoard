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
                        <Image source={{uri : 'http://ppt.cc/xH07G'}} style={[styles.message_logo]}/>
                    </View>
                    <View style={[styles.column, {flex : 9}]}>
                        <View>
                            <Text style={[styles.primarytext, styles.boldertext]}> 電影法蘭克 </Text>
                        </View>
                        <View>
                            <Text style={[styles.mutedtext, {fontSize : 10}]}>{message.created_time}</Text>
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

