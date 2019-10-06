import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Tugas1 from './makeToDo'
import Tugas2 from './addToDo'
import Tugas3 from './deleteToDo'

class App extends Component {
    render() {
        return (
            <View>
                <Tugas3 />
            </View>
        )
    }
}

export default App;
