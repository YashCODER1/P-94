var firebaseConfig = {
    apiKey: "AIzaSyDtKHwXitI3a6D5j24XvJkdxGvCSjPmrBQ",
    authDomain: "lets-chat-app-web.firebaseapp.com",
    databaseURL: "https://lets-chat-app-web-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-web",
    storageBucket: "lets-chat-app-web.appspot.com",
    messagingSenderId: "698064422948",
    appId: "1:698064422948:web:2d6ba5b57fabfcda72f0b1"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

          });
          document.getElementById("msg").value="";

    }