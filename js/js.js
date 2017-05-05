$(document).ready(function(){
    //web show only
    $("#web").click(function(){
        $(".graphics").hide();
    });
    $("#web").click(function(){
        $(".video").hide();
    });
    $("#web").click(function(){
        $(".web").show();
    });
    //end

    //graphics show only
    $("#graphics").click(function(){
        $(".web").hide();
    });
    $("#graphics").click(function(){
        $(".video").hide();
    });
    $("#graphics").click(function(){
        $(".graphics").show();
    });
    //end

    //video show only
    $("#video").click(function(){
        $(".graphics").hide();
    });
    $("#video").click(function(){
        $(".web").hide();
    });
    $("#video").click(function(){
        $(".video").show();
    });
    //end
});