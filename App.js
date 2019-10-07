import React, { Component } from 'react'
import {
  SafeAreaView, 
  Text,
  View,
  StyleSheet,
} from 'react-native'

export default class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       newTodoList: '',
       toDoList: [
         {'id':1,'task':'work'},
         {'id':2,'task':'Swim'},
         {'id':3,'task':'Study'},
         {'id':4,'task':'sleep'}
        ]
     }
   }

  render() {
    return (
      <SafeAreaView>
         <View >
          {this.state.toDoList.map( (item,i) =>
          <View key= {i} style = {style.bottomBorder}>
           <Text key = {item.id}
           style = {[style.textPadding,style.textStyle]}>
           {item.task}
           </Text>
          </View> 
           )}
        </View>
      </SafeAreaView>

    )
  }
  

}

const style = StyleSheet.create({
  row:{
    flexDirection: 'row',
  },
  textPadding:{
    paddingLeft: 10,
  },
  textStyle:{
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
  },
  bottomBorder:{
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
})