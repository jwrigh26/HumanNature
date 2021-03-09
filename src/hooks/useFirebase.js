import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/functions';
import config from 'helpers/config';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId,
  measurementId: config.measurementId,
};

let fbInstance = null;

export function getFirebase() {
  if (typeof window !== 'undefined') {
    if (fbInstance) {
      console.log('Returning copy');
      return fbInstance;
    }
    fbInstance = firebase.initializeApp(firebaseConfig);
    console.log('Do we have fb? ', fbInstance);
    return fbInstance;
  }
  return null;
}

export default function useFirebase() {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    setInstance(getFirebase());
  }, []);

  return instance;
}
