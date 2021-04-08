/*
要求：
1、在给出的html结构上完成计算器功能
2、数字键能累积显示，但是要限制显示位数，位数可自定
3、显示后单击运算符（加减乘除）后显示对应的运算符
4、再单击数字键后，显示数字
5、单击=显示结果。
6、如果运算符前后没有数字，单击等号后没反应
7、单击AC清空
8、单击+/-，是在正数和负数切换
9、单击%，换算成百分数显示，即100会变成1, 不是单个数字的时候，%号单击后不起作用。

注意：以下代码仅是示例
*/

$(".calc-num").click(function (){
    console.log($(this).text());
    var str=$("#disp").text()+$(this).text();
    $("#disp").text(str);
})

$(".calc-btn").click(function (){
    let str=$(this).text();
    let strDisp=$("#disp").text();
    switch (str){
        case "AC":
            $("#disp").text("");
            break;
        case "+/-":
            if(strDisp.substr(0,1)=="-")
                $("#disp").text(strDisp.substr(1,strDisp.length-1));
            else
                $("#disp").text("-"+$("#disp").text());
    }
})








