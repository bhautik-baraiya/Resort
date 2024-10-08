let Name = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn = document.getElementById("btn");
let at_position = email.value.indexOf("@");
let dot_position = email.value.lastIndexOf(".");

function onSubmit() {
    let email_reg = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    let pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (Name.value && username.value && email.value && pass.value) {
        if ((email.value.match(email_reg)) && (pass_reg.test(pass.value))) {
            alert("Successfully ✅✅");
            window.location.href = 'Login.html'
        } else {
            alert("Please Enter Valid Email or Password");
            window.location.reload();
        }
    }
    else {
        alert("Please Enter All Detailes");
    }
}