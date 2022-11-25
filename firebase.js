// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { 
   getFirestore,
    collection, 
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    onSnapshot,
    updateDoc
   } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhdvW4VCdEA8w3WNaVFVB7Z6ykpumOFn0",
  authDomain: "fir-js-crud-f7baf.firebaseapp.com",
  projectId: "fir-js-crud-f7baf",
  storageBucket: "fir-js-crud-f7baf.appspot.com",
  messagingSenderId: "29595613419",
  appId: "1:29595613419:web:f442002fb154ebdf31a6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const saveTasks = (title, description) => 
     addDoc(collection(db, 'tasks'),{title: title, description: description})
export const getTasks =  () => getDocs(collection(db, 'tasks'))
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'),callback)
export const deleteTask = id => deleteDoc(doc(db, 'tasks', id))
export const getTask = id => getDoc(doc(db, 'tasks', id))
{
 title: 'aaaaa'
 description: 'aaaaa'
}
export const updateTask = (id, newField) => 
updateDoc(doc(db, 'tasks', id),newField )
