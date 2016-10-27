/**
 * Created by Administrator on 2016/10/18.
 */
$(function () {
    $(".bom>ul>li").click(function () {
        var $d = $(this).index();
        $(".bom>ul>li").removeClass("active");
        $(this).addClass("active");
        $(".container").hide();
        $(".container").eq($d).show();
    })
});