<?php 
session_start();
require_once "../functions.php";
if(!auth_is_logged_in()){
    $_SESSION['message'] = 'You are not logged in!';
    redirect('../index.php');
}
$poll = get_poll_byid($_POST['currentid']);
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
    ID: <?= $poll->poll_id?> <br>
    <?php foreach($poll->answers as $answer):?>
        Answer "<?= $answer[0]?>" has <?= $answer[1]?> votes. <br>
    <?php endforeach?>
    Users who voted: <br>
    <?php foreach($poll->voted as $voted):?>
        "<?= $voted?>" <br>
    <?php endforeach?>
    <a href="../index.php">HOME</a>
</body>
</html>