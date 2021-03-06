import app from 'firebase/app';
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

export default class Firebase {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  constructor() {
    app.initializeApp(firebaseConfig);
  }
}
