<?php
session_start();

require_once '../functions.php';


$errors = [];

if(!post_exists('username')){
    $errors[] = 'noexist_uname';
}
if(!post_exists('email')){
    $errors[] = 'noexist_eml';
}
if(!post_exists('password1')){
    $errors[] = 'noexist_pw1';
}
if(!post_exists('password2')){
    $errors[] = 'noexist_pw2';
}
$uname = trim($_POST['username']);
$eml = trim($_POST['email']);
$pw1 = trim($_POST['password1']);
$pw2 = trim($_POST['password2']);

if(strlen($uname)<4){
    $errors[] = 'uname_short';
}
if(strlen($pw1)<8){
    $errors[] = 'pw_short';
}
if(strlen($pw1)>30){
    $errors[] = 'pw_long';
}
if(!regex_email($eml)){
    $errors[] = 'email_format';
}
if(!regex_username($uname)){
    $errors[] = 'uname_format';
}
if(!regex_pword($pw1)){
    $errors[] = 'pw_format';
}
if($pw1!=$pw2){
    $errors[] = 'pw_nomatch';
}
if(auth_users_exists($uname)){
    $errors[] = 'uname_exists';
}
if(auth_email_exists($eml)){
    $errors[] = 'email_exists';
}




if(count($errors)==0){
    $_SESSION['user_id'] = auth_register_user((object)[
        'uname' => $uname,
        'email' => $eml,
        'pword' => password_hash($pw1, PASSWORD_DEFAULT),
        'admin' => $_POST['admin']
    ]);
    $_SESSION['register_errors'] = null;
    $_SESSION['register_kept_data'] = null;
    redirect('../index.php');
}else{
    $_SESSION['register_kept_data'] = (object)[
        'uname' => $uname,
        'email' => $eml
    ];
    $_SESSION['register_errors'] = $errors;
    redirect("../pages/register.php");
}


?>