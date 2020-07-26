import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({navigation}) => {
    return(
        <>
        <Text style={{ fontSize:40 }}>TrackListScreen</Text>
        <Button title="Co to Track Detail" onPress={() => navigation.navigate('TrackDetail')}/>
        </>
    );
};

const styles = StyleSheet.create({});

export default TrackListScreen;