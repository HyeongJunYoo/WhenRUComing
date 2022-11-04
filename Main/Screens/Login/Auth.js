import { initializeApp } from "firebase/app";
import {
    initializeAuth,
    getReactNativePersistence,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDq35wSN1x_tPgks-QlCiFQRDrBBRRoem4",
  authDomain: "whenrucoming-cf90e.firebaseapp.com",
  projectId: "whenrucoming-cf90e",
  storageBucket: "whenrucoming-cf90e.appspot.com",
  messagingSenderId: "951636494261",
  appId: "1:951636494261:web:2761df9c3e2d023480bbfc",
  measurementId: "G-FX10YH9D7D"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

export function login({userId, userPassword}) {
    return signInWithEmailAndPassword(
      auth,
      userId,
      userPassword
    );
}

export function signUp({userId, userPassword}) {
  return createUserWithEmailAndPassword(
    auth,
    userId,
    userPassword
  );
}

export function subscribeAuth(callback) {
  return onAuthStateChanged(
    auth,
    callback);
}

export function logout() {
  return signOut(
    auth
  );
}
