import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

export default function Register({ setUser, setAuthState }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleRegister() {
    if (email !== null && password !== null) {
      createUserWithEmailAndPassword(auth, email, password)
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
      <h2>Register Page</h2>
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

      <button onClick={handleRegister}>SignUp</button>
      <p>
        Already have an account{' '}
        <span onClick={() => setAuthState('login')}>Login</span>
      </p>
    </div>
  );
}
