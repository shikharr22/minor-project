 // Your web app's Firebase configuration
 const firebase=require('firebase') 
 var firebaseConfig = {
    apiKey: "AIzaSyB-QNfPlxfkpMy9H4yzyBFIh6QyjCeDYuI",

  authDomain: "testproject-cde18.firebaseapp.com",

  databaseURL: "https://testproject-cde18-default-rtdb.firebaseio.com",

  projectId: "testproject-cde18",

  storageBucket: "testproject-cde18.appspot.com",

  messagingSenderId: "975068691934",

  appId: "1:975068691934:web:c7404730f7d5aae0d9714f"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// node refrence
var userID ="userID"
var firebaseRef = firebase.database()

// data to store
var data = {
    username:"wadiemendja",
    password:"UserPassword"
}

// store data in a node with a random unique key
firebaseRef.ref('users/')
firebaseRef.push(data)
/*
root
  |____ users
          |____-MCadGHUbDSEjwx_Ma
                       |_________ username:"wadiemendja"
                       |_________ password:"UserPassword"
*/ 

// store data in a node with a given key
// firebaseRef.ref('users/'+userID)
// firebaseRef.set(data)
/*
root
  |____ users
          |____userID
                  |___ username:"wadiemendja"
                  |___ password:"UserPassword"
                       
*/ 


