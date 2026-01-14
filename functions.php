<?php
$conn = mysqli_connect("localhost", "root", "", "login");

function registrasi($data) {
    global $conn;

    $username  = strtolower(stripslashes($data["username"]));
    $password  = mysqli_real_escape_string($conn, $data["password"]);
    $password1 = mysqli_real_escape_string($conn, $data["password1"]);

    // cek username sudah ada atau belum
    $result = mysqli_query($conn, "SELECT username FROM user WHERE username = '$username'");
    if (mysqli_fetch_assoc($result)) {
        echo "<script>alert('Username sudah terdaftar!');</script>";
        return false;
    }

    // cek konfirmasi password
    if ($password !== $password1) {
        echo "<script>alert('konfirmasi password tidak cocok');</script>";
        return false;
    }

    // simpan ke database
    $password = password_hash($password, PASSWORD_DEFAULT);
    mysqli_query($conn, "INSERT INTO user VALUES ('', '$username', '$password')");

    return true;
}
?>
