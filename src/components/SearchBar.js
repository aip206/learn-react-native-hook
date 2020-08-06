import React from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onFunc, onPrint}) => {
    return (
        <View style={style.backgroundStyle}>
            <Feather name="search" style={style.iconStyle}/>
            <TextInput
            value = {term}
            onChangeText={onFunc}
            onEndEditing={onPrint}
             style={style.inputStyle} placeholder="Search"/>
        </View>
    );
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop:10,
        backgroundColor: '#F0EEEF',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        flex:1,
        fontSize: 18
    },
    iconStyle:{
        marginHorizontal:10,
        fontSize : 28,
        alignSelf: 'center'
    }
});
export default SearchBar;
