// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Image
// } from "react-native";
// import HomeScreen from './src/screen/HomeScreen'
// import LoginScreen from './src/screen/LoginScreen'
// import {createDrawerNavigator,createAppContainer, DrawerItems} from 'react-navigation'


// const CustomDrawer = (props)=>{
//     return (
//         <View style={{flex:1}}>
//             <View>
                
//                 <Image style={{width:100, height:100, left:80}} source={{uri:`https://mp.thcdn.com/23/4a/234afcc6391d46e1b1fef311e681d669.png`}}/> 
//             </View>
//             <DrawerItems {...props}/>

//         </View>
//     )
// }
// const Drawer = createDrawerNavigator({
//     home:HomeScreen,
//     login:LoginScreen
// },{
//     contentComponent:CustomDrawer
// })

// const DrawerContainer = createAppContainer(Drawer)
// class DrawerNav extends Component {
    
//     render() {
//     console.disableYellowBox = true;
//         return (
            
//            <DrawerContainer></DrawerContainer>
//         );
//     }
// }
// export default DrawerNav;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });