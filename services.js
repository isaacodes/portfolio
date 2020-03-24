$(document).ready(function() {
    $("body").scroll(function() {
        if ($("nav").offset().top == 0) {
            $("nav").addClass("top");
        } else {
            $("nav").removeClass("top");
        }
    });
});