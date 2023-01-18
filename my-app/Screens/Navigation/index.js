import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {routes} from '../index';

const Item = ({ title, navigation }) => (
    <View style={[styles.card, styles.shadowProp]}>
        <TouchableOpacity onPress={() => { navigation.navigate(title) }}>
            <Text style={styles.heading}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
);

const Navigation = (props) => {
    const { navigation } = props;
    const renderItem = (props) => (
        <Item title={props.item} navigation={navigation} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Object.keys(routes)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    item: {
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 32,
    },
    heading: {
        fontSize: 18,
        fontWeight: '600',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export default Navigation;
