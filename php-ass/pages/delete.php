<?php 
session_start();
require_once "../functions.php";
if(!auth_is_logged_in()){
    $_SESSION['message'] = 'You are not logged in!';
    redirect('../index.php');
}
$polls = json_read("../data/polls.json");
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
    <h1>Select poll that you want to delete</h1> <br>
    <?php foreach($polls as $poll):?>
        ID: <?= $poll->poll_id?> <br>
        Description: <br> <?= $poll->description?> <br>
        Voted users:
        <?php foreach($poll->voted as $voted):?>
            "<?= $voted?>"
        <?php endforeach?> <br>
        Created date: <?= $poll->createdat?> <br>
        Deadline: <?= $poll->deadline?> <br>
        <form method = "POST" action="../query/query_delete.php">
            <input name="delete_id"type="hidden" value=<?= $poll->id?>>
            <input type="submit" value="Delete">
        </form>
    <?php endforeach?>
    <a href="../index.php">HOME</a>
</body>
</html>