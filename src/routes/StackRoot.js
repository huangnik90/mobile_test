import React,{Component} from 'react'

import {createMaterialTopTabNavigator,createAppContainer,createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import LoginPage from '../screen/LoginScreen';
import RegisterPage from '../screen/RegisterPage';
import EmployeeDetail from '../screen/EmployeeDetail';
import MenuAccountSetting from '../screen/MenuAccountSetting'
import EditEmployeeScreen from '../screen/EditEmployeeScreen';
import MenuStack from '../screen/MenuStack';
import AddEmployeeScreen from '../screen/AddEmployeeScreen';
import ListEmployee from '../screen/ListEmployeeScreen'


const AccountSetting = createStackNavigator({
    menu:MenuAccountSetting
})

const StackBeranda = createStackNavigator({
    MenuStack : MenuStack,
    add: AddEmployeeScreen,
    edit:EditEmployeeScreen,
    list:ListEmployee,
    detail:EmployeeDetail
},
{
    headerMode:'none'
   
}
)

StackBeranda.navigationOptions = ({navigation}) =>{
    let tabBarVisible = false

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if(routeName =='MenuStack'){
        tabBarVisible =true
    }
    return{
        tabBarVisible
    }
}

const HomeTab = createBottomTabNavigator({
    beranda: StackBeranda,
    setting: AccountSetting
})

const StackRoot = createStackNavigator({
    login:LoginPage,
    register:RegisterPage,
    home:HomeTab
},{
    
    headerMode:'none'
})

export const StackContainer = createAppContainer(StackRoot)

