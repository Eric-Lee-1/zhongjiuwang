<?php
$username = $_POST["zjw_username"];
$password = $_POST["zjw_password"];

$serverAddr = "localhost";
$dbmsUsernam = "root";
$dbmsPassword = "";
$dbName = "zhongjiuwang";

$conn = new mysqli($serverAddr, $dbmsUsernam, $dbmsPassword, $dbName);

if ($conn->connect_error) {
    echo "数据库连接失败" . $conn->connect_error;
    return;
}

$sql = "
    SELECT `id`
    FROM `users`
    WHERE `username`='$username'AND`password`='$password'
";

$result1 = $conn->query($sql);

$resp = array("result" => false);
if ($result1->num_rows > 0) {
    $resp["result"] = true;
}

echo json_encode($resp);


