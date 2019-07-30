<?php
session_start();
$username=$_POST['username'] ? $_POST['username'] : '';
$password=$_POST['password'] ? $_POST['password'] : '';
//连接数据库
$link=mysqli_connect('localhost','root','');
//判断
if(mysqli_connect_error()){
    echo "连接失败".mysqli_connect_error();
}
//选择数据库
mysqli_select_db($link,'mall');
//设置字符集
mysqli_set_charset($link,'utf8');
$sql="SELECT * FROM user WHERE `name`={$username}";
$result=mysqli_query($link,$sql);
$data=mysqli_fetch_assoc($result);
if(!empty($data) && is_array($data)){
    if($password!=$data['password']){
        echo '<script>alert("密码错误")</script>';die;
    }else{
        $_SESSION['user']=$data;
        header('location:../HTML/index.php');
    }
}else{
    echo '<script>alert("用户不存在")</script>';
    header('location:../HTML/login.php');
}
//SQL语句
//$sql="SELECT * FROM cate1 WHERE id>4 ORDER BY id LIMIT 5";
////执行语句
//$result=mysqli_query($link,$sql)
////解析结果集
//echo "<pre>";
//while($resultArr=mysqli_fetch_array($result)){
//    print_r($resultArr);
//}
////关闭连接
//mysqli_close($link);