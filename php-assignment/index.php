<?php
session_start();
require_once 'functions.php';

$logged_in = auth_is_logged_in();
if($logged_in){
    $users = json_read('data/users.json');
    $id = $_SESSION["user_id"];
    $user = $users->$id;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <title>Document</title>
</head>
<body>
<div class="header">
    <div class="auth"> 
        <?php if($logged_in):?>
            <a style="background-color: #FDFD96; margin: 5px;" href="query/query_logout.php">Logout</a> <br>
            <?php if(strtolower($user->uname) == 'admin'):?>
                <a style="background-color: #FDFD96; margin: 5px;" href="pages/create_poll.php">Create a Poll</a> <br>
                <a style="background-color: #FDFD96; margin: 5px;" href="pages/delete.php">Delete a Poll</a> <br>
            <?php endif ?>
        <?php else:?>
            <a style="background-color: #FDFD96; margin: 5px;" href="pages/login.php">Login</a> <br>
            <a style="background-color: #FDFD96; margin: 5px;" href="pages/register.php">Register</a> <br>
        <?php endif?>
    </div>
    <div class="title">
        <a style="font-size: 24px; font-weight:bold;">Poll voting page (php)</a><br>
        <!-- <h1>Poll voting page (php)</h1><br> -->
    </div>
    <div class="message">
        <?php if($logged_in):?>
            Welcome <?=$user->uname?>! <br>
        <?php endif ?>
        <?php $msg = $_SESSION['message'] ?? null; if($msg!=null):?>
            <?= $_SESSION['message']?>
        <?php endif; $_SESSION['message'] = null;?>
        
    </div>

</div>
<div class="intro">
    Description: Only logged in users can vote from active polls. 
    All user can vote each poll only 1 time.

</div>

<div class="active">
    <h3>Active polls</h3>
    <?php 
        $polls = json_read("data/polls.json");
        $ind = 0;
        foreach($polls as $poll){
            $ind++;
        }
        $index = $ind;
    ?>
        <?php while($index): ?>
            <?php if($polls->$index->deadline > date("Y-m-d")):?>
                <a class = "pollblock" >
                    ID: <?= $polls->$index->poll_id ?><br>
                    Created : <?= $polls->$index->createdat ?><br>
                    Deadline: <?= $polls->$index->deadline ?><br>
                    <form method = "POST" action="pages/voting.php">
                        <input name="currentid" type="hidden" value=<?=$polls->$index->id?>>
                        <?php if($logged_in):?>
                            <?php if(in_array($user->uname,$polls->$index->voted)):?>
                                <input type="submit" value="Voted">
                            <?php else:?>
                                <input type="submit" value="Vote">
                            <?php endif?>
                        <?php else:?>
                            <input type="submit" value="Vote">
                        <?php endif?>
                        
                    </form>
                </a>
            <?php endif?>
        <?php $index--; endwhile?>
</div>
<div class="passive">
<h3>Passive polls</h3>
    <?php $index = $ind;
        while($index):?>
            <?php if($polls->$index->deadline < date("Y-m-d")):?>
                <a class = "pollblock" >
                    ID: <?= $polls->$index->poll_id ?><br>
                    Created : <?= $polls->$index->createdat ?><br>
                    Deadline: <?= $polls->$index->deadline ?><br>
                    <form method = "POST" action="pages/result.php">
                        <input name="currentid" type="hidden" value=<?=$polls->$index->id?>>
                        <input type="submit" value="Result">
                    </form>
                </a>
            <?php endif?>
        <?php $index--; endwhile?>

</div>
</body>
</html>