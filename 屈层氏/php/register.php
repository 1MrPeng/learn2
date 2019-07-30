<?php
$username=$_POST['username'];
$password=$_POST['password'];
$passwordTwo=$_POST['passwordTwo'];
if($password!=$passwordTwo){
    echo "<script>alert('两次密码不一致')</script>";
    header("location:../HTML/login.php");
    die;
}else{
    //选择数据库
mysqli_select_db($link,'mall');
//设置字符集
mysqli_set_charset($link,'utf8');
$sql="INSERT INTO user(`username`,`password`) value({$username},{$password})";
$result=mysqli_query($link,$sql);
if($result>0){
    echo "<script>alert('注册成功')</script>";
    header("location:../HTML/login.php");
}else{
    echo "<script>alert('注册失败')</script>";
    header("location:../HTML/register.php");
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
}