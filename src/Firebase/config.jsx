
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA3Foxp80ReJrZ3lcoPZ8xPUHHGB0tTXXA",
    authDomain: "vixen-react.firebaseapp.com",
    projectId: "vixen-react",
    storageBucket: "vixen-react.appspot.com",
    messagingSenderId: "1037850491089",
    appId: "1:1037850491089:web:827db84765bb7dc0fa2df0"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}