// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ32GsgEjFRT5ykM1NyV4owuSVGMdZTG4",
  authDomain: "cookbook-e48de.firebaseapp.com",
  projectId: "cookbook-e48de",
  databaseURL: "https://cookbook-e48de-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "cookbook-e48de.appspot.com",
  messagingSenderId: "216197971973",
  appId: "1:216197971973:web:2476e39b362f3296165c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dbRef = ref(getDatabase());

const getMaszynyDoChleba = get(child(dbRef, `devices/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

export default {getMaszynyDoChleba}
