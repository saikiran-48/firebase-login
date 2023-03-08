import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD7jfE-58z4MlmcTmh_hOuEgKfFabqG6L0',
  authDomain: 'auth-3d0d1.firebaseapp.com',
  projectId: 'auth-3d0d1',
  storageBucket: 'auth-3d0d1.appspot.com',
  messagingSenderId: '304283141036',
  appId: '1:304283141036:web:8d0fa1a705d53123afb009',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
