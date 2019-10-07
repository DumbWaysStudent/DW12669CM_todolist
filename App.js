import React, { Component } from 'react'
import {
    TextInput,
    SafeAreaView,
    Text,
    View,
    StyleSheet, TouchableOpacity
} from 'react-native'
import { Icon, CheckBox } from 'native-base'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: '',
            newTodoList: '',
            isEdit: false,
            toDoList: [
                { 'id': 1, 'task': 'Work', 'isDone': false },
                { 'id': 2, 'task': 'Swim','isDone': false},
                { 'id': 3, 'task': 'Study','isDone': false },
                { 'id': 4, 'task': 'Sleep','isDone': false },
            ]
        }
    }

    addTodoList() {
        if (this.state.newTodoList == '') {
            alert('Your input is empty!!!');
        } else {
            let id = this.state.toDoList.length + 1
            let list = this.state.toDoList

            const newTask = { 'id': id, 'task': this.state.newTodoList, 'isEdit': false }
            list.push(newTask)

            this.setState({
                toDoList: [...list],
                newTodoList: ''
            })
        }
    }

    

    delRow(input) {
        for (let i = 0; i < this.state.toDoList.length; i++) {
            if (this.state.toDoList[i].id == input) {
                this.setState((state) => {
                    return state.toDoList.splice(i, 1)

                })
            }
        }


    }

    

    toDoIsDone(check){
        const i = this.state.toDoList.findIndex((index)=> index.id == check)
        if (this.state.toDoList[i].isDone==false){
        this.setState((state) =>{
            return state.toDoList[i].isDone = true
          })
        }else{
            this.setState((state) =>{
                return state.toDoList[i].isDone = false
        })}
                
    }



    render() {
        return (
            <SafeAreaView >
                <View style={style.row} >
                    <View style={style.TextInputCol}>
                        <TextInput style={style.TextInput}
                            onChangeText={(text) => this.setState({ newTodoList: text })}
                            value={this.state.newTodoList}
                        />
                    </View>
                    {this.state.isEdit ?
                        <TouchableOpacity style={style.boxButtonStyle} onPress={() => this.editTodoList()}
                        >
                            <Text> Edit </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={style.boxButtonStyle} onPress={() => this.addTodoList()}
                        >
                            <Text> Add </Text>
                        </TouchableOpacity>
                    }
                </View>
                <View style={style.listPadding}>
                    {this.state.toDoList.map((item) =>
                        <View style={style.bottomBorder}>
                            <CheckBox checked= {item.isDone} style={{marginTop:15}} onPress={ ()=> this.toDoIsDone(item.id)}
                            >

                            </CheckBox>
                            <Text key={item.id}
                                style={[style.textPadding, style.textStyle, style.textFlex]}
                            >
                                {item.task}
                            </Text>
                            
                            
                            <TouchableOpacity style={style.buttonFlex}
                                onPress={() => this.delRow(item.id)}
                            >
                                <Icon style={style.iconStyle} name='trash' />
                            </TouchableOpacity>
                        </View>
                    )}

                </View>
            </SafeAreaView>

        )
    }


}

const style = StyleSheet.create({
    row: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    listPadding: {
        marginTop: 40,
    },
    textPadding: {
        paddingLeft: 50,
    },
    iconStyle: {
        fontSize: 30,
        color: 'red',
    },
    TextInput: {
        paddingLeft: 20,
        width: '100%',
        paddingRight: 20
    },
    TextInputCol: {
        borderRadius: 20,
        borderColor: 'silver',
        borderWidth: 3,
        marginRight: 20,
        width: '70%',
        marginLeft: 20
    },
    textStyle: {
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 10,
    },
    textFlex: {
        flex: 7,
    },
    buttonFlex: {
        flex: 1,
    },
    boxButtonStyle: {
        backgroundColor: 'silver',
        borderColor: 'grey',
        borderWidth: 2,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
    },
    iconPadding: {
        justifyContent: 'center',
    },
    bottomBorder: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,

    }
})