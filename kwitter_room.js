
const firebaseConfig = {
    apiKey: "AIzaSyD99DsDR58Z5N8dR2lLxvRxyq3wNIznroY",
    authDomain: "kwitter-7f23b.firebaseapp.com",
    databaseURL: "https://kwitter-7f23b-default-rtdb.firebaseio.com",
    projectId: "kwitter-7f23b",
    storageBucket: "kwitter-7f23b.appspot.com",
    messagingSenderId: "474378443490",
    appId: "1:474378443490:web:af06ad867c5807ff2d1cbb"
  };
   firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
  
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding Room_name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Roomname= " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  
  function redirectToRoomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  } 
  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }
  