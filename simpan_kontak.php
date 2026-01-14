<?php
require 'functions.php';

if (isset($_POST['nama'])) {

  $nama    = htmlspecialchars($_POST['nama']);
  $email   = htmlspecialchars($_POST['email']);
  $telepon = htmlspecialchars($_POST['telepon']);
  $pesan   = htmlspecialchars($_POST['pesan']);

  $query = "INSERT INTO kontak (nama, email, telepon, pesan)
            VALUES ('$nama', '$email', '$telepon', '$pesan')";

  if (mysqli_query($conn, $query)) {
    echo "
    <script>
      alert('Pesan berhasil dikirim 💐');
      window.location.href='index.php#kontak';
    </script>
    ";
  } else {
    echo "
    <script>
      alert('Pesan gagal dikirim 😢');
      window.history.back();
    </script>
    ";
  }
}
?>
