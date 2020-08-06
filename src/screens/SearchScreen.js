import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [response, result, errorMessage] = useResult();
    return (
        <View>
            <SearchBar term={term} onFunc={(newTerm) => setTerm(newTerm)} onPrint={() => response(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>{result.length}</Text>
        </View>
    );
};

const style = StyleSheet.create({});
export default SearchScreen;
