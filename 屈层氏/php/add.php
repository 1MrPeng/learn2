<?php
$province=$_POST['province'];
$city=$_POST['city'];
$address=$_POST['address'];
$tel=$_POST['tel'];
$link=mysqli_connect('localhost','root','');
if(mysqli_connect_error()){
    echo "<script>alert('数据库连接失败')</script>";die;
}
//选择数据库
mysqli_select_db($link,'mall');
//设置字符集
mysqli_set_charset($link,'utf8');
$sql="insert into logistics(`province`,`city`,`address`,`tel`) VALUE({$province},{$city},{$address},{$tel})";
$row=mysqli_query($link,$sql);
if($row>0){
    echo "<script>alert('添加成功')</script>";
    header('location:../HTML/PIM.php');
}else{
    echo "<script>alert('添加失败')</script>";
    header('location:../HTML/PIM.php');
}