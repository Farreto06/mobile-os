import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reloj = () => {
  const [horaActual, setHoraActual] = useState('');

  useEffect(() => {
    // Actualizar la hora cada segundo
    const intervalo = setInterval(() => {
      const ahora = new Date();
      const hora = ahora.toLocaleTimeString(); // Formato HH:MM:SS
      setHoraActual(hora);
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  return (
      <Text style={styles.textoHora}>{horaActual}</Text>
  );
};

const styles = StyleSheet.create({
  textoHora: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Reloj;