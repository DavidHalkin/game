$(document).ready(function(){
    $(".btn_nav_js").click(function(){
        $(this).parent().find(".slide_content_js").toggleClass("active");
        // $(this).toggleClass("active");
    });
    $(".close_nav_js").click(function(){
        $(this).parents(".slide_content_js").toggleClass("active");
        // $(this).toggleClass("active");
    });
});