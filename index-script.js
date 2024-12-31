document.onkeydown = function(event) {
    if (event.key == 'Enter') {
        window.location.href = './main.html';
    }
}

const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', function() {
    window.location.href = './main.html';
});


const textbox = document.getElementById('login-textbox');
textbox.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        // Prevents form from refreshing login page and instead redirects it correctly
        event.preventDefault();
        window.location.href = './main.html';  // Redirect to the target page
    }
});