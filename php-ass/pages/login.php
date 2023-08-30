<?php 
session_start();
require_once '../functions.php';
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
<h2>Login</h2>
    <?php 
        $kept_data = $_SESSION['login_kept_data'] ?? null;
        $keep = $kept_data != null;
    ?>
    <form method="POST" action="../query/query_login.php">
        Username: <input name="uname" value="<?= $keep ? $kept_data : '' ?>"> <br>
        Password: <input name="password" type="password"> <br>
        <input type="submit" value="Login">
    </form>
    <?php $errors = $_SESSION['login_errors'] ?? null;
        if($errors!= null):?>
            <h2>Error!</h2><br>
            <?php $error_dict = json_read('../data/errors.json'); ?>
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?= $error_dict->$error ?></li>
                <?php endforeach ?>
            </ul>
        <?php endif ?>
    <?php $_SESSION['login_errors'] = array()?>
</body>
</html>
