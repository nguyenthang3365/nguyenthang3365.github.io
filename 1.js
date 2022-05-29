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
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(5) a").click(function (e) { 
        var offset = $('#Testimonials').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(6) a").click(function (e) { 
        var offset = $('#OurServices').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(7) a").click(function (e) { 
        var offset = $('#PhotoGallery').offset();
        var top = offset.top;
        e.preventDefault();
        $("html").animate({
            scrollTop: top
        },1000);
    });

    $("#menu ul li:nth-child(8) a").click(function (e) { 
        var offset = $('#Contact').offset();
        var top = offset.top;
        e.preventDefault();
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

// hieung3d
     const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
    ];
    
    var tagCloud = TagCloud('.content', myTags,{
    
      // radius in px
      radius: 250,
    
      // animation speed
      // slow, normal, fast
      maxSpeed: 'fast',
      initSpeed: 'fast',
    
      // 0 = top
      // 90 = left
      // 135 = right-bottom
      direction: 135,
      
      // interact with cursor move on mouse out
      keep: true
      
    });
    
    //To change the color of text randomly
    var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.content').style.color = random_color;

});
