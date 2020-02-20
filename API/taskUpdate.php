<?php 
$taskToUpdate=json_decode($_POST['task']);

$pdoKanban=new pdo('mysql:dbname=kanbanDb;host=localhost', 'kanbanUser', 'pass');
$sth=$pdoKanban->prepare('UPDATE Tasks SET title=:title,text=:text,column_id=:column_id WHERE id=:id');
$sth->execute((array)$taskToUpdate);
