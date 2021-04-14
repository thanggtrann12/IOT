var user = ['thanggtrann12'];
var pass = ['0393807319'];
            function login()
                {
                for (var i = 0; i<user.length;i++)
                if (user[i] == document.getElementById("username").value && pass[i] == document.getElementById("password").value) 
                 {
                  console.log("in coming");
                  alert("Your account correct"); 
                    window.location = "/IOT/templates/sidebar.html";
                    return false;
                }
               else 
                {
                 alert("Your account incorrect");            
                }
          }
         
          function signup()
          {
              
              if (document.getElementById("password_sp").value == document.getElementById("password_cf").value)
              {
              user.push(document.getElementById("username_sp").value);
              pass.push(document.getElementById("password_sp").value);
              console.log("ok");
              window.location.href = "/IOT/templates/index.html";
              }
              else alert("Password donot match");
              window.location.href = "/IOT/templates/signup.html";
             
          }

