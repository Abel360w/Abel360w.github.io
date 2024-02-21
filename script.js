document.addEventListener("DOMContentLoaded", function() {
    const siteFrame = document.getElementById("siteFrame");
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
        a.href = "#";
        a.addEventListener("click", function(event) {
            event.preventDefault();
            openSite(site.url);
        });
        li.appendChild(a);
        sites.appendChild(li);
    });

    function openSite(url) {
        siteFrame.src = url;
        siteFrame.style.display = "block";
        sitesList.style.display = "none";
    }
});
