import React, { Component } from 'react'
import {ScrollView} from 'react-native';
// import {Button} from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style = {{marginBottom : 60}}>
            {/*    <Button 
                    onPress = { () => {
                    AsyncStorage.setItem('isLoggedIn', JSON.stringify(false));
                    this.props.navigation.push('SignIn')
                    }}>LogOut</Button> */}           
            </ScrollView>
        )
    }
}


export default Card