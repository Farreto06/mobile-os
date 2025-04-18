import { View, Text , Image, StyleSheet, SafeAreaView, FlatList, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import Reloj from '../Components/Reloj'
import Fecha from '../Components/Fecha'
import AppButton from '../Components/AppButton'

import buttons from '../constant/buttons'

const backGround = require('../../assets/bg-images/iphone-11.jpg')

const HomeScreen = () => {
    const natigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
        <Image source={backGround} style={styles.backgroundImage} resizeMode='cover'/>

        <View style={styles.contentTop}>
            <Reloj/>
            <Fecha/>
        </View>

        <FlatList 
        data={buttons}
        numColumns={4} // Grid de 4 columnas
        renderItem={({ item }) => (
            <View style={styles.gridItem}>
            <AppButton 
                title={item.title} 
                url={item.url} 
                imageSource={item.imageSource} 
                />
            </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentCenter}/>

        <View style={styles.contentBottom}>
            <Text style={styles.text}>Hello of bottom</Text>
            <Button title='Settings' onPress={()=>{natigation.navigate('SettingsScreen')}}></Button>
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
        flex: 0.3,
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'rgba(0,0,160,0.3)', // Opcional: overlay semitransparente
        paddingTop: 40,
    },
    contentCenter:{
        flex:1,
        padding: 10,
        // backgroundColor: 'rgba(0,160,0,0.3)',
    },
    contentBottom:{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(160,0,0,0.3)', 
    },
    Reloj:{
        marginTop:20
    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    gridItem: {
        width: '25%',       // Para grid 4x4
        aspectRatio: 0.8,   // Proporción altura/ancho
        padding: 4,
      }
    });

export default HomeScreen