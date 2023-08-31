<?php
session_start();
require_once '../functions.php';

$polls = json_read("../data/polls.json");
$polls_copy = json_read("../data/polls.json");
$id = $_POST['delete_id'];

$count = 0;

foreach($polls as $poll){
    $count++;
}

$count2 = $count;
while($count>=$id){
    unset($polls->$count);
    $count--;
}
$index = $id;
$index_cpy = $id+1;
while($index<$count2){
    $polls_copy->$index_cpy->id = $polls_copy->$index_cpy->id - 1;
    $polls->$index = $polls_copy->$index_cpy;
    $index++;
    $index_cpy++;
}

json_write("../data/polls.json",$polls);
$_SESSION['message'] = "Successfully removed poll from database";
redirect('../index.php');

?>