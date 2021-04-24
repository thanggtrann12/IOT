

    function logout()
    {
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("/IOT/templates/login.html");
        })
    }

 function init()
{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          //window.location.replace("/IOT/templates/sidebar.html");
          
        } else {
          // No user is signed in.
        
          console.log("redirect");
          window.location.replace("/IOT/templates/login.html");
        }
      });
}
    
init();


