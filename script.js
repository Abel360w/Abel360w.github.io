document.addEventListener("DOMContentLoaded", function() {
    const sitesList = document.getElementById("sitesList");
    const sites = document.getElementById("sites");

    const siteList = [
        { name: "YouTube", url: "https://www.youtube.com/" },
        { name: "Google", url: "https://www.google.com/" },
        // Add other sites here
    ];

    siteList.forEach(function(site) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = site.name;
        a.href = site.url;
        a.target = "_blank"; // Open links in a new tab
        li.appendChild(a);
        sites.appendChild(li);
    });
});
