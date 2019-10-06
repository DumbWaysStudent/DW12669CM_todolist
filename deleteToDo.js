import React, { Component } from 'react'
import {
    TextInput,
    SafeAreaView,
    Text,
    View,
    StyleSheet, TouchableOpacity
} from 'react-native'
import { Button, Icon } from 'native-base'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodoList: '',
            toDoList: [
                { 'id': 1, 'task': 'Work' },
                { 'id': 2, 'task': 'Swim' },
                { 'id': 3, 'task': 'Study' },
                { 'id': 4, 'task': 'Sleep' }
            ]
        }
    }

    addTodoList() {
        if (this.state.newTodoList == '') {
            alert('Your input is empty!!!');
        } else {
            let id = this.state.toDoList.length + 1
            let list = this.state.toDoList

            const taskBaru = { 'id': id, 'task': this.state.newTodoList }
            list.unshift(taskBaru)

            this.setState({
                toDoList: list,
                newTodoList: ''
            })
        }
    }

    delRow(input) {
        for (let i = 0; i <this.state.toDoList.length;i++){
           if ( this.state.toDoList[i].id == input) {
            this.setState( (state)=> {
                return state.toDoList.splice(i,1)
    
            })
           }
        }

       
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
                    <TouchableOpacity style={style.boxButtonStyle} onPress={() => this.addTodoList()}
                    >
                        <Text> Add </Text>
                    </TouchableOpacity>

                </View>
                <View style={style.listPadding}>
                    {this.state.toDoList.map((isi) =>
                        <View style={style.bottomBorder}>
                            <Text key={isi.id}
                                style={[style.textPadding, style.textStyle,style.textFlex]}
                            >
                                {isi.task}
                            </Text>
                            <TouchableOpacity style={style.buttonFlex}
                            onPress={()=> this.delRow(isi.id)}
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
        paddingLeft: 10,
    },
    list:{
        flex:1,
    },
    listToDo:{
        flex:8,
    },
    listDel:{
        flex:1,
    },
    listUp:{
        flex:1,
    },
    iconStyle:{
        fontSize: 45,
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
    textFlex:{
        flex: 8,
    },
    buttonFlex:{
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
    iconPadding:{
        justifyContent: 'center',
    },
    bottomBorder: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 10,

    }
})