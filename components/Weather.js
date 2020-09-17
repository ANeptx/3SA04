import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.BG}>
                <Text style={styles.Zip}>Zip Code is</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%'

    },
    Zip: {
        textAlign: "center",
        fontSize: 30,
    },
    BG: {
        height: '300',
        backgroundColor: "black",
    }
});
