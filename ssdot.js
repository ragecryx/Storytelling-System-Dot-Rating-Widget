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


    function InitDotRating(element) {
        var max, value;
        max = element.data("dot-max");
        value = element.data("dot-value");

        element.html((new Array(max + 1)).join("<div class='ss-dot'></div>"));
        SetDotRating(element, value);
        if (element.data("dot-is-squared") === true) {
            element.children(".ss-dot").addClass("ss-dot-xmark");
        }

        element.click(function (e) {
            var target = $(e.target);
            if (target.attr("id") !== $(element).attr("id")) {
                SetDotRating($(element), $(element).children(".ss-dot").index(target) + 1);
            } else {
                SetDotRating($(element), 0);
            }
        });
    };


    // After the page finished loading, detect and
    // initialize all dot rating components.
    $(document).ready(function () {
        $(".ss-dot-rating").each(function(){
            InitDotRating($(this));
        });
    });

})(window.jQuery);
