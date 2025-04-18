import icons from "./icons";

const buttons = [
  { title: "Teléfono", url: 'tel:', imageSource: icons.Call },
  { title: "WhatsApp", url: "https://wa.me/1234567890", imageSource: icons.WhatsApp },
  { title: "Email", url: "mailto:", imageSource: icons.Email },
  { title: "SMS", url: "sms:", imageSource: icons.SMS },
  
  // Navegación
  { title: "Google", url: "https://www.google.com", imageSource: icons.Google },
  { title: "YouTube", url: "https://www.youtube.com/", imageSource: icons.Youtube },
  { title: "Mapas", url: "https://maps.google.com", imageSource: icons.Map },
  
  // Redes sociales
  { title: "Instagram", url: "https://www.instagram.com/", imageSource: icons.Instagram },
  
  // Utilidades
  { title: "Calculadora", url: "intent:#Intent;action=android.intent.action.CALCULATOR;end", imageSource: icons.Calculator },
  { title: "Galería", url: "com.miui.gallery", imageSource: icons.Gallery },
  { title: "Ajustes", url: "settings://", imageSource: icons.Settings },
  { title: "Asistente", url: "voicerecorder://", imageSource: icons.Voice },
  
  // Educación
  { title: "Moodle", url: "https://moodle.org/", imageSource: icons.Moodle },
  
  // Tiendas
  { title: "Play Store", url: "https://play.google.com/", imageSource: icons.PlayStore },
  
  // Ejemplos adicionales
  /* { title: "Llamada rápida", url: "tel:1234567890", imageSource: icons.Call },
  { title: "Email contacto", url: "mailto:contacto@ejemplo.com", imageSource: icons.Email },
  { title: "Mensaje directo", url: "sms:1234567890", imageSource: icons.SMS } */
];

export default buttons;
// Nota: Algunas URLs (como settings://) pueden requerir configuración adicional
// para funcionar en cada plataforma (iOS/Android)