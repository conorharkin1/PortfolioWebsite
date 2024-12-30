
// A function that will open the corresponding dialog to the id provided and dynamically set the icon image and title
function openDialog(id, iconPath, title) {
    const button = document.getElementById(id);
    const dialog = document.getElementById(`${id}-dialog`);

    button.style.border = '1px solid white';

    const headerIcon = document.getElementById(`${id}-header-icon`);
    const headerTitle = document.getElementById(`${id}-header-title`);
    headerIcon.innerHTML = `<img src="${iconPath}" alt="${title}">`;
    headerTitle.innerHTML = `<h4>${title}</h4>`

    const taskbarTitle = document.getElementById('taskbar-dialog-title');
    taskbarTitle.innerHTML = `<h4>${title}</h4>`
    
    dialog.showModal();
}

function closeDialog(id) {
    // Get the button and dialog elements
    const button = document.getElementById(id);
    const dialog = document.getElementById(`${id}-dialog`);
    const taskbarTitle = document.getElementById('taskbar-dialog-title');
    taskbarTitle.innerHTML = '';
    
    button.style.border = '';

    dialog.close();
}

// If escape key is pressed while a dialog is open, remove border around button.
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        const activeButton = document.querySelector('.icon[style*="border"]');

        if (activeButton) {
            activeButton.style.border = '';
            const taskbarTitle = document.getElementById('taskbar-dialog-title');
            taskbarTitle.innerHTML = '';
        }
    }
}

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    const logout = confirm('Are you sure you want to logout?');

            if (logout) {
                window.location.href = '/index.html';
            }
});
