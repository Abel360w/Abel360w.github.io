document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const sitesList = document.getElementById("sitesList");
    const sites = document.getElementById("sites");

    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    if (username && password) {
        // User is registered, show login form
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    } else {
        // User is not registered, show register form
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    }

    document.getElementById("registerButton").addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    document.getElementById("loginLink").addEventListener("click", function() {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    document.getElementById("loginButton").addEventListener("click", function() {
        const loginUsername = document.getElementById("loginUsername").value;
        const loginPassword = document.getElementById("loginPassword").value;
        if (loginUsername === username && loginPassword === password) {
            // Login successful, show sites list
            loginForm.style.display = "none";
            sitesList.style.display = "block";
            showSites();
        } else {
            alert("Invalid username or password");
        }
    });

    function showSites() {
        const siteList = [
            { name: "YouTube", url: "https://www.youtube.com/" },
            // Add other sites here
        ];

        siteList.forEach(function(site) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.textContent = site.name;
            a.href = "#";
            a.addEventListener("click", function(event) {
                event.preventDefault();
                openSite(site.url);
            });
            li.appendChild(a);
            sites.appendChild(li);
        });
    }

    function openSite(url) {
        fetch(url, { mode: 'cors' })
            .then(response => response.text())
            .then(html => {
                const iframe = document.createElement("iframe");
                iframe.srcdoc = html;
                iframe.style.width = "100%";
                iframe.style.height = "400px"; // Set the height as needed
                document.body.appendChild(iframe);
            })
            .catch(error => {
                console.error('Error fetching website:', error);
            });
    }
});
