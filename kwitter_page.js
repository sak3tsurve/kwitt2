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
  room_name=localStorage.getItem("room_name");
  
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
  
      });
  
      document.getElementById("msg").value="";
  
  }
  
  
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
  //Start code
  
  //End code
      } });  }); }
  getData();
  
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }
  