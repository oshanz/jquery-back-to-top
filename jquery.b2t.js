(function($) {
    $.fn.b2t = function() {
        var mari = $('#mari');
        if (!mari.length) {
            $("body").append("<div id='mari'></div>");
            mari = $('#mari');
        }
        $(window).scroll(function() {
            if ($(this).scrollTop() > 800) {
                mari.fadeIn();
            } else {
                mari.fadeOut();
            }
        });
        mari.click(function() {
            $("body,html").animate({scrollTop: 0}, 200)
        });
    };
})(jQuery);
