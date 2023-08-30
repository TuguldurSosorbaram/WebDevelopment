<?php
function redirect($page){
   header('Location: ' . $page);
   die;
}
function auth_is_logged_in(){
   return ($_SESSION['user_id'] ?? null) != null;
}
/**
* Reads the contents of a JSON file and returs them according to the file (object or array).
* @param string $filename The name of the JSON file with extension.
* @return (Array|Object) Result might be either an array or an object depending on the contwnts fo the file.
*/
function json_read($filename){
   return json_decode(file_get_contents($filename));
}

/**
* Turns and array or object to a string and puts it as content into a JSON file. The file content is OVERWRITTEN!
* @param string $filename The name of the JSON file with extension.
* @param (Array|Object) $data The data to be put into the JSON file. Can either be an Array or an Object.
*/
function json_write($filename, $data){
   file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT));
}

function post_exists($param_name){
   return key_exists($param_name, $_POST) && strlen(trim($_POST[$param_name])) > 0;
}

function auth_register_user($user){
   $users = json_read("../data/users.json");
   $max = 0;
   foreach($users as $max_user){
       if($max_user->id > $max) $max = $max_user->id;
   }
   $new_id = $max + 1;
   $user->id = $new_id;
   $users->$new_id = $user;
   json_write('../data/users.json', $users);

   return $new_id;
}
function add_answer($answer){

}
function register_polls($poll){
   $polls = json_read("../data/polls.json");
   $max = 0;
   foreach($polls as $max_poll){
      if($max_poll->id > $max) $max = $max_poll->id;
  }
  $new_id = $max + 1;
  $poll->id = $new_id;
  $poll->poll_id = $new_id;
  $polls->$new_id = $poll;
  json_write('../data/polls.json',$polls);

}
function auth_users_exists($uname, $return_bool = true){
   $users = json_read('../data/users.json');
   foreach($users as $user){
       if(strtolower($user->uname) == strtolower($uname)){
           return $return_bool ? true : $user;
       }
   }
   return $return_bool ? false : null;
}
function get_poll_byid($id){
   $polls = json_read("../data/polls.json");
   foreach($polls as $poll){
      if($poll->id == intval($id)){
         return $poll;
     }
  }
  return null;
}
function auth_email_exists($email, $return_bool = true){
   $users = json_read('../data/users.json');
   foreach($users as $user){
       if(strtolower($user->email) == strtolower($email)){
           return $return_bool ? true : $user;
       }
   }
   return $return_bool ? false : null;
}
function regex_username($uname){
   return preg_match('/^[a-zA-Z0-9]+$/', $uname);
}
function regex_pword($pword){
   return preg_match('/[a-z]/', $pword) &&
          preg_match('/[A-Z]/', $pword) &&
          preg_match('/[0-9]/', $pword) &&
          preg_match('/[\#\@\$\%\_\.\#\!\%\&]/', $pword);
}
function regex_email($email){
   if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      return true;
   }
   else{return false;}
}
function auth_get_user_by_id($id){
   $users = json_read('../data/users.json');
   return $users->$id ?? null;
}
