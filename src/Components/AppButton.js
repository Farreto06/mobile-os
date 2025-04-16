import {  View, Text, TouchableOpacity, Image, Linking, Alert, StyleSheet  } from 'react-native';
import React from 'react';

const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
        await Linking.openURL(url);
    } else {
        Alert.alert(`No se puede abrir la URL: ${url}`);
    }
};

const AppButton = ({ title, url, imageSource }) => {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={() => {Linking.openURL(url)}}
      >
        <Image 
          source={imageSource} 
          style={styles.icon} 
          resizeMode="contain"
        />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginVertical: 10,
    },
    icon: {
      width: 50,  // Ajusta según necesidad
      height: 50,  // Ajusta según necesidad
    },
    text: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  
  export default AppButton;
  