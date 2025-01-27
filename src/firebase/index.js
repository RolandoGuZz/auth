import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeTfb09CyaMwXMKrCizPSConvRvb3GGT0",
  authDomain: "vuejs-auth-64219.firebaseapp.com",
  projectId: "vuejs-auth-64219",
  storageBucket: "vuejs-auth-64219.firebasestorage.app",
  messagingSenderId: "497887529899",
  appId: "1:497887529899:web:4a5cbf25135909020160ee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth