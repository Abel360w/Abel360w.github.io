document.addEventListener('DOMContentLoaded', function() {
    const resetAppBtn = document.getElementById('resetAppBtn');
    const helpBtn = document.getElementById('helpBtn');
    const historyBtn = document.getElementById('historyBtn');
    const historyPopup = document.getElementById('historyPopup');
    const historyList = document.getElementById('historyList');

    // Load history from localStorage
    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.forEach(site => {
        const li = document.createElement('li');
        li.textContent = site;
        historyList.appendChild(li);
    });

    resetAppBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset the app? This action will clear Your App Data (Remember This Will Only Reset Your username and Password Not the Site History That You visited)')) {
            // Clear user credentials
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            // Clear site visit history
            localStorage.removeItem('history');
            alert('App reset successful. Reloading...');
            location.reload();
        }
    });

    helpBtn.addEventListener('click', function() {
        alert('For opening some websites like YouTube, you would need to type their mobile URL like this: https://m.youtube.com');
    });

    historyBtn.addEventListener('click', function() {
        historyPopup.style.display = 'block';
    });

    document.getElementById('clearHistoryBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear your browsing history?')) {
            // Clear site visit history
            localStorage.removeItem('history');
            alert('Browsing history cleared successfully.');
            historyList.innerHTML = '';
        }
    });

    document.getElementById('clearDataBtn').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all data, including local storage and cache?')) {
            // Clear local storage
            localStorage.clear();
            // Clear cache
            caches.keys().then(function(names) {
                for (let name of names) {
                    caches.delete(name);
                }
            });
            alert('All data cleared successfully. Reloading...');
            location.reload();
        }
    });

    document.getElementById('closeHistoryBtn').addEventListener('click', function() {
        historyPopup.style.display = 'none';
    });
});
