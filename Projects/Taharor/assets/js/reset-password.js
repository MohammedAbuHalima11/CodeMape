// Toggle password visibility
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

const togglePasswordIcon = document.getElementById('togglePassword');
const toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPassword');

togglePasswordIcon.onclick = function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.src = '../assets/images/eye.png';
    }
    else {
        passwordInput.type = 'password';
        togglePasswordIcon.src = '../assets/images/eye-slash.png';
    }
}

toggleConfirmPasswordIcon.onclick = function () {
    if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleConfirmPasswordIcon.src = '../assets/images/eye.png';
    }
    else {
        confirmPasswordInput.type = 'password';
        toggleConfirmPasswordIcon.src = '../assets/images/eye-slash.png';
    }
}


// Form validation

const submitButton = document.querySelector('button');



submitButton.addEventListener('click', function (e) {

    e.preventDefault();

    const passwordInputValue = passwordInput.value.trim();
    const confirmPasswordInputValue = confirmPasswordInput.value.trim();

    if (passwordInputValue.length < 8 || confirmPasswordInputValue.length < 8) {
        alert('يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل');
        return;
    }
    else if (passwordInputValue !== confirmPasswordInputValue) {
        alert('كلمتا المرور غير متطابقتين');
        return;
    }
    else {
        alert('تم إعادة تعيين كلمة المرور بنجاح');
        window.location.href = '../../pages/login.html';
    }
})





