// !IMPORTANT: REPLACE WITH YOUR OWN CONFIG OBJECT BELOW

// Initialize Firebase

const firebae=require('firebase');
var config = {
  apiKey: "AIzaSyB-QNfPlxfkpMy9H4yzyBFIh6QyjCeDYuI",

  authDomain: "testproject-cde18.firebaseapp.com",

  databaseURL: "https://testproject-cde18-default-rtdb.firebaseio.com",

  projectId: "testproject-cde18",

  storageBucket: "testproject-cde18.appspot.com",

  messagingSenderId: "975068691934",

  appId: "1:975068691934:web:c7404730f7d5aae0d9714f",
};

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];

firebase.initializeApp(config);

// Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const usersRef = dbRef.child("data");

const fun = () => {
  try {
    for (let i = 0; i < 20; i++) {
      const userRef = dbRef.child("users/" + `Data_${i}`);
      dbRef.push(arr1[i]);
      dbRef.push(arr2[i]);
      dbRef.push(arr3[i]);
    }
  } catch (error) {console.log(error)}
};

fun();