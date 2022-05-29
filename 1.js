$(function(){
     
    $("#menu ul li:nth-child(1) a").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: 0
        },1000);
    });
    $("#menu ul li:nth-child(2) a").click(function (e) { 
        var offset = $('#MainFeatures').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });


    $("#menu ul li:nth-child(3) a").click(function (e) { 
        var offset = $('#About').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(4) a").click(function (e) { 
        var offset = $('#TeamMembers').offset();
        var top = offset.top;
        e.preventDefault();
        console.log("Aaa");
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(5) a").click(function (e) { 
        var offset = $('#Testimonials').offset();
        var top = offset.top;
        e.preventDefault();
        console.log("Aaa");
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(6) a").click(function (e) { 
        var offset = $('#OurServices').offset();
        var top = offset.top;
        e.preventDefault();
        console.log("Aaa");
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(7) a").click(function (e) { 
        var offset = $('#PhotoGallery').offset();
        var top = offset.top;
        e.preventDefault();
        console.log("Aaa");
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(8) a").click(function (e) { 
        var offset = $('#Contact').offset();
        var top = offset.top;
        e.preventDefault();
        console.log("Aaa");
        $("html").animate({
            scrollTop: top
        },1000);
    });
     
         $("#menu ul li:nth-child(9) a").click(function (e) { 
        var offset = $('#languageprograming').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });


    $("#top").click(function (e) { 
        e.preventDefault();
        $("html").animate({
            scrollTop: 0
        },1000);
    });


    $(window).scroll(function(event){
        var offset = $('#menu').offset();
        var top = offset.top;
        if(top>10)
        {
            $("#menu").addClass("addbg");
            $("#menu ul li a").addClass("chu")
        }
        else
        {
        $("#menu").removeClass("addbg");
        $("#menu ul li a").removeClass("chu")
        }
     });
   

});
