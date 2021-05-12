<?php
    header("Content-type:text/html;charset=utf-8");
    /* 
        连接数据库  8个步骤
    */
    //1、连接数据库
    /* 
        mysql_connect();
        第一个参数：连接数据库的IP/域名
        第二个参数：用户名
        第三个参数：密码
    */
    $link = mysql_connect("localhost", "root", "DYJ0129..");
    if(!$link){
        echo "连接失败";
        exit;   //终止后续所有的代码
    }
    
?>