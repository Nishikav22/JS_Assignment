const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateField(nameInput, "Name cannot be empty");
    validateEmail();
    validatePassword();
});

function validateField(input, message) {
    if (input.value.trim() === "") {
        showError(input, message);
    } else {
        showSuccess(input);
    }
}

function validateEmail() {
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email cannot be empty");
    } else if (!emailInput.value.includes("@")) {
        showError(emailInput, "Email must contain '@'");
    } else {
        showSuccess(emailInput);
    }
}

function validatePassword() {
    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Password cannot be empty");
    } else if (passwordInput.value.length < 8) {
        showError(passwordInput, "Password must be at least 8 characters");
    } else {
        showSuccess(passwordInput);
    }
}

function showError(input, message) {
    const parent = input.parentElement;
    const errorMsg = parent.querySelector(".error");

    errorMsg.textContent = message;

    input.classList.add("error");
    input.classList.remove("success");
}

function showSuccess(input) {
    const parent = input.parentElement;
    const errorMsg = parent.querySelector(".error");

    errorMsg.textContent = "";

    input.classList.add("success");
    input.classList.remove("error");
}
