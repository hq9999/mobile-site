$(function () {
    var contentWidth = $(".lunbo-box>li").width();
    window.onresize=function () {
        contentWidth = $(".lunbo-box>li").width();
    }
    var lunbo = function () {
        var current = 0;
        function move() {
            if(current==5){
                $(".lunbo-box").animate({left:-contentWidth*current+"px"},400,function () {
                    $(".lunbo-box").css("left","0");
                });
                current=0;
            }else{
                $(".lunbo-box").animate({left:-contentWidth*current+"px"},400);
            }
            $(".pic-nav>li").removeClass("active");
            $(".pic-nav>li").eq(current).addClass("active");
        }
        setInterval(function () {
            current++;
            move();
        },2000)

        $(".pic-nav>li").tap(function () {
            current = $(this).index();
            move();
        })
    }
    lunbo();

    $(".search-content").focus(function () {
        $(".search-pro").show();
    });
    $(".search-content").blur(function () {
        $(".search-pro").hide();
    });

    var controlBtn = function () {
        $(".ret-top").tap(function () {
            //alert($(window).scrollTop());
            $(window).scrollTop(0);
        })
    }
    controlBtn();


    $(".topBack").tap(function () {
        $(".lei-box").hide();
        $(".index-box").show();
    });
    $(".bom-nav>a").tap(function () {
        if($(this).attr("class")=="home"){
            $(".cloth-box").hide();
            $(".lei-box").hide();
            $(".index-box").show();
        }else if($(this).attr("class")=="lei"){
            $(".cloth-box").hide();
            $(".index-box").hide();
            $(".lei-box").show();
        }else if($(this).attr("class")=="cloth"){
            $(".cloth-box").show();
            $(".index-box").hide();
            $(".lei-box").hide();
        }
        $(this).addClass("active").siblings().removeClass("active");
    })
    var tabEffect = function () {
        $(".left-nav>ul>li").tap(function () {
            var $index = $(this).index();
            $(".left-nav>ul>li").removeClass("active");
            $(this).addClass("active");
            $(".product-right").hide();
            $(".product-right").eq($index).show();
        })
    }
    tabEffect();
})
//alert($(".lunbo-box").position().left);