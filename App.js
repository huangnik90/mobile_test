// import React, { Component } from "react";
// import { 
//   View,
//   Text,
//   StyleSheet,
//   Button
// } from "react-native";
// import { createStackNavigator, createAppContainer } from "react-navigation";





// const stack = createStackNavigator({
//   home:{screen:HomePage,navigationOptions:{title:"HOME"}},
//   login:LoginPage
// })

// const stackContainer = createAppContainer(stack)
// export default stackContainer;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });


import React,{Component} from 'react'
import {StackContainer} from './src/routes/StackRoot'
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Reducer from './src/1.reducers'

const store = createStore(Reducer,{},applyMiddleware(ReduxThunk))


class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <StackContainer/>
      </Provider>
      )
  }
}
export default App