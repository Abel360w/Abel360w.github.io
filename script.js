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
    const historyList = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');

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
            websiteDiv.classList.remove('hidden');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    openWebsiteBtn.addEventListener('click', function() {
        const websiteUrl = websiteUrlInput.value.trim();
        if (websiteUrl !== '') {
            // Save visited site to history
            let history = JSON.parse(localStorage.getItem('history')) || [];
            history.push(websiteUrl);
            localStorage.setItem('history', JSON.stringify(history));
            // Open website in new tab
            window.open(websiteUrl, '_blank');
            // Update history list
            updateHistoryList();
        }
    });

    clearHistoryBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your browsing history?')) {
            localStorage.removeItem('history');
            updateHistoryList();
        }
    });

    function updateHistoryList() {
        let history = JSON.parse(localStorage.getItem('history')) || [];
        historyList.innerHTML = '';
        history.forEach(function(site) {
            const li = document.createElement('li');
            li.textContent = site;
            historyList.appendChild(li);
        });
    }

    updateHistoryList();
});
