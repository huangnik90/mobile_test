import React, { Component } from 'react';
import {View} from 'react-native'
import {Button, Container, 
    Body,Title,
    Header, Content, Form, Item, Input, Label, Picker, Right, Left ,Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Fire } from './../support/firebase'
import {connect} from 'react-redux'

 class EditEmployee extends Component {
    state={ nama:'',phone:'',data:{},idEdit:null,selected:null}

componentDidMount(){
    var db = Fire.database()
    var employee = db.ref(`database/${this.props.user.id}/employee`)

    employee.on('value', (items)=>{
        this.setState({data:items.val()})
    },(err)=>console.log(err))

  }

  onSaveBtn = () => {
    
    var db = Fire.database()
    db.ref(`database/${this.props.user.id}/employee/${this.state.idEdit}`).set({
        nama: this.state.nama ? this.state.nama:this.state.data[this.state.idEdit].nama,
        phone: this.state.phone?this.state.phone:this.state.data[this.state.idEdit].phone,
        shift:this.state.selected ?this.state.selected:this.state.data[this.state.idEdit].shift,
    })
    .then((res)=>{
        this.setState({idEdit:null})
        alert("sukses edit")
      
    })
    .catch((err)=>console.log(err))

}
  render() {
      console.disableYellowBox=true;
    return (
      <Container>
            <Header>
                <Body>
                    <Title>Edit Employee Page</Title>
               </Body>
        </Header>
        <Content>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{paddingTop:15}}>
                    <Text>Selected Data</Text>
                </View>
                <View>
                    <Picker 
                    mode="dropdown" 
                    selectedValue={this.state.idEdit} 
                    onValueChange={(value)=>this.setState({idEdit:value})}
                    style={{width:120}}>
                    <Picker.item label='Selected Name' value={null}/>
                        {this.state.data!== null?
                            Object.keys(this.state.data).map((val)=>{
                                return(
                                <Picker.item label={this.state.data[val].nama} value={val}/>
                                    )
                            }):
                            <Picker.item label="KOSONG" value={null}/>

                        }
                    </Picker>
                </View>
            </View>
          <Form>
                    <Item stackedLabel>
                    <Label>Employee Name</Label>
                   <Input defaultValue={this.state.idEdit?this.state.data[this.state.idEdit].nama:null} onChangeText={(val)=>{this.setState({nama:val})}} />
                    </Item>
                    <Item stackedLabel>
                    <Label>Phone Number</Label>
                   <Input defaultValue={this.state.idEdit?this.state.data[this.state.idEdit].phone:null} onChangeText={(val)=>{this.setState({phone:val})}}  />
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
                 style={{ width:150}} 
                 selectedValue={this.state.idEdit && this.state.selected==null ?this.state.data[this.state.idEdit].shift:this.state.selected?this.state.selected:null}
                 onValueChange={(value)=>this.setState({selected:value})}>
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
            <Button block onPress={this.onSaveBtn}>
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
  

export default connect(mapStateToProps)(EditEmployee)