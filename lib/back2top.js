(function($) {
    $.fn.back2top = function(limit, top, speed) {
        var l = limit || 500, s = speed || 0, t = top || 0;
        var b2t = $('#back2top');
        if (!b2t.length) {
            $("body").append("<div id='back2top'></div>");
            b2t = $('#back2top');
            b2t.css({
                "display": "none",
                "background-image": "url('http://localhost/jquery-back-to-top/demo/back2top.png')",
                "background-repeat": "no-repeat",
                "cursor": "pointer",
                "position": "fixed",
                "bottom": "20px",
                "height": "70px",
                "right": "20px",
                "width": "70px",
                "z-index": "1"
            });
        }
        $(window).scroll(function() {
            if ($(this).scrollTop() > l) {
                b2t.fadeIn();
            } else {
                b2t.fadeOut();
            }
        });
        b2t.click(function() {
            $("body,html").animate({scrollTop: t}, s);
        });
    };
})(jQuery);
