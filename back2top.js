(function($) {
    $.fn.back2top = function() {
        var b2t = $('#back2top');
        if (!b2t.length) {
            $("body").append("<div id='back2top'></div>");
            b2t = $('#back2top');
        }
        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                b2t.fadeIn();
            } else {
                b2t.fadeOut();
            }
        });
        b2t.click(function() {
            $("body,html").animate({scrollTop: 0}, 200);
        });
    };
})(jQuery);
