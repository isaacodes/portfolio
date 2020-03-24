$(document).ready(function() {
    var currentslide = 0;
    var able = true;
    window.addEventListener('wheel', function(event)
        {
        if (able === true) {
            var bh = $("body").height();
            if (event.deltaY < 0) {
                switch (currentslide - 1) {
                    case 0:
                        $("body, html").animate({
                            scrollTop: '0',
                        }, 300);
                        $("nav").removeClass('trigger');
                        break;
                    case 1:
                        $("body, html").animate({
                            scrollTop: bh,
                        }, 300);
                        break;
                    case 2:
                        $("body, html").animate({
                            scrollTop: bh * 2,
                        }, 300);
                        break;
                    case 3:
                        $("body, html").animate({
                            scrollTop: bh * 3,
                        }, 300);
                        break;
                    case 4:
                        $("body, html").animate({
                            scrollTop: bh * 4,
                        }, 300);
                        break;
                }
                currentslide--;
                if (currentslide < 0) {
                    currentslide = 0;
                }
            } else if (event.deltaY > 0) {
                switch (currentslide + 1) {
                    case 1:
                        $("body, html").animate({
                            scrollTop: bh,
                        }, 300);
                        $("nav").addClass("trigger");
                        break;
                    case 2:
                        $("body, html").animate({
                            scrollTop: bh * 2,
                        }, 300);
                        break;
                    case 3:
                        $("body, html").animate({
                            scrollTop: bh * 3,
                        }, 300);
                        break;
                    case 4:
                        $("body, html").animate({
                            scrollTop: bh * 4,
                        }, 300);
                        break;
                    case 5:
                        $("body, html").animate({
                            scrollTop: bh * 5,
                        }, 300);
                        break;
                }
                currentslide++;
                if (currentslide > 5) {
                    currentslide = 5;
                }
            }
            able = false;
            function puedo() {
                able = true;
            }
            setTimeout(puedo, 400);
        }
        checkslide();
    });
    function checkslide() {
        $(".section").each(function() {
            var y = parseInt($(this).prop('id'));
            if (y == currentslide) {
                display(y);
            } else {
                $(this).removeClass('display');
            }
        });
    }
    function display(slidenumber) {
        function wait() {
            $(".section#" + slidenumber).addClass('display');
        }
        setTimeout(wait, 500);
    }
});