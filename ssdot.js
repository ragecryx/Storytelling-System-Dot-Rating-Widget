/* ============================================
 * Storytelling System Dot Rating Widget v1.0
 * ========================================= */

(function ($) {
    "use strict";
    function SetDotRating(element, value) {
        if (element.data("dot-is-squared") === true) {
            element.children(".ss-dot").removeClass("ss-dot-xmark");
            if (value > element.data("dot-min")) {
                element.children(".ss-dot").slice(0, value).addClass("ss-dot-xmark");
                element.children(".ss-dot:nth-child(5n)").css("margin-right","0.6em");
                element.data("dot-value", value);
            } else {
                element.children(".ss-dot").slice(0, element.data("dot-min")).addClass("ss-dot-xmark");
                element.children(".ss-dot:nth-child(5n)").css("margin-right","0.6em");
                element.data("dot-value", element.data("dot-min"));
            }
        } else {
            element.children(".ss-dot").css("background-color", "white");
            if (value > element.data("dot-min")) {
                element.children(".ss-dot").slice(0, value).css("background-color", "black");
                element.children(".ss-dot:nth-child(5n)").css("margin-right","0.6em");
                element.data("dot-value", value);
            } else {
                element.children(".ss-dot").slice(0, element.data("dot-min")).css("background-color", "black");
                element.children(".ss-dot:nth-child(5n)").css("margin-right","0.6em");
                element.data("dot-value", element.data("dot-min"));
            }
        }
    }
    
    $.fn.DotRating = function () {
        var max, value;
        max = this.data("dot-max");
        value = this.data("dot-value");
        
        this.html((new Array(max + 1)).join("<div class='ss-dot'></div>"));
        SetDotRating(this, value);
        if (this.data("dot-is-squared") === true) {
            this.children(".ss-dot").css("border-radius", "0em");
        }
        
        this.click(function (e) {
            var target = $(e.target);
            if (target.attr("id") !== $(this).attr("id")) {
                SetDotRating($(this), $(this).children(".ss-dot").index(target) + 1);
            } else {
                SetDotRating($(this), 0);
            }
        });
    };
    
})(window.jQuery);
