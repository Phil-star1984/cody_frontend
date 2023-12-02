import axios from 'axios';
import { toast } from 'react-toastify';

const API = axios.create({
  baseURL: 'https://cody-app.onrender.com',
  withCredentials: true,
});

// Response Interceptor
API.interceptors.response.use(
  response => response, // Erfolgreiche Antwort weiterleiten
  error => {
    // Zentralisierte Fehlerbehandlung
    if (error.response) {
      // Server hat geantwortet mit Statuscode außerhalb des Bereichs 2xx
      console.error('Server-Fehler:', error.response.data);
      toast.error(error.response.data.message || 'Ein Fehler ist aufgetreten');
    } else if (error.request) {
      // Request wurde gesendet, aber keine Antwort erhalten
      console.error('Netzwerk-/Server-Fehler:', error.request);
      toast.error('Netzwerk- oder Serverfehler');
    } else {
      // Etwas anderes hat den Fehler ausgelöst
      console.error('Error', error.message);
      toast.error('Ein unbekannter Fehler ist aufgetreten');
    }
    return Promise.reject(error);
  }
);

export default API;
