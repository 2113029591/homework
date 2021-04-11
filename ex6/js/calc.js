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


var num1=null;
var num2=null;
var isFinish=false;

//解决当输出完成后正负号转换  将变换的数看作是一个新的输入数
var flagFinish=false;
var flagDoing=false;
var oper;
$(".calc-num").click(function (){
    if($("#disp").text().length==18){
        alert("已到达最大长度，无法再输入数字")
        return 0;
    }
    if($("#disp").text()=="+" ||$("#disp").text()=="-"
        ||$("#disp").text()=="×" ||$("#disp").text()=="÷"){
        $("#disp").text("")
    }
    console.log($(this).text());
    var str=$("#disp").text()+$(this).text();
    $("#disp").text(str);
})

$(".calc-btn").click(function (){
    isFinish=false
    let str=$(this).text();
    let strDisp=$("#disp").text();

    switch (str){
        case "AC":
            if(flagDoing)
                num2=null
            //    输出结果后清空看作重新一个新的处理
            else if(flagFinish){
                num1=null
                num2=null
            }
            $("#disp").text("");
            break;
        case "%":
            $("#disp").text(eval(strDisp+"/"+"100"));
            if(flagDoing==false && flagFinish){
                num1=$("#disp").text();
            }
            break;
        case "+/-":
            //解决开头是零的情况  012
            strDisp=String(parseFloat(strDisp))
            $("#disp").text(strDisp);
            if(strDisp.substr(0,1)=="-")
                $("#disp").text(strDisp.substr(1,strDisp.length-1));
            else if(parseFloat(strDisp)!=0)
                $("#disp").text("-"+$("#disp").text());
            if(flagDoing==false && flagFinish){
                num1=$("#disp").text();
            }
            break;
        case "+":
            flagDoing=true
            oper="+"
            if(num1!=null && num2!=null){
                num1=eval(num1+oper+num2)
                num2=null
                console.log(num2)
                $("#disp").text("+");
            }
            else{
                if(num1==null){
                    num1=$("#disp").text()
                }
                else{
                    num2=$("#disp").text()

                    isDivide0();
                    if(isFinish)
                        return 0;

                    if(num2=="+")
                        num2=null
                }
                $("#disp").text("+");
            }
            break;
        case "-":
            flagDoing=true
            oper="-"
            if(num1!=null && num2!=null){
                num1=eval(num1+oper+num2)
                num2=null
                console.log(num2)
                $("#disp").text("+");
            }
            else{
                if(num1==null){
                    num1=$("#disp").text()
                }
                else{
                    num2=$("#disp").text()
                    isDivide0();
                    if(isFinish)
                        return 0;
                    if(num2=="-")
                        num2=null
                }
                $("#disp").text("-");
            }
            break;
        case "×":
            flagDoing=true
            oper="*"
            if(num1!=null && num2!=null){
                num1=eval(num1+oper+num2)
                num2=null
                console.log(num2)
                $("#disp").text("×");
            }
            else{
                if(num1==null){
                    num1=$("#disp").text()
                }
                else{
                    num2=$("#disp").text()
                    isDivide0();
                    if(isFinish)
                        return 0;
                    if(num2=="×")
                        num2=null
                }
                $("#disp").text("×");
            }
            break;
        case "÷":
            flagDoing=true
            oper="/"
            if(num1!=null && num2!=null){
                num1=eval(num1+oper+num2)
                num2=null
                console.log(num2)
                $("#disp").text("÷");
            }
            else{
                if(num1==null){
                    num1=$("#disp").text()
                }
                else{
                    num2=$("#disp").text()
                    if(num2=="+")
                        num2=null
                }
                $("#disp").text("÷");
            }
            break;
        case "=":

            if(num1==null){
                num1=$("#disp").text()
            }
            else{
                num2=$("#disp").text()
                //1

                isDivide0();
                if(isFinish)
                    return 0;
                if(num2=="=")
                    num2=null
            }

            if(num1!=null && num2!=null){
                num1=eval(num1+oper+num2)
                num2=null
            }
            $("#disp").text(num1)
            flagDoing=false
            flagFinish=true
            break;
    }
});


function isDivide0(){
    if(oper=="/" && num2=="0"){
        alert("除数不能为0，请重新输入数字")
        num2=null;
        $("#disp").text("")
        isFinish=true
    }
}




