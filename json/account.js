var user = ['thanggtrann12'];
var pass = ['1'];
function login() {
    for (var i = 0; i < user.length; i++)
        if (user[i] == document.getElementById("username").value && pass[i] == document.getElementById("password").value) {
            console.log("in coming");
            location.replace("https://thanggtrann12.github.io/IOT/templates/sidebar.html")
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
        document.location = "/IOT/templates/index.html";
    }
    else {
        alert("Password donot match");
        document.location = "/IOT/templates/signup.html";
    }

}

