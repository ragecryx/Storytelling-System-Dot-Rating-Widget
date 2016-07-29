/* ============================================
 * Storytelling System Dot Rating Widget v1.2
 * Licensed under the MIT license.
 * ========================================= */

(function ($) {
    "use strict";


    function SetDotRating(element, value) {
        element.children(".ss-dot").removeClass("ss-dot-marked");

        // Set new values
        if (value > element.data("dot-min")) {
            element.children(".ss-dot").slice(0, value).addClass("ss-dot-marked");
            element.data("dot-value", value);
        } else {
            element.children(".ss-dot").slice(0, element.data("dot-min")).addClass("ss-dot-marked");
            element.data("dot-value", element.data("dot-min"));
        }

        // Set styles on newly marked dots (ss-dots)

        if(element.data("dot-color-border")) {
            // Set the border to all dots
            element.children(".ss-dot").css("border-color", element.data("dot-color-border"));
        }

        if(element.data("dot-color-empty")) {
            // Set the color to all dots who are not marked (are empty)
            element.children(".ss-dot:not(.ss-dot-marked)").css("background-color", element.data("dot-color-empty"));
        }

        if(element.data("dot-color-marked")) {
            // Set the color to all dots who are marked
            element.children(".ss-dot.ss-dot-marked").slice(0, value).css("background-color", element.data("dot-color-marked"));
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
        $("ss-rating").each(function(){
            InitDotRating($(this));
        });
    });

})(window.jQuery);
