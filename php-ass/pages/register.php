<?php 
session_start();
require_once "../functions.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST" action="../query/query_register.php">
        <?php 
            $kept_data = $_SESSION['register_kept_data'] ?? null;
            $keep = $kept_data != null;
            ?>
        Username: <input name="username" value="<?= $keep ? $kept_data->uname : '' ?>"> <br>
        Email: <input name="email" value="<?= $keep ? $kept_data->email : '' ?>"> <br>
        Password: <input name="password1" type="password"> <br>
        Password: <input name="password2" type="password"> <br>
        <input name= 'admin'type = "hidden" value=0>
        <input type="submit" value="Register">
</form>
        <?php $errors = $_SESSION['register_errors'] ?? null;
        if($errors!= null):?>
            <h2>Error!:</h2><br>
            <?php $error_dict = json_read('../data/errors.json'); ?>
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?= $error_dict->$error ?></li>
                <?php endforeach ?>
            </ul>
        <?php endif ?>
</body>
</html>