<?php 
session_start();
require_once '../functions.php';
$errors = [];
$_SESSION['create_poll_errors'] = [];
if(!post_exists('desc')){
    $errors[] = 'noexist_desc';
}
if(!post_exists('options')){
    $errors[] = 'noexist_options';
}
if(!post_exists('ismultiple')){
    $errors[] = 'noexist_ismultiple';
}

$desc = $_POST['desc'];
$ops = $_POST['options'];
$ismult = $_POST['ismultiple'];
$dline = date('Y-m-d',strtotime($_POST['deadline']));
$created = date('Y-m-d',strtotime($_POST['createdat']));
if(!post_exists('deadline')){
    $errors[] = 'noexist_deadline';
}else{
    if($created>$dline){
        $errors[] = 'deadline_passed';
    }
}

// echo date('Y-m-d',$dline);
// echo date('Y-m-d',$created);
if(count($errors)==0){
    $answer = array();
    foreach(explode("\r\n",$ops) as $op){
        $each = array();
        $each[0] = $op;
        $each[1] = 0;
        array_push($answer, $each);
    }
    register_polls((object)[
        'description' => $desc,
        'options' => explode("\r\n",$ops),
        'ismultiple' => $ismult,
        'createdat' => $created,
        'deadline' => $dline,
        'answers' => $answer,
        'voted' => []
    ]);
    $_SESSION['create_poll_errors'] = null;
    $_SESSION['poll_kept_data'] = null;
    redirect('../index.php');
}else{
    $_SESSION['poll_kept_data'] = (object)[
        'description' => $desc,
        'options' => $ops,
        'ismultiple' => $ismult,
        'deadline' => $dline
    ];
    $_SESSION['create_poll_errors'] = $errors;
    redirect("../pages/create_poll.php");
}

?>