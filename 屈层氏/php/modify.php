<?php
session_start();
$user_id=$_SESSION['user']['user_id'];
$province=isset($_POST['province']) ? $_POST['province'] : '';
$city=isset($_POST['city']) ? $_POST['city'] : '';
$address=isset($_POST['address']) ? $_POST['address'] : '';
$tel=isset($_POST['tel']) ? $_POST['tel'] : '';
$link=mysqli_connect('localhost','root','');
if(mysqli_connect_error()){
    echo "<script>alert('数据库连接失败')</script>";die;
}
//选择数据库
mysqli_select_db($link,'mall');
//设置字符集
mysqli_set_charset($link,'utf8');
if(!empty($province)){
    $sql="update logistics set `province`={$province}";
    $row=mysqli_query($link,$sql);
    if(!$row>0){
        echo "<script>alert('修改失败')</script>";die;
    }
}
if(!empty($city)){
    $sql="update logistics set `province`={$city}";
    $row=mysqli_query($link,$sql);
    if(!$row>0){
        echo "<script>alert('修改失败')</script>";die;
    }
}
$row=mysqli_query($link,$sql);
if($row>0){
    echo "<script>alert('添加成功')</script>";
    header('location:../HTML/PIM.php');
}else{
    echo "<script>alert('添加失败')</script>";
    header('location:../HTML/PIM.php');
}