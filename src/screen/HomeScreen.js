import { View, Text , Image, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Reloj from '../Components/Reloj'
import Fecha from '../Components/Fecha'
import AppButton from '../Components/AppButton'

import Call from '../../assets/icon/call-icon.png'

import icons from '../constant/icons'

const icon = require('../../assets/bg-images/iphone-11.jpg')
const youtube = 'https://www.youtube.com/'
const tel = '`tel:${number}`'


const HomeScreen = () => {
    return (
    <SafeAreaView style={styles.container}>
        <Image source={icon} style={styles.backgroundImage} resizeMode='cover'/>
        
        <View style={styles.contentTop}>
            <Reloj/>
            <Fecha/>
        </View>

        <View style={styles.contentCenter}>
            <AppButton 
                title="Telefono"
                url={tel}
                imageSource={icons.Call}
            />
            <AppButton 
                title="YouTube"
                url={youtube}
                imageSource={icons.Youtube}
            />
            <AppButton 
                title="WhatsApp" 
                url="https://wa.me/1234567890" // Reemplaza con un número real
                imageSource={icons.WhatsApp}
            />
            <AppButton 
                title="Google" 
                url="https://www.google.com" 
                imageSource={icons.Google}
            />
        </View>

        <View style={styles.contentBottom}>
            <Text style={styles.text}>Hello of bottom</Text>
        </View>
    </SafeAreaView>
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
        paddingTop: 40,
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