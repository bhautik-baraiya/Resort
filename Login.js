let email = document.getElementById("email");
let pass = document.getElementById("pass");

function onSubmit() {
    let email_reg = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    let pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (email.value && pass.value) {
        if ((email.value.match(email_reg)) && (pass_reg.test(pass.value))) {
            window.location.href = 'index.html'
        } else {
            alert("Please Enter Valid Email");
            window.location.reload();
        }
    }
    else {
        alert("Please Enter All Detailes");
    }
}