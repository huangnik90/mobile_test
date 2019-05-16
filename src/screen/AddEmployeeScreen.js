import React, { Component } from 'react';
import {Button, Container, 
    Body,Title,
    Header, Content, Form, Item, Input, Label, Picker, Right, Left ,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire } from './../support/firebase'
import {connect} from 'react-redux'


class AddEmployee extends Component {
    state={name:'',phone:'',selected:null}

    onBtnAdd=()=>{
      if(this.state.name && this.state.phone && this.state.selected){
        const db = Fire.database()
        var employee = db.ref(`database/${this.props.user.id}/employee`)

        employee.push({
          nama:this.state.name,
          phone:this.state.phone,
          shift:this.state.selected
      })
      .then((res)=>{
        alert("sukses add")
        this.setState({name:'',phone:'',selected:null})
       console.log(res)})
      .catch((err)=>{
        alert(err.message)
      })


      }else{
        alert("Data Kosong")
      }
    }

  render() {
    return (
      <Container>
            <Header>
                <Body>
                    <Title>Add Employee Page</Title>
               </Body>
        </Header>
        <Content>
          <Form>
                    <Item stackedLabel>
                    <Label>Employee Name</Label>
                   <Input value={this.state.name} onChangeText={(val)=>this.setState({name:val})}/>
                    </Item>
                    <Item stackedLabel>
                    <Label>Phone Number</Label>
                   <Input value={this.state.phone} onChangeText={(val)=>this.setState({phone:val})}/>
                    </Item>
            
            <Item>
                <Left>
                    <Item>
                    <Label>Select Day</Label>
                   
                    </Item>
                </Left>
                <Right>
                <Picker
                 mode="dropdown" 
                 style={{ width:120}} 
                 selectedValue={this.state.selected}
                 onValueChange={(value)=>this.setState({selected:value})}>
                    <Picker.Item label='-SELECT DAY-' value=''/>
                    <Picker.Item label='Monday' value='Monday'/>
                    <Picker.Item label='Tuesday' value='Tuesday'/>
                    <Picker.Item label='Wednesday' value='Wednesday'/>
                    <Picker.Item label='Thursday' value='Thursday'/>
                    <Picker.Item label='Friday' value='Friday'/>
                    <Picker.Item label='Saturday' value='Saturday'/>
                    <Picker.Item label='Sunday' value='Sunday'/>
                </Picker>
                </Right>  
           

            </Item>
            <Button block onPress={this.onBtnAdd}>
                  <Icon name="home" size={30}></Icon>  
                  <Text>Add Data</Text> 
            </Button>
          </Form>
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


export default connect(mapStateToProps) (AddEmployee)