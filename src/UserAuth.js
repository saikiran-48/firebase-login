import React, { useState } from 'react';


export const UserAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email, password);

  const signIn = (e) => {
    e.preventDefault();
  };
  // const signUp = (e) => {
  //   e.preventDefault();
  //   // const auth
  //     .createUserWithEmailandPassword(email, password)
  //     .then((user) => console.log(user))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div>
      <center>
        <form autoComplete="off">
          <h1>Authentication</h1>
          <input
            type={'email'}
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type={'password'}
            value={password}
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={signIn}>sign in</button> &nbsp;&nbsp;
          {/* <button onClick={signUp}>sign up</button> */}
        </form>
      </center>
    </div>
  );
};
