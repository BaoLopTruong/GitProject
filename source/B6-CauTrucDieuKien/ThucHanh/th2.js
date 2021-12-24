
function checkaccount(){
    var username = document.getElementById('username').value;
   
    if(username == "Admin"){
        document.getElementById('classpassword').style = "opacity: 1";
    }
    else if(username == " " || username ==""){
        alert("Canceled.");
    }
    else{
        alert("I don't know you.");
    }
   
}


function checkpassword(){

    var password = document.getElementById('password').value;
    if(password == "TheMaster"){
       alert("Welcome.");
       document.getElementById('form').style = "opacity: 0";
       document.getElementById('welcome').style = "opacity: 1";
       document.getElementById('welcome').innerHTML = "Welcome Admin";
    }
    else if(password == "" || password== " "){
        alert("Canceled.");
    }
    else{
        alert("Wrong Password.");
    }
   

}


function cpassword(event){
    if(event.keyCode === 13){
        document.getElementById('login').click();
    }
}


