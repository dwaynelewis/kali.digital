const firebaseConfig = {
  apiKey: "AIzaSyBDREn0xap7nB6lgKO9OGkzDjh7SQ13lIM",
  authDomain: "kali-digital-007.firebaseapp.com",
  databaseURL: "https://kali-digital-007.firebaseio.com",
  projectId: "kali-digital-007",
  storageBucket: "kali-digital-007.appspot.com",
  messagingSenderId: "68019055749",
  appId: "1:68019055749:web:f3da408b17a482e0"
};

$(document).ready(function() {
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.collection("users")
    .add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});


// Looking for NodeJS developer with sequelize experience for making restful APIs for online shopping. This position is long term.

// We are looking for support in a making APIs for web application.
// The App is being built in PERN stack with NextJS.

// Candidate must have experience in following:

// NodeJS
// Express
// Postgres
// Sequelize
// Git

// Candidate must have some experience in working with payment gateways
// Candidate must have required devOps experience to make the Application live on Production and Staging environments on Heroku.

// Good to Have:
// React and NextJS



// APIs with Documentation for:

// Authentication, Authorization and User management
// Cart / Products / Store (everything needed for completing the online shopping) [Note that we are selling digital goods with download links]
// Chargebacks and credit card processing 
// Content creators (Users with special roles) should be able to add new contents through Form posts. 

// + few additional things which would be disclosed on the job.