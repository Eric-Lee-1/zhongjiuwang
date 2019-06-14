<?php
$username = $_GET["zjw_username"];
$serverAddr = 'localhost';
$dbmsUsername = 'root';
$dbmsPassword = '';
$dbName = 'zhongjiuwang';

$conn = new mysqli($serverAddr, $dbmsUsername, $dbmsPassword, $dbName);

if ($conn->connect_error) {
    echo "连接失败" . $conn->connect_error;
    return;
}

$sql ="
    SELECT `id`
    FROM `users`
    WHERE `username`='$username'
";
$result = $conn->query($sql);

$resp = array("result" => true);
if($result->num_rows > 0) {
    $resp["result"] = false;  
}

echo json_encode($resp);

