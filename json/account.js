var user = ['thanggtrann12'];
var pass = ['1'];
function login() {
    for (var i = 0; i < user.length; i++)
        if (user[i] == document.getElementById("username").value && pass[i] == document.getElementById("password").value) 
        {
            console.log("in coming");
            window.location.pathname = "/IOT/templates/sidebar.html";
        }
        else {
            alert("Sai acc");
            window.location.reload();
        }
}

function signup() {

    if (document.getElementById("password_sp").value == document.getElementById("password_cf").value) {
        user.push(document.getElementById("username_sp").value);
        pass.push(document.getElementById("password_sp").value);
        console.log("ok");
        window.location.pathname = "/IOT/index.html";
    }
    else {
        alert("Password donot match");
        window.location.pathname = "/IOT/templates/signup.html";
    }

}

