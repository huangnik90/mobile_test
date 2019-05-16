import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet, Button
} from "react-native";
import {Fire} from './../support/firebase'
import { onLoginSuccess } from './../2.actions';
import {connect} from 'react-redux'

class MenuAccountSetting extends Component {
    onLogOutPress = ()=>{
        Fire.auth().signOut()
        .then((val)=>{
            console.log(val)
            this.props.onLoginSuccess(email="",uid="")
            this.props.navigation.navigate('login')
        })
        .catch((err)=>console.log(err))
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Log Out" onPress={this.onLogOutPress}>
                
                </Button>
            </View>
        );
    }
}
const mapStateToProps = (state)=>{
    return{
        user:state.auth
    }
}
export default connect(mapStateToProps,{onLoginSuccess})(MenuAccountSetting);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

