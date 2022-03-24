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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addroom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",room_name);
      window.location="lets-chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room_name",room_name);
row="<div class='room_name' id="+Room_names+"onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="lets-chat.html"; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}