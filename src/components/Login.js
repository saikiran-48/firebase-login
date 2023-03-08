import React from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ setUser, setAuthState }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleLogin() {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          setUser(user.user.email);
          setAuthState('home');
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <div className="container">
      <h2>Login Page</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account
        <span onClick={() => setAuthState('register')}>Register</span>
      </p>
    </div>
  );
}
