
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("studentEmail");
const passwordInput = document.getElementById("studentPassword");

const alertBox = document.getElementById("alertBox");
const alertMsg = document.getElementById("alertMsg");


const togglePwd = document.getElementById("togglePwd");
const eyeIcon = document.getElementById("eyeIcon");



const emailPattern = /^[a-z]+\.btech\.cse\.\d+@nitap\.ac\.in$/;





form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();


    if (!emailPattern.test(email)) {
        showError("Email must be like: name.btech.cse.25@nitap.ac.in");
        return;
    }


    const name = email.split(".")[0];

   
    const correctPassword = name.toUpperCase();

    
    if (password !== correctPassword) {
        showError("Password must be your NAME in CAPITAL letters");
        return;
    }

    loginSuccess(email);
});





function showError(message) {

    alertMsg.textContent = message;
    alertBox.classList.add("show");

    setTimeout(function () {
        alertBox.classList.remove("show");
    }, 3000);

}




function loginSuccess(email) {

    localStorage.setItem("studentEmail", email);

    window.location.href = "profile.html";

}




togglePwd.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } 
    else {

        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

});