import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';
const ResultList = ({ title, result }) => {

    return (
        <View>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                data={result}
                keyExtractor={key => key.id}
                renderItem={({ item }) => {
                    return <ResultDetail result={item} />
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default ResultList;