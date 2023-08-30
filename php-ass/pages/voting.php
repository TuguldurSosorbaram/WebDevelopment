<?php 
session_start();
require_once "../functions.php";

if(!auth_is_logged_in()){
    $_SESSION["comingback"] = $_POST["currentid"];
    redirect("../pages/login.php");
}
$voteerror = $_POST["currentid"] ?? null;
if(!$voteerror == null){
    $poll = get_poll_byid($_POST["currentid"]);
}else{
    $poll = get_poll_byid($_SESSION['currentid']);
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
    <form method = 'POST' action="../query/query_voting.php">
        <input name="id" type="hidden" value=<?=$poll->id?>>
        Description of the poll: <?=$poll->description;?> <br>
        Options: <br>
        <?php foreach($poll->options as $op):?>
            <?php if($poll->ismultiple=="1"):?>
                You can choose multiple options <br>
                <input type="checkbox" name="answers[]" value = '<?= $op ?>'> <?= $op ?> <br>
            <?php else:?>
                You can't choose multiple options <br>
                <input type="radio" name="answers[]" value = '<?= $op ?>'> <?= $op ?> <br> 
            <?php endif?>            
        <?php endforeach?>
        <input type= submit value= "Submit"><br>
        Poll created date: <?= $poll->createdat?> <br>
        Poll deadline: <?= $poll->deadline?><br>

    </form>
    <?php $errors = $_SESSION['vote_error'] ?? null;
        if($errors!= null):?>
            <h2>Error!:</h2><br>
            <?php $error_dict = json_read('../data/errors.json'); ?>
            <ul>
                    <li><?= $error_dict->$errors ?></li>
            </ul>
        <?php endif ?>
</body>
</html>