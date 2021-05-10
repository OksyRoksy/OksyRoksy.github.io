
$(document).ready(function(){
    $('#searchBtn').click(function(){
        var searcher= $('#searcher').val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searcher + "&format=json&callback=?";
        $.ajax({
            type:"GET",
            url:url,
            async:false,
            dataType: "json",
            success: function(data){
                    $('#output').html('');
                for(var i=0;i<data[1].length;i++){
                    $('#output').append("<li><a href= "+data[3][i]+">"+data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
                }
                $("#searcher").val('');
            },
            error: function(errorMessage){
                alert("Error");
            } 
        });
    });
    $("#searcher").keypress(function(e){
        if(e.which==13){
            $("#searchBtn").click();
        }
    });
});
// $("#output").prepend("<li><h3>" + data[1][i] + "</h3>" + data[2][i] +'<a href="' +data[3][i] +'">' + data[3][i] + "</a></li>");
// $('#output').append("<div><div class='btnSearch'><a href="+data[3][i]+"><h2>"+data[1][i] +"</h2>"+ "<p>"+data[2][i]+"</p></a></div></div>" );