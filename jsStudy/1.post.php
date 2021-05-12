<?php
    header('content-type:text/html;charset="uft-8"');

    /* 
        $_POST (全局的关联数组)  存放通过POST提交的所有数据
    */


    $username = $_POST["username"];
    $age = $_POST["age"];
    $password = $_POST["password"];

    /*获取？后面对应健的值*/
    
    // echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";

    echo "你的名字：{$username}，年龄：{$age}，密码：{$password}";
?>