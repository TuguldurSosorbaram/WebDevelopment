<?php 
session_start();
require_once '../functions.php';
$_SESSION["vote_error"] = null;

$user = auth_get_user_by_id($_SESSION['user_id']);
$polls = json_read('../data/polls.json');
// check if user has already voted on this poll
foreach($polls as $poll){
    if($poll->id == $_POST["id"] && in_array($user->uname, $poll->voted)){
        $_SESSION['message'] = 'You have already voted for this poll!';
        redirect('../index.php');
    }
}
//check if vote is empty
if($_POST["answers"] == null){
    $_SESSION["vote_error"] = "vote_empty";
    $_SESSION['currentid'] = $_POST["id"];
    redirect('../pages/voting.php');
}

$ans = $_POST["answers"];

$i = 1;
foreach($polls as $poll){
    if($poll->id == $_POST["id"]){//finding poll
        if($poll->ismultiple =="0"){//for single answer
            $j=0;
            foreach($poll->answers as $ansdata){
                    if($ansdata[0]==$ans[0]){
                        $polls->$i->answers[$j][1] = $polls->$i->answers[$j][1] + 1;
                        $polls->$i->voted[] = $user->uname;
                    }
                $j++;
                
            }
        }else{//for multiple answers
            foreach($ans as $an){
                $j=0;
                foreach($poll->answers as $ansdata){
                    if($ansdata[0]==$an){
                        $polls->$i->answers[$j][1] = $polls->$i->answers[$j][1] + 1;
                        $polls->$i->voted[] = $user->uname;
                    }
                $j++;
                
            }
            }

        }
    }
    $i++;
}
json_write('../data/polls.json', $polls);
$_SESSION['message'] = 'Vote submitted successfully';
redirect("../index.php");


?>