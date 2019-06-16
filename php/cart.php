<?
$serverAddr = 'localhost';
$dbmsUsername = 'root';
$dbmsPassword = '';
$dbName = 'zhongjiuwang';

$conn = new mysqli($serverAddr, $dbmsUsername, $dbmsPassword, $dbName);

if ($conn->connect_error) {
    echo "连接失败" . $conn->connect_error;
    return;
}

    $conn->query("set names utf8");


    $sql="
    SELECT `id`, `username`, `src`, `name`, `price`, `count` FROM `cart` WHERE 1
    ";
    $result = $conn->query($sql);

    $resp = array();

    if($result->num_rows>0){
        while(($row = $result->fetch_assoc()) != null){
            $resp[]=$row;
        }
        echo json_encode($resp);
    }else{
        echo"[]";
    }
