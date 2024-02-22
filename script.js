function loadWebsite() {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    const webview = document.getElementById('webview');
    webview.innerHTML = `<iframe src="${url}" width="100%" height="400px"></iframe>`;
}
