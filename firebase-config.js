// Configuração do Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCj2xzFMXHZBQkymoNeTqDMkBmb0e4u0HU",
    authDomain: "stellmods-6ebc6.firebaseapp.com",
    projectId: "stellmods-6ebc6",
    storageBucket: "stellmods-6ebc6.firebasestorage.app",
    messagingSenderId: "430065844590",
    appId: "1:430065844590:web:629fe2e9ccebee947e417f"
  };

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = firebase.firestore();