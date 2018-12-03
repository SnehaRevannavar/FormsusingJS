var users = [];


document.getElementById("save").onclick = function () {
    if (localStorage.a_users) {

        users = JSON.parse(localStorage.a_users);
    }
    var refresh = document.getElementsByTagName('p');
    for (var i = 0; i < refresh.length; i++) {
        refresh[i].innerHTML = "";
    }

    var user = {
        "Username": document.getElementById("uname").value,
        "Password": document.getElementById("pwd").value,
        "Firstname": document.getElementById("fname").value,
        "Lastname": document.getElementById("lname").value,
        "Email_ID": document.getElementById("email").value,
        "FGender": document.getElementById("female").checked,
        "MGender": document.getElementById("male").checked,
        "Location": document.getElementById("loc").value,

    };


    var valid = 1;
    if (user.Username == "") {
        valid = 0;
        document.getElementById("uname").insertAdjacentHTML('afterend', '<p id="uerror" style="color:red">Please enter your username</p>');
    }
    if (user.Password == "") {
        valid = 0;
        document.getElementById("pwd").insertAdjacentHTML('afterend', '<p id="perror" style="color:red">Please enter your password</p>');
    }
    if (user.Firstname == "") {
        valid = 0;
        document.getElementById("fname").insertAdjacentHTML('afterend', '<p id="ferror" style="color:red">Please enter your firstname</p>');
    }
    if (user.Lastname == "") {
        valid = 0;
        document.getElementById("lname").insertAdjacentHTML('afterend', '<p id="lerror" style="color:red">Please enter your lastname</p>');
    }
    if (user.Email_ID == "") {
        valid = 0;
        document.getElementById("email").insertAdjacentHTML('afterend', '<p id="eerror" style="color:red">Please enter your email address</p>');
    }
    if (user.FGender == "" && user.MGender == "") {
        valid = 0;
        document.getElementById("gender").insertAdjacentHTML('afterend', '<p id="gerror" style="color:red">Please enter your gender</p>');
    }
    if (user.Location == "") {
        valid = 0;
        document.getElementById("loc").insertAdjacentHTML('afterend', '<p id="locerror" style="color:red">Please enter your location</p>');
    }


    if (valid) {
        
        users.push(user);
        localStorage.a_users = JSON.stringify(users);

        console.log(users);
        santacalls();
    
    }

};
function removeError() {
    
}

function removeError(id) {
   
            if(id =="uname"){
                document.getElementById("uname").nextSibling.innerHTML = "";
            }
            if(id=="pwd"){
                document.getElementById("pwd").nextSibling.innerHTML = "";
            }
            if(id=="fname"){
                document.getElementById("fname").nextSibling.innerHTML = "";
            }
            if(id=="lname"){
                document.getElementById("lname").nextSibling.innerHTML = "";
            }
            if(id=="email"){
                document.getElementById("email").nextSibling.innerHTML = "";
            }
            if(id=="loc"){
                document.getElementById("loc").nextSibling.innerHTML = "";
            }
        
    } 


function removeGError(name) {
    if (name == "gender") {
        document.getElementById("gender").nextSibling.innerHTML = "";
    }
}
