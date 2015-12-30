/* ============================================
 * Storytelling System Dot Rating Widget v1.1
 * ========================================= */

(function ($) {
    "use strict";
    function SetDotRating(element, value) {
        element.children(".ss-dot").removeClass("ss-dot-marked");

        if(element.data("dot-color-empty")) {
          element.children(".ss-dot").css("background-color", element.data("dot-color-empty"));
        }

        if(element.data("dot-color-border")) {
          element.children(".ss-dot").css("border-color", element.data("dot-color-border"));
        }

        if(element.data("dot-color-marked")) {
          element.children(".ss-dot").slice(0, value).css("background-color", element.data("dot-color-marked"));
        }

        if (value > element.data("dot-min")) {
            element.children(".ss-dot").slice(0, value).addClass("ss-dot-marked");
            element.data("dot-value", value);
        } else {
            element.children(".ss-dot").slice(0, element.data("dot-min")).addClass("ss-dot-marked");
            element.data("dot-value", element.data("dot-min"));
        }
    }

    $.fn.DotRating = function () {
        var max, value;
        max = this.data("dot-max");
        value = this.data("dot-value");

        this.html((new Array(max + 1)).join("<div class='ss-dot'></div>"));
        SetDotRating(this, value);
        if (this.data("dot-is-squared") === true) {
            this.children(".ss-dot").addClass("ss-dot-xmark");
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
