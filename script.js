document.addEventListener('DOMContentLoaded', function() {
    const registerDiv = document.getElementById('registerDiv');
    const loginDiv = document.getElementById('loginDiv');
    const websiteDiv = document.getElementById('websiteDiv');
    const registerUsernameInput = document.getElementById('registerUsername');
    const registerPasswordInput = document.getElementById('registerPassword');
    const loginUsernameInput = document.getElementById('loginUsername');
    const loginPasswordInput = document.getElementById('loginPassword');
    const showLoginLink = document.getElementById('showLogin');
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const websiteUrlInput = document.getElementById('websiteUrl');
    const openWebsiteBtn = document.getElementById('openWebsiteBtn');
    const resetAppBtn = document.getElementById('resetAppBtn');
    const settingsBtn = document.getElementById('settingsBtn');

    // Hide settings button and websiteDiv initially
    settingsBtn.style.display = 'none';
    websiteDiv.style.display = 'none';

    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerDiv.classList.add('hidden');
        loginDiv.classList.remove('hidden');
    });

    registerBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const username = registerUsernameInput.value.trim();
        const password = registerPasswordInput.value.trim();
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            alert('You are already registered. Please login.');
            registerDiv.classList.add('hidden');
            loginDiv.classList.remove('hidden');
        } else {
            if (username !== '' && password !== '') {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                registerDiv.classList.add('hidden');
                loginDiv.classList.remove('hidden');
                // Show settings button after registration
                settingsBtn.style.display = 'inline-block';
            }
        }
    });

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const username = loginUsernameInput.value.trim();
        const password = loginPasswordInput.value.trim();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if (username === storedUsername && password === storedPassword) {
            loginDiv.classList.add('hidden');
            websiteDiv.style.display = 'block';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    openWebsiteBtn.addEventListener('click', function() {
        const websiteUrl = websiteUrlInput.value.trim();
        if (websiteUrl !== '') {
            window.open(websiteUrl, '_blank');
        }
    });

    resetAppBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset the app? This action will clear Your App Data (Remember This Will Only Reset Your username and Password Not the Site History That You visited)')) {
            // Clear user credentials
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            // Redirect to register page
            loginDiv.classList.add('hidden');
            registerDiv.classList.remove('hidden');
            // Hide settings button and websiteDiv
            settingsBtn.style.display = 'none';
            websiteDiv.style.display = 'none';
            alert('App reset successful. Please register again.');
        }
    });
});
