

const sendLinkForm = document.querySelector('form');
const resendButton = document.querySelector('button');

const COOLDOWN_TIME = 90; // 90 seconds
timeInterval = null;

let leftTime = COOLDOWN_TIME;
resendButton.disabled = true;

resendButton.classList.add('opacity-60', 'cursor-not-allowed', 'hover:scale-100');
resendButton.classList.remove('hover:scale-95', 'cursor-pointer');

timeInterval = setInterval(() => {
    leftTime--;

    if (leftTime > 0) {
        resendButton.innerText = `يمكنك إعادة الإرسال بعد ${leftTime}s`;
    }
    else {
        clearInterval(timeInterval);

        resendButton.disabled = false;
        resendButton.innerText = "إعادة الإرسال";

        resendButton.classList.remove('opacity-60', 'cursor-not-allowed', 'hover:scale-100');
        resendButton.classList.add('hover:scale-95', 'cursor-pointer');
    }
}, 1000);

sendLinkForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const COOLDOWN_TIME = 90; // 90 seconds
    timeInterval = null;

    let leftTime = COOLDOWN_TIME;
    resendButton.disabled = true;

    resendButton.classList.add('opacity-60', 'cursor-not-allowed', 'hover:scale-100');
    resendButton.classList.remove('hover:scale-95', 'cursor-pointer');

    timeInterval = setInterval(() => {
        leftTime--;

        if (leftTime > 0) {
            resendButton.innerText = `يمكنك إعادة الإرسال بعد ${leftTime}s`;
        }
        else {
            clearInterval(timeInterval);

            resendButton.disabled = false;
            resendButton.innerText = "إعادة الإرسال";

            resendButton.classList.remove('opacity-60', 'cursor-not-allowed', 'hover:scale-100');
            resendButton.classList.add('hover:scale-95', 'cursor-pointer');
        }
    }, 1000);
})
