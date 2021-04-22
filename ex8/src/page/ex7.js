$.getJSON("../../data/data.json",function(data){
    console.log(data);
    $.each(data,function(index,obj){
        console.log(obj.user,obj.text);
        
    })
})