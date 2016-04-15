
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
});
