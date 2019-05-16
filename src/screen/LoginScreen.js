import React, { Component } from 'react';
import { Text,Container, Header, Content, Form, Item, Input, Label, Button ,
    Body,Title} from 'native-base';
import {View ,ActivityIndicator,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
import  {onLoginSuccess} from './../2.actions'
import {Fire } from './../support/firebase'
import { StackActions, NavigationActions } from 'react-navigation'

 class Login extends Component {
  state={password:'',email:'',loading:true,loadingSignin:false}

  componentDidMount(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.props.onLoginSuccess(user.email,user.uid)
         
      }else{
        this.setState({loading:false})
      }
    })
  }

  componentDidUpdate(){
    //component did update mesti ada pengkondisian kl ga infinite loop
    if(this.props.user.email){
      const resetAction = StackActions.reset({
        index:0,
        actions: [NavigationActions.navigate({routeName:'home'})]
      })
        this.props.navigation.dispatch(resetAction)
        this.setState({loading:false})
    }
  }




  onBtnLogin = ()=>{
    if(this.state.password && this.state.email){
      this.setState({loadingSignin:true})
      const login = Fire.auth()
      login.signInWithEmailAndPassword(this.state.email,this.state.password)
      .then((val)=>{
          this.props.onLoginSuccess(val.user.email,val.user.uid)
      })
      .catch((err)=>{
        this.setState({loadingSignin:false})
        alert(err.message)
      })
    }else{
      alert("Data Kosong")
    }

  }
  render() {
    if(this.state.loading){
      return(
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
        <ActivityIndicator size='large' color='black'/>

        </View>
      )
    }
    return (
      <Container>
        <Header>
                <Body>
                    <Title>{this.props.email}</Title>
               </Body>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <TextInput placeholder='Email Address'  value={this.state.email} onChangeText={(val)=>this.setState({email:val})}></TextInput>

            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <TextInput placeholder='Password' value={this.state.password} onChangeText={(val)=>this.setState({password:val})}></TextInput>
            
            </Item>
            {
              this.state.loadingSignin ?
              <ActivityIndicator size='large' color='black'/>
              :  <Button block onPress={this.onBtnLogin}>
              <Icon name="home" size={30}></Icon>  
              <Text>Login</Text> 
        </Button>
            }
           
            <View style={{flexDirection:"row",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                <View style={{height:60,width:60,}}>
                <Icon name="facebook-square" size={30}></Icon>  
                </View>
                <View style={{height:60,width:60}}>
                <Icon name="google" size={30}></Icon>  
                </View>
                <View style={{height:60,width:60}}>
                <Icon name="twitter" size={30}></Icon>  
                </View>
            </View>
            <View style={{flexDirection:"row",alignSelf:"center"}}>
                <Text>Masa lom punya Account? Register <Text onPress={()=>this.props.navigation.navigate("register")}>sini</Text></Text>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    user:state.auth
  }
    
  
}

export default connect(mapStateToProps,{onLoginSuccess})(Login)