
import {
    StyleSheet,
    Dimensions,
} from 'react-native';

var { width, height } = Dimensions.get('window');

const muted = '#c7c7c7';
const white = '#FFFFFF';
const primary = '#337ab7';
const danger = "#d9534f";
const warning = "#f0ad4e";
const info = "#5bc0de";
const success = "#5cb85c";
const Colordefault = "#777777";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    message : {
        margin : 5,
        paddingTop : 5,
        paddingBottom : 5,
        borderBottomColor : "#CCC",
        borderBottomWidth:1
    },
    message_logo : {
        height : 30,
        width : 30,
        alignItems:'center',
    },
    message_img : {
        height : 400,
        width : 400,
    },
    row : {
        marginTop : 10,
        flexDirection : 'row',
    },
    column : {
        flexDirection : 'column',
        justifyContent: 'center',
    },
    navbar : {
        marginTop : 20,
        height : 40,
        width : width,
        backgroundColor : primary
    },
    content : {
        width : width,
        height : height - 100,
        backgroundColor : white,
    },
    footer : {
        height : 40,
        width : width,
        backgroundColor : muted
    },
    primarytext : {
        color : primary
    },
    lighttext : {
        fontWeight : '200'
    },
    normaltext : {
        fontWeight : "300"
    },
    boldtext : {
        fontWeight : "500"
    },
    boldertext : {
        fontWeight : "700"
    },
    mutedtext : {
        color : muted
    },
});
