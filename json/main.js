var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("/IOT/templates/login.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          //window.location.replace("/IOT/templates/sidebar.html");
          
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("/IOT/templates/login.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
document.getElementById("logout_btn").addEventListener("click", function(){
  console.log("sssss");
  mainApp.logout;
})
});