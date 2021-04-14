firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    window.location.href="/IOT/templates/sidebar.html"
    window.location.assign="/IOT/templates/sidebar.html"
    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      alert("welcome"+email_id);

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

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
		
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
  
  alert("Signed Up");
}

var user = ['thanggtrann12'];
          var pass = ['0393807319'];
            function login()
                {
                for (var i = 0; i<user.length;i++)
                if (user[i] == document.getElementById("username").value && pass[i] == document.getElementById("password").value) 
                 {
                  window.location.href = "/IOT/templates/sidebar.html";
                
                 }
               else 
                {
                 alert("Your account incorrect");                      
                }
          }
          function signup()
          {
              user.push(document.getElementById("username").value);
              pass.push(document.getElementById("password").value);
             
          }