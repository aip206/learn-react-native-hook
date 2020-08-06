import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import SearchService from "../services/SearchService"
const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getByid = async (id) => {
        const res = await SearchService.getById(id);
        setResult(res.data);
    }
    useEffect(() => {
        getByid(id);
    }, [])
    if (!result) {
        return null
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120
    }
})

export default ResultShowScreen;