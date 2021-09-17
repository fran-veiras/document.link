import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD4Gzg2IIr-IE-SQLFGbqxOUZWdW5kOgIc',
  authDomain: 'document-link.firebaseapp.com',
  projectId: 'document-link',
  storageBucket: 'document-link.appspot.com',
  messagingSenderId: '960259911243',
  appId: '1:960259911243:web:d21f85cb4435ad3eb6e7ce',
  measurementId: 'G-KKW67K6E62',
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChange = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizeUser);
  });
};

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(gitHubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const AddInfo = ({ avatar, content, userId, username }) => {
  return db.collection('links').add({
    avatar,
    content,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};
