<?php 
$taskToAdd=json_decode($_POST['task']);

$pdoKanban=new pdo('mysql:dbname=kanbanDb;host=localhost', 'kanbanUser', 'pass');
$sth=$pdoKanban->prepare('INSERT INTO Tasks (title,text,column_id) VALUES (:title,:text,:column_id)');
$sth->execute((array)$taskToAdd);
