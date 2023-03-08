import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export const Home = () => {
  function handleSignOut({ setUser, setAuthState }) {
    signOut(auth).then(() => {
      setUser(null);
      setAuthState('login');
    });
  }

  return (
    <div className="home">
      <h1>Welcome to home page</h1>
      <button className="logout-btn" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
};
