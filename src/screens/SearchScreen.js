import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResult from '../hooks/useResult';
const SearchScreen = (props) => {
    const [term, setTerm] = useState('');
    const [response, result, errorMessage] = useResult();

    const filterResult = (fltr) => {
        return result.filter((r) => {
            return r.price === fltr
        })
    }
    return (
        <View style={{flex:1}}>
            <SearchBar term={term} onFunc={(newTerm) => setTerm(newTerm)} onPrint={() => response(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList title="Cost Effective" result={filterResult('$')} navigation={props.navigation} />
                <ResultList title="Bit Pricier" result={filterResult('$$')} navigation={props.navigation}/>
                <ResultList title="Bit Spender" result={filterResult('$$$')} navigation={props.navigation}/>
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({});
export default SearchScreen;
