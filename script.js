document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const existingButton = document.getElementById('existing');

    // Function to update the visibility and functionality of the "Login as existing user" button
    const updateExistingButton = () => {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
            existingButton.style.display = 'block';
            existingButton.onclick = () => {
                alert(`Logged in as ${savedUsername}`);
            };
        } else {
            existingButton.style.display = 'none';
        }
    };

    // Initialize the existing button state
    updateExistingButton();

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (rememberCheckbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);

        // Update "Login as existing user" button state
        updateExistingButton();
    });
});
