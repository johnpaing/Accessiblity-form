let eyeicon = document.getElementById("eyeicon");
let eyeicon1 = document.getElementById("eyeicon1");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm password");

eyeicon.onclick = function(){

    if(password.type === "password"){
        password.type = "text";
        eyeicon.src="img/eye-open.png";

    }else{
        password.type = "password";
        eyeicon.src="img/eye-close.png";
    }
}

eyeicon1.onclick = function(){
    
    if(confirm_password.type === "password"){
        confirm_password.type = "text";
        eyeicon1.src="img/eye-open.png";

    }else{
        confirm_password.type = "password";
        eyeicon1.src="img/eye-close.png";
    }
}
