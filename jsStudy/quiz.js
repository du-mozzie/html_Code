while(1){
    var submit = document.getElementsByClassName("ivu-btn ivu-btn-primary");
    var ps = document.getElementsByClassName("positiveSolution");
    var str = ps[0].innerHTML;
    var res = str.slice(4,str.length-1);
    var res = res.split(" ");
    var mark2 = document.getElementsByClassName("mark");
    if(mark2[0].innerHTML == res[0] || mark2[0].innerHTML == res[1] || mark2[0].innerHTML == res[2] || mark2[0].innerHTML == res[3] || mark2[0].innerHTML == res[4]){
        mark2[0].click();
    }
    if(mark2[1].innerHTML == res[0] || mark2[1].innerHTML == res[1] || mark2[1].innerHTML == res[2] || mark2[1].innerHTML == res[3] || mark2[1].innerHTML == res[4]){
        mark2[1].click();
    }
    if(mark2[2].innerHTML == res[0] || mark2[2].innerHTML == res[1] || mark2[2].innerHTML == res[2] || mark2[2].innerHTML == res[3] || mark2[2].innerHTML == res[4]){
        mark2[2].click();
    }
    if(mark2[3]){
        if(mark2[3].innerHTML == res[0] || mark2[3].innerHTML == res[1] || mark2[3].innerHTML == res[2] || mark2[3].innerHTML == res[3] || mark2[3].innerHTML == res[4]){
            if(mark2[3].innerHTML == res){
                mark2[3].click();
            }
            if(mark2[4]){
                if(mark2[4].innerHTML == res[0] || mark2[4].innerHTML == res[1] || mark2[4].innerHTML == res[2] || mark2[4].innerHTML == res[3] || mark2[4].innerHTML == res[4]){
                    if(mark2[4].innerHTML == res){
                        mark2[4].click();
                    }
                }
            } 
        }
    }
    submit[0].click();
    setTimeout(function(){
        submit[0].click();
    },500);
}
