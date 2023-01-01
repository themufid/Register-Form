function validate(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    const error = document.getElementById("error");
    const error_message = document.getElementById("error_message");
    const disp = document.getElementById("disp");
    const length = name.length;
    error.style.padding = "10px";

    if(length < 6){
        const text = "Name Should be more than 6 characters";
        error.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        const text = "Your email is invalid.";
        error_message.innerHTML = text;
        return false;
    }
    if(pass.length < 8){
        const text = "Password Should be more than 8 characters";
        error.innerHTML = text;
        return false;
    }
    if(pass != cpass){
        const text = "Password does not match";
        error.innerHTML = text;
        return false;
    }
    
    disp.style.display = 'block';
    error.style.padding = "0px";
    return false;
}