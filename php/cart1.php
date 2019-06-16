<?php
$serverAddr = 'localhost';
$dbmsUser = 'root';
$dbmspassword = '';
$dbName = 'zhongjiuwang';

$conn = new mysqli($serverAddr, $dbmsUser, $dbmspassword, $dbName);

if ($conn->connect_error) {
    echo "连接失败" . $conn->connect_error;
    return;
}

//连成功后，需要设定一个编码规则。
$conn->query("set names utf8");

$sql = "
    SELECT `id`, `username`, `src`, `name`, `price`, `count` FROM `cart` WHERE 1
    ";

$result = $conn->query($sql);

$resp = array();    //定义了一个空数组

if ($result->num_rows > 0) {
    //有数据,我们要从$result中提取数据
    //通过这个方法，将$result中的一条数据取出,$result中就少了一条数据
    //如果没有$result中已经没有数据，则返回null
    while (($row = $result->fetch_assoc()) != null) {
        //如果取出了一条数据，我们就将这条数据push到一个数组中
        $resp[] = $row; //相当与JS中数组的push操作
    }

    echo json_encode($resp);
} else {
    echo "[]";
}
