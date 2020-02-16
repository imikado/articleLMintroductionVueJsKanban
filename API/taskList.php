<?php
header('Content-Type: application/json');

$pdoKanban=new pdo('mysql:dbname=kanbanDb;host=localhost', 'kanbanUser', 'pass');
$sth=$pdoKanban->prepare('SELECT * from Tasks');
$sth->execute();

$tasks=$sth->fetchAll();

echo json_encode($tasks);
