import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View>
            <Text style ={teks.Judul}>BIODATA</Text>
            </View>
        )
    }
}
const teks = {
Judul: {
 color: 'red',
 fontSize: 35,
 fontWeight: 'bold',
}
}