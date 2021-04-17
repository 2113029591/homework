const MESSAGE=[
    "对不起，您的浏览器不支持 web 存储",
    "我也要吐槽下",
    "吐槽完毕，提交",
    "添加完成"
]

var isShow=false
function getJson(){
    $.getJSON("../data.json",function(resp){
        console.log("aaaa")
        let str=""
        $(".list").append("<ul></ul>")
        $.each(resp,function(index,obj){
            str="<span class='title'>"+obj.user+"</span>"+"<br>"+
            "<span class='text'>"+obj.text+"</span>"
            $(".list ul").append
            ("<li class='border shadow'>"+str+"</li>")
        })
    })
}
getJson();
$(".btn").append("<button class='btn-add'></button>")
$(".btn-add").text(MESSAGE[1])
$(".btn-add").click(function(){
    if(!isShow){
        $(".from").css('display','block')
        $(".btn-add").text(MESSAGE[2])
        isShow=!isShow
    }
    else{
        str=$("textarea").text()
        $(".list ul").append
            ("<li class='border shadow'>"+str+"</li>")
        $(".btn-add").text(MESSAGE[1])
        $(".from").css('display','none')
        isShow=!isShow
    }
})