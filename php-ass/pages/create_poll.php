<?php 
session_start();
require_once "../functions.php";

if(!auth_is_logged_in()){
    redirect("../index.php");
}
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
    <h1>Creating a new poll</h1>
        <?php 
            $kept_data = $_SESSION['poll_kept_data'] ?? null;
            $keep = $kept_data != null;
        ?>
    <form method="POST" action="../query/query_create_poll.php"> 
        Poll description: <input name="desc" value="<?= $keep ? $kept_data->description : '' ?>"> <br>
        Possible options: <textarea name='options' rows ='5'><?= $keep ? $kept_data->options : ''?></textarea> <br>
        Accept multiple answers: 
            <input type='radio' name=ismultiple value='1' <?=$keep ? ($kept_data->ismultiple == '1' ? 'checked' : '') : ''?>> Yes
            <input type='radio' name=ismultiple value='0' <?=$keep ? ($kept_data->ismultiple == '0' ? 'checked' : '') : ''?>> No
            <br>
        <input name= 'createdat'type='hidden' value="<?=date("Y-m-d")?>">
        Deadline: <input name= 'deadline' type="date" value = "<?= $keep ? $kept_data->deadline : ''?>"> <br>
        <input type=submit value='Create'>
    </form>
    <?php $errors = $_SESSION['create_poll_errors'] ?? null;
        if($errors!= null):?>
            <h2>Error!</h2><br>
            <?php $error_dict = json_read('../data/errors.json'); ?>
            <ul>
                <?php foreach($errors as $error): ?>
                    <li><?= $error_dict->$error ?></li>
                <?php endforeach ?>
            </ul>
        <?php endif ?>
</body>
</html>