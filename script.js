function loadWebsite() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;

    const webview = document.getElementById('webview');
    webview.innerHTML = `<iframe src="${proxyUrl}" width="100%" height="400px"></iframe>`;
}
