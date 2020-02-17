<?php 
$taskToAdd=json_decode($_POST['task']);

$pdoKanban=new pdo('mysql:dbname=kanbanDb;host=localhost', 'kanbanUser', 'pass');
$sth=$pdoKanban->prepare('INSERT INTO Tasks (title,text) VALUES (:title,:text)');
$sth->execute((array)$taskToAdd);
