import { Text, TouchableOpacity, Image, Linking, Alert, StyleSheet, Platform  } from 'react-native';
import React from 'react';

const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`No se puede abrir la URL: ${url}`);
    }
};

const openApp = async (url, androidPackage) => {
  try {
    await Linking.openURL(url);
  } catch (e) {
      try{
        Alert.alert("hola")
        if (Platform.OS === 'android') {
          await Linking.sendIntent(url);
        }
      } catch (e2){
        Alert.alert(`No se puede abrir la URL: ${url}`)
      }
  }
};

const AppButton = ({ title, url, imageSource }) => {
    return (
      <TouchableOpacity 
        style={styles.container}
        // onPress={() => {Linking.openURL(url)}}
        onPress={()=>{openApp(url)}}
      >
        <Image 
          source={imageSource} 
          style={styles.icon} 
          resizeMode="contain"
        />
        <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center', // Centra verticalmente
      paddingVertical: 0,      // Espacio vertical
      paddingHorizontal: 5,     // Espacio horizontal
      // backgroundColor: 'rgba(160, 0, 0, 0.3)',
      minWidth: 80,             // Ancho mínimo
      height: 100,              // Altura fija suficiente
      borderRadius: 8,          // Opcional: bordes redondeados
      margin: 5,                // Margen entre botones
      marginVertical: -8,
    },
    icon: {
      width: 50,                // Reducido para dar más espacio
      height: 50,               // Reducido para dar más espacio
      marginBottom: 8,          // Espacio entre icono y texto
    },
    text: {
      fontSize: 12,             // Tamaño ligeramente mayor
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      width: '100%',
      paddingHorizontal: 2,     // Pequeño padding horizontal
      includeFontPadding: false, // Elimina padding adicional en Android
    },
  });
  
  export default AppButton;
  