<?php
    header('content-type:text/html;charset="uft-8"');

    /* 
        $_GET (全局的关联数组)  存放通过get提交的所有数据
    */


    $username = $_GET["username"];
    $age = $_GET["age"];
    $password = $_GET["password"];

    /*获取？后面对应健的值*/
    
    // echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";

    echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";
?>