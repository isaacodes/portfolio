$(document).ready(function() {
    $("body ").scroll(function() {
        var halfbody = $("body").height() / 2;
        var trigger = $("body").height() / 3;
        var scrolltop = $("body").scrollTop();
        $(".section").each(function() {
            if ($(this).offset().top <= trigger) {
                $(this).addClass('display');
            } else {
                $(this).removeClass("display");
            }
        });
        if (scrolltop >= halfbody) {
            $("nav").addClass("trigger");
        } else {
            $("nav").removeClass('trigger');
        }
    });
});