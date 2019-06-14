<?php
$username = $_POST['zjw_username'];
$password = $_POST['zjw_password'];

$serverAddr = "localhost";
$dbmsUsernam = "root";
$dbmsPassword = "";
$dbName = "zhongjiuwang";

$conn = new mysqli($serverAddr, $dbmsUsernam, $dbmsPassword, $dbName);

if ($conn->connect_error) {
    echo "数据库连接失败" . $conn->connect_error;
    return;
};

$sql = "
INSERT INTO `users`
(`id`, `username`, `password`, `tel`) 
VALUES
(Null,'$username','$password','$username')
";


$result = $conn->query($sql);

if ($result) {
    echo '{"result":true}';
}else{
    echo '{"result":false}'; 
}


?>
