import React from 'react';
import Register from './components/Register';
import './App.css';
import Login from './components/Login';
import { Home } from './components/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

export default function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState('home');
        } else {
          setUser(null);
          setAuthState('login');
        }
      }
    );

    return unSubscribeAuth;
  }, []);

  if (authState === null) return <h1>Loading . . . </h1>;
  if (authState === 'register')
    return <Register setAuthState={setAuthState} setUser={setUser} />;
  if (authState === 'login')
    return <Login setAuthState={setAuthState} setUser={setUser} />;
  if (user) return <Home setAuthState={setAuthState} setUser={setUser} />;
  return (
    <div>
      <Register />
    </div>
  );
}
