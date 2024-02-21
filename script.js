fetch('ftp.php')
    .then(response => response.json())
    .then(files => {
        const fileList = document.getElementById('file-list');
        files.forEach(file => {
            const li = document.createElement('li');
            li.textContent = file;
            fileList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching FTP files:', error));
