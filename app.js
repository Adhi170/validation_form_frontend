const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success=true
    if (usernameVal === '') {
        success=false
        setError(username, "Username is required");
    } else {
        setSuccess(username); 
    }

    if (emailVal === '') {
        success=false
        setError(email, "Email is required");
    } else if (!validateEmail(emailVal)) {
        success=false
        setError(email, "Please enter a valid email");
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        success=false
        setError(password, "Password is required");
    } else if (passwordVal.length < 8) {
        success=false
        setError(password, "Password must be at least 8 characters");
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        success=-false
        setError(cpassword, "Confirm password is required");
    } else if (cpasswordVal !== passwordVal) {
        success=false
        setError(cpassword, "Passwords do not match");
    } else {
        setSuccess(cpassword);
    }
    return success
}

function setError(inputField, message) {
    const input_group = inputField.parentElement;
    const errorElement = input_group.querySelector('.error');
    errorElement.innerText = message;
    input_group.classList.add('error');
    input_group.classList.remove('success');
}

function setSuccess(inputField) {
    const input_group = inputField.parentElement;
    const errorElement = input_group.querySelector('.error');
    errorElement.innerText = '';
    input_group.classList.remove('error');
    input_group.classList.add('success');
}

function validateEmail(email) {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
}

form.addEventListener('submit', (e) => {
    
    if(!validateInputs())
    {
        e.preventDefault();
    }
});




