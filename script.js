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
            window.open(websiteUrl, '_blank');
        }
    });

    // Simple ad blocker
    document.querySelectorAll('a, img, iframe, script, ins, div').forEach(element => {
        const src = element.getAttribute('src') || element.getAttribute('data-src') || element.getAttribute('data-ad-client');
        if (src && (
            src.includes('doubleclick.net') ||
            src.includes('googleadservices.com') ||
            src.includes('adservice.google.com') ||
            src.includes('googlesyndication.com') ||
            src.includes('pagead2.googlesyndication.com') ||
            src.includes('securepubads.g.doubleclick.net') ||
            src.includes('tpc.googlesyndication.com') ||
            src.includes('ad.doubleclick.net') ||
            src.includes('adclick.g.doubleclick.net') ||
            src.includes('partner.googleadservices.com') ||
            src.includes('google-analytics.com') ||
            src.includes('googletagservices.com') ||
            src.includes('googletagmanager.com') ||
            src.includes('adsafeprotected.com') ||
            src.includes('s0.2mdn.net') ||
            src.includes('static.doubleclick.net') ||
            src.includes('www.googletagservices.com') ||
            src.includes('youtube.com/iframe_api') ||
            src.includes('imasdk.googleapis.com') ||
            src.includes('youtube.com/subscribe_embed') ||
            src.includes('googlevideo.com') ||
            src.includes('imasdk.googleapis.com') ||
            src.includes('adserver.adtechus.com') ||
            src.includes('cdn-gl.imrworldwide.com') ||
            src.includes('adnxs.com') ||
            src.includes('amazon-adsystem.com') ||
            src.includes('openx.net') ||
            src.includes('pixel.adsafeprotected.com') ||
            src.includes('bid.g.doubleclick.net') ||
            src.includes('pixel.quantserve.com') ||
            src.includes('ad.yieldmanager.com') ||
            src.includes('rtb-csync.smartadserver.com') ||
            src.includes('static.ads-twitter.com') ||
            src.includes('platform.twitter.com') ||
            src.includes('tags.bluekai.com') ||
            src.includes('match.adsrvr.org') ||
            src.includes('googleads.g.doubleclick.net') ||
            src.includes('pornhub.com') ||
            src.includes('xvideos.com') ||
            src.includes('xhamster.com') ||
            src.includes('redtube.com') ||
            src.includes('youporn.com')
        )) {
            element.remove();
        }
    });
});

