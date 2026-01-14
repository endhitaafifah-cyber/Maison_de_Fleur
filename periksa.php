<?php
require 'functions.php';

if (isset($_POST["daftar"])) {
    if (registrasi($_POST)) {
        echo "<script>
            alert('user baru berhasil ditambah');
            document.location.href = 'login.php';
        </script>";
    } else {
        echo "Registrasi gagal";
    }
}
?>
