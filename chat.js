


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtPjEv-HQ2aHLrXxPuRntUcUua6iTWU-Q",
    authDomain: "lets-chat-e3ae9.firebaseapp.com",
    projectId: "lets-chat-e3ae9",
    storageBucket: "lets-chat-e3ae9.appspot.com",
    messagingSenderId: "299177673362",
    appId: "1:299177673362:web:469ab9764d72943b03dc4b",
    measurementId: "G-6JHBDD9WHG"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
