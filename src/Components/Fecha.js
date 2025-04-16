import React from 'react';
import { Text } from 'react-native';

const FechaActual = () => {
  // Obtener la fecha actual
  const fecha = new Date();

  // Opciones para formatear la fecha en español
  const opcionesDiaSemana = { weekday: 'long' }; // 'martes'
  const opcionesMes = { month: 'long' }; // 'abril'

  // Formatear partes de la fecha
  const diaSemana = fecha.toLocaleDateString('es-ES', opcionesDiaSemana);
  const diaNumero = fecha.getDate(); // 15
  const mes = fecha.toLocaleDateString('es-ES', opcionesMes); // 'abril'

  // Capitalizar la primera letra del día y mes (opcional)
  const diaSemanaFormateado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
  const mesFormateado = mes.charAt(0).toUpperCase() + mes.slice(1);

  // Texto final: "Martes, 15 abril"
  const fechaFormateada = `${diaSemanaFormateado}, ${diaNumero} ${mesFormateado}`;

  return (
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>
      {fechaFormateada}
    </Text>
  );
};

export default FechaActual;