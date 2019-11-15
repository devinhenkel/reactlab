import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBcAB6l9PaxFP_jUk8CGznvymqGpq4thNs",
    authDomain: "react-lab-60959.firebaseapp.com",
    databaseURL: "https://react-lab-60959.firebaseio.com",
    projectId: "react-lab-60959",
    storageBucket: "react-lab-60959.appspot.com",
    messagingSenderId: "58319652728",
    appId: "1:58319652728:web:a39f6293ab3783ceaf2a8d",
    measurementId: "G-DSH17V9DD0"
}

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;