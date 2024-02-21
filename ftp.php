<?php
$ftp_server = "ftp.example.com";
$ftp_username = "username";
$ftp_password = "password";

$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_username, $ftp_password);

if ($login_result) {
    $files = ftp_nlist($conn_id, ".");
    echo json_encode($files);
} else {
    echo "FTP login failed";
}

ftp_close($conn_id);
?>
