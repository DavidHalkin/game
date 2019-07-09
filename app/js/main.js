$(document).ready(function(){
    $(".btn_nav_js").click(function(){
        $(this).parent().find(".slide_content_js").toggleClass("active");
    });
    $(".close_nav_js").click(function(){
        $(this).parents(".slide_content_js").toggleClass("active");
        // $(this).toggleClass("active");
    });

    // chat
     $(".chat_js").click(function(){
        $(".modal_chat_js").toggleClass("active");
        return false;
    });
      $(".modal_box_close_js").click(function(){
        $(this).parent().removeClass("active");
        return false;
    });
    // task
    $(".task_js").click(function(){
        $(".modal_task_js").toggleClass("active");
        return false;
    });
    // modal
    $(".modal_js").click(function(){
        $(".modal_box_js").toggleClass("active");
        return false;
    });
     // modal
    $(".modal_2_js").click(function(){
        $(".modal_2_box_js").toggleClass("active");
        return false;
    });
});
// select
$(function() {
  jcf.replaceAll();
});