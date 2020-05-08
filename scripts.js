$(document).scroll(function() {
    var st = $(document).scrollTop();
    var bh = $("header").height();
    if (st >= bh) {
        $("nav").addClass('top');
    } else {
        $("nav").removeClass('top');
    }
    $("section").each(function() {
        var top = $(this).offset().top;
        if (st + 65 >= top - (bh / 3)) {
            $(this).addClass('show');
            if ($(this).prop('id') == "three") {
                progressbar();
            }
        } else {
            // $(this).removeClass('show');
        }
    });
    $("body").css('background-position-y', 'calc(' + -st / 3 + 'px)');
}).on('click', '.project', function() {
    var id = $(this).prop('id');
    switch (id) {
        case "sd":
            window.open('https://simplisticdesign.netlify.app');
            break;
        case "rwd":
            window.open('http://isaacodes.github.io/ruckelwebdesign');
            break;
        case "dbf":
            window.open('http://isaacodes.github.io/destinbayfishing');
            break;
    }
}).ready(function() {
    $("section").each(function() {
        var top = $(this).children('h2').offset().top + $(this).children('h2').height() - $(this).offset().top;
        $('.underline').css('top', 'calc(' + top + 'px + 2vh)');
    });
});
function progressbar() {
    $(".inner-bar").each(function() {
        var width = $(this).html();
        $(this).css('width', 'calc(' + width + ' - 16px)').css('padding-right', '16px');
    });
}

// Resize Handling
$(window).resize(function() {
    if ($("body").width() <= 1086) {
        $("nav").addClass('collapse');
    } else {
        $("nav").removeClass('collapse');
    }

    if ($("body").width() <= 900) {
        $("nav").addClass('mobile');
    } else {
        $("nav").removeClass('mobile');
    }
});

var navopen = false;
$(document).on('click', 'nav button.expand-nav', function() {
    if (navopen === false) {
        $(this).addClass('nav-open');
        $("nav").addClass('open');
        navopen = true;
    } else {
        $(this).removeClass('nav-open');
        $("nav").removeClass("open");
        navopen = false;
    }
});