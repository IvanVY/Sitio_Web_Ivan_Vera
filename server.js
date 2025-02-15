// server.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Proporcionar la configuración de Firebase al frontend
app.get('/firebase-config', (req, res) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  };
  res.json(firebaseConfig);
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para cerrar sesión
app.get('/logout', (req, res) => {
  res.redirect('/login.html'); // Redirige al usuario a la página de inicio de sesión
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});