const submitButton = document.querySelector('.submit-btn');
const textbox = document.getElementById('login-textbox');

document.onkeydown = function(event) {
    if (event.key == 'Enter') {
        captureUsername();
        window.location.href = './main.html';
    }
}

submitButton.addEventListener('click', function() {
    captureUsername();
    window.location.href = './main.html';
});

textbox.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        //Prevent page from refreshing
        event.preventDefault();
        captureUsername();
        window.location.href = './main.html';
    }
});

function captureUsername() {
    const username = textbox.value;
    sessionStorage.setItem("username", username);
}

