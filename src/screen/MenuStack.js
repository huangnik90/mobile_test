import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,TouchableHighlight
} from "react-native";
import {connect} from 'react-redux'

class MenuStack extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:100,marginHorizontal:40}}>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('add')} style={{height:80,width:80,borderRadius:80,backgroundColor:"pink",justifyContent:"center"}}>
                    <Text style={{textAlign:"center"}}>ADD </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('edit')} style={{height:80,width:80,borderRadius:80,backgroundColor:"orange",justifyContent:"center"}}>
                    <Text style={{textAlign:"center"}}>EDIT </Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('list')} style={{height:80,width:80,borderRadius:80,backgroundColor:"lightblue",justifyContent:"center"}}>
                    <Text style={{textAlign:"center"}}>LIST </Text>
                    </TouchableHighlight>
                </View>

            <Text>{this.props.user.id}</Text>
            <Text>{this.props.user.email}</Text>
            
             

            </View>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
      user:state.auth
    }
      
    
  }

export default connect(mapStateToProps)(MenuStack);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});