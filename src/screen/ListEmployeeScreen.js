import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire } from './../support/firebase'
import {connect} from 'react-redux'
import {Alert} from 'react-native'

class ListEmployee extends Component {
    state={ data:{}}
       
    componentDidMount(){
      var db = Fire.database()
      var employee = db.ref(`database/${this.props.user.id}/employee`)

      employee.on('value', (items)=>{
          this.setState({data:items.val()})
      },(err)=>console.log(err))

    }
    onBtnDelete=(val)=>{
      Alert.alert("Delete Item","Are you Sure delete "+this.state.data[val].nama,[
        {text:'Yes',onPress:() => Fire.database().ref(`database/${this.props.user.id}/employee/${val}`).remove()},
        {text:'Cancel'}])
    }
    
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
        { this.state.data!==null?  Object.keys(this.state.data).map((val)=>{
            return(
            <ListItem onPress={()=>this.props.navigation.navigate('detail',{
              nama:this.state.data[val].nama,
              shift:this.state.data[val].shift,
              phone:this.state.data[val].phone
            })}>

                <Left>
                
                  <Icon style={{marginRight:10}} size={26} onPress={()=>this.onBtnDelete(val)} name="trash"></Icon>
                  
                    <Text>{this.state.data[val].nama}</Text>
                  
                </Left>
                

                <Right>
                    <Icon name="chevron-right"></Icon>
                </Right>
            </ListItem>
            )
        }):null
             
        }
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    user: state.auth
  }
}

export default connect(mapStateToProps)(ListEmployee)