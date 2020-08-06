import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Service from '../services/SearchService';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const response = async () => {
        try {
            const res = await Service.search(term)
            setResult(res.data.businesses)
        } catch (e) {
            console.log(e);
            setErrorMessage("Something went wrong")
        }
    }
    // console.log(result)
    return (
        <View>
            <SearchBar term={term} onFunc={(newTerm) => setTerm(newTerm)} onPrint={() => response()} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>{result.length}</Text>
        </View>
    );
};

const style = StyleSheet.create({});
export default SearchScreen;
