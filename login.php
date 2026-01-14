<?php
session_start();
require 'functions.php';
if(isset($_SESSION["login"])){
    header("location:index.php");
    exit;
}

if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $result = mysqli_query($conn, "SELECT * FROM user WHERE username = '$username'");

// cek username
    if (mysqli_num_rows($result) === 1) {
        $row = mysqli_fetch_assoc($result);
        if (password_verify($password, $row["password"])) {
            $_SESSION["login"] = true;
            header("Location: index.php");
            exit;
        }
    }
    $error = true;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Halaman Login</title>
    <link rel="stylesheet" href="my.css">
</head>
<body>
<div class="container">
    <h1>Login</h1>
    <?php if (isset($error)) : ?>
        <p style="color:red; font-style:italic;">Username / Password salah!</p>
    <?php endif; ?>
    <form action="" method="post">
        <div class="form-group">
            <label for="username">Username :</label>
            <input type="text" name="username" id="username">
        </div>
        <div class="form-group">
            <label for="password">Password :</label>
            <input type="password" name="password" id="password">
        </div>
        <button type="submit" name="login">Login</button>
        <button type="reset">Cancel</button>
 </form>
</div>
</body>
</html>
