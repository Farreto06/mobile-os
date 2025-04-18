import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      title: 'Acerca del teléfono',
      icon: '📱',
      action: () => navigation.navigate('PhoneInfo'),
    },
    {
      title: 'Acerca del sistema operativo',
      icon: '🖥️',
      action: () => navigation.navigate('OSInfo'),
    },
    {
      title: 'Almacenamiento',
      icon: '💾',
      action: () => navigation.navigate('StorageInfo'),
    },
    {
      title: 'Procesos',
      icon: '⚙️',
      action: () => navigation.navigate('ProcessesInfo'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Configuración del Sistema</Text>
      
      {menuItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.menuItem}
          onPress={item.action}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <Text style={styles.menuText}>{item.title}</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity 
        style={styles.developerButton}
        onPress={() => Linking.openURL('https://github.com/tu-usuario')}
      >
        <Text style={styles.developerText}>Versión 1.0.0 - © 2023</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
  developerButton: {
    marginTop: 30,
    alignItems: 'center',
  },
  developerText: {
    color: '#888',
    fontSize: 12,
  },
});

export default SettingsScreen;