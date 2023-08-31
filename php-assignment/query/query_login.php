<?php
session_start();
require_once '../functions.php';

$uname = $_POST['uname'];
$pw = $_POST['password'];

if(!post_exists('uname')){
    $_SESSION['login_errors'][] = 'noexist_uname';
    redirect('../pages/login.php');
}
if(!auth_users_exists($uname)){
    $_SESSION['login_errors'][] = 'uname_unknown';
    $_SESSION['login_kept_data'] = $uname;
    redirect('../pages/login.php');
}
if(!post_exists('password')){
    $_SESSION['login_errors'][] = 'noexist_pw1';
    $_SESSION['login_kept_data'] = $uname;
    redirect('../pages/login.php');
}
$user = auth_users_exists($uname,false);

if(!password_verify($pw,$user->pword)){
    $_SESSION['login_errors'][] = "pword_bad";
    $_SESSION['login_kept_data'] = $uname;
    redirect('../pages/login.php');
}

$comeback = $_SESSION["comingback"] ?? null;
if(count($_SESSION['login_errors'])==0){
    $_SESSION['user_id'] = $user->id;
    $_SESSION['login_errors'][] = null;
    $_SESSION['login_kept_data'] = null;
    if($comeback != null){
        $_SESSION['currentid'] = $comeback;
        $_SESSION["comingback"] = null;
        redirect('../pages/voting.php');
    }
    redirect('../index.php');
}
?>