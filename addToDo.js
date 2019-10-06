import React, { Component } from 'react'
import {
  TextInput,
  SafeAreaView, 
  Text,
  View,
  StyleSheet,
} from 'react-native'
import {Button} from 'native-base'


export default class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       newTodoList: '',
       toDoList: [
         {'id':1,'task':'Work'},
         {'id':2,'task':'Swim'},
         {'id':3,'task':'Study'},
         {'id':4,'task':'Sleep'}
        ]
     }
   }

   addTodoList (){
     let input= this.state.newTodoList
     if (this.state.newTodoList == '') {
      alert('Your input is empty!!!')
     } else{
        let id = this.state.toDoList.length+1
        let list = this.state.toDoList

        const taskBaru= {'id':id,'task':this.state.newTodoList}
        list.unshift(taskBaru)

        this.setState({
          toDoList: list,
          newTodoList: ''
     })
    }
   }

  render() {
    return (
      <SafeAreaView >
        <View style={[style.row,style.boxButtonMargin]}>
          <View style={style.TextInputCol}>
          <TextInput style={style.TextInput}
          onChangeText = { (text)=> this.setState({newTodoList : text }) }
          value = {this.state.newTodoList}
          /></View>
          <Button primary style={style.boxButtonStyle}
          onPress= { ()=>this.addTodoList() }
          >
              <Text >       ADD </Text>
            </Button>
        </View>
        <View style={style.listPadding}>
        {this.state.toDoList.map( (isi) =>
          <View style = {style.bottomBorder}>
           <Text key = {isi.id}
           style = {[style.textPadding,style.textStyle]}
           >
           {isi.task}
           </Text>
          </View> 
           )}
        </View>
      </SafeAreaView>

    )
  }
  

}

const style = StyleSheet.create({
  all:{
    flex: 1,
  },
  row:{
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    
    
  },
  listPadding:{
    paddingTop: 20,
  },
  textPadding:{
    paddingLeft: 10,
  },
  TextInput:{
    paddingLeft: 20,
    width: '100%',
    paddingRight: 20
  },
  TextInputCol:{
    borderRadius: 20,
    borderColor: 'silver',
    borderWidth: 2,
    marginRight: 20,
    width: '70%',
    marginLeft: 20
  },
  textStyle:{
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
  },
  boxButtonStyle:{
    marginRight: 10,
    width: '20%',
    borderRadius: 20
  },
  bottomBorder:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
})