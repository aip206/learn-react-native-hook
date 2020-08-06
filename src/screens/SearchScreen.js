import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResult from '../hooks/useResult';
const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [response, result, errorMessage] = useResult();

    const filterResult = (fltr) => {
        return result.filter((r) => {
            return r.price === fltr
        })
    }
    return (
        <View>
            <SearchBar term={term} onFunc={(newTerm) => setTerm(newTerm)} onPrint={() => response(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ResultList title="Cost Effective" result={filterResult('$')} />
            <ResultList title="Bit Pricier" result={filterResult('$$')} />
            <ResultList title="Bit Spender" result={filterResult('$$$')} />
        </View>
    );
};

const style = StyleSheet.create({});
export default SearchScreen;
