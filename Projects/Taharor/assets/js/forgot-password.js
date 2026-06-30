const forgotPasswordForm = document.querySelector('form');

forgotPasswordForm.addEventListener('submit', function (e) {

    const emailInput = document.getElementById('email');
    const emailInputValue = emailInput.value.trim();
    e.preventDefault();

    if (!emailInputValue) {
        alert('يرجى إدخال البريد الإلكتروني');
        return;
    }

    window.location.href = '../../pages/send-link.html';
})