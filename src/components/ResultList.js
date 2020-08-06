import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultDetail';
const ResultList = ({ title, result, navigation }) => {
    if (!result.length) {
        return null
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={key => key.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("ResultShow", { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    container: {
        marginBottom: 10
    }

})

export default withNavigation(ResultList);