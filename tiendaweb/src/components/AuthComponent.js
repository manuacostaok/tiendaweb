// AuthComponent.js
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const registrarUsuario = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro exitoso, puedes acceder a userCredential.user para obtener detalles del usuario
        console.log('Usuario registrado:', userCredential.user);
      })
      .catch((error) => {
        // Manejar errores
        setError(error.message);
      });
  };

  const iniciarSesion = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso, puedes acceder a userCredential.user para obtener detalles del usuario
        console.log('Usuario inició sesión:', userCredential.user);
      })
      .catch((error) => {
        // Manejar errores
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Autenticación</h2>
      <div>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={registrarUsuario}>Registrarse</button>
        <button onClick={iniciarSesion}>Iniciar sesión</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthComponent;