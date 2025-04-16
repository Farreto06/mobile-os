import { View, Text , Image, ImageBackground, StyleSheet} from 'react-native'
import React from 'react'
import Reloj from '../Components/Reloj'

const icon = require('../../assets/bg-images/iphone-11.jpg')

const HomeScreen = () => {
    return (
    <View style={styles.container}>
        <Image source={icon} style={styles.backgroundImage} resizeMode='cover'/>
        {/* Otros componentes */}
        <View style={styles.contentTop}>
            <Reloj/>
            <Fecha/>
            <Text style={styles.text}>Hello</Text>
        </View>
        <View style={styles.contentCenter}></View>
        <View style={styles.contentBottom}>
            <Text style={styles.text}>Hello of bottom</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    contentTop: {
        flex: 0.2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,160,0.3)', // Opcional: overlay semitransparente
        paddingTop: 20,
    },
    contentCenter:{
        flex:0.6,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,160,0,0.3)',
    },
    contentBottom:{
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(160,0,0,0.3)', 
    },
    Reloj:{
        marginTop:20
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    });

export default HomeScreen