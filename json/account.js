firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
     
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        
        window.location.href="/IOT/templates/sidebar.html";
      }
  
    } else {
      // No user is signed in.
  
      document.getElementById("username").style.display = "block";
      document.getElementById("password").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("username").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
     
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }
  function signUp(){
          
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(userEmail,userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
    
    alert("Signed Up");
  }
  
  