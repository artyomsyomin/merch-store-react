import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCwEYOIa2qw1QpZ_IxqJeUCD2eTjBUOLjQ',
  authDomain: 'merch-store-react.firebaseapp.com',
  projectId: 'merch-store-react',
  storageBucket: 'merch-store-react.appspot.com',
  messagingSenderId: '883888721991',
  appId: '1:883888721991:web:3f2ca28c3205751b59e162',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

  console.log(snapShot)
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;