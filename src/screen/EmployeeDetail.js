// import React, { Component } from "react";
// import MapView,{Marker} from 'react-native-maps'
// import { 
//     View,
//     Text,
//     StyleSheet,Button
// } from "react-native";



// class Pemesanan extends Component {
//     // state={location:null}
//     // onBtnClick = ()=>{
      
//     //     navigator.geolocation.getCurrentPosition((value)=>{
//     //         console.log(value)
//     //         this.setState({location:{
//     //             latitude:value.coords.latitude,
//     //             longitude:value.coords.longitude,
//     //             latitudeDelta: 0.015,
//     //             longitudeDelta: 0.0121,
//     //         }})
//     //     },err =>{
//     //         console.log(err)
//     //     })
//     // }
//     // render() {
//     //     const initial=
//     //         {
//     //             latitude: 37.78825,
//     //             longitude: -122.4324,
//     //             latitudeDelta: 0.015,
//     //             longitudeDelta: 0.0121,
//     //           }
        
//     //     const obj = this.state.location ? this.state.location: initial
//     //     console.disableYellowBox=true;
//     //     return (
//     //         <View style={styles.container}>
//     //         <View style={{zIndex:3}}>
//     //              <Button onPress={this.onBtnClick} title="Get Current Posistion" />
//     //         </View>
//     //         <MapView
             
//     //           style={styles.map}
              
//     //           region={obj}
//     //         >
//     //           <Marker
//     //                 coordinate={obj
//     //                 }              
//     //           /> 
//     //         </MapView>
//     //       </View>
//     //     );
//     // }
// }
// export default Pemesanan;

// // const styles = StyleSheet.create({
// //     container: {
// //       ...StyleSheet.absoluteFillObject,
     
// //       justifyContent: 'flex-end',
// //       alignItems: 'center',
// //     },
// //     map: {
// //       ...StyleSheet.absoluteFillObject,
// //       flex:1
// //     },
// // });

import React, { Component } from "react";
import Communications from 'react-native-communications';
import {Button} from 'native-base';
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class EmployeeDetail extends Component {
    
    onBtnSms=()=>{
        const {getParam} =this.props.navigation
        body =`Hello ${getParam('nama')},
        Your upcoming shift is on ${getParam('shift')}`
        phone = getParam('phone')
        Communications.text(phone,body)

        //alert(body+" Terkirim ke "+phone)
    }
    render() {
        const {getParam} =this.props.navigation
        return (
            <View style={styles.container}>
                <Text>{getParam('nama')}</Text>
                <Text>{getParam('shift')}</Text>
                <Text>{getParam('phone')}</Text>
            <View>
            <Button block onPress={this.onBtnSms}>
                 
                  <Text>Send SMS</Text> 
            </Button>
            </View>

            </View>
        );
    }
}
export default EmployeeDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});