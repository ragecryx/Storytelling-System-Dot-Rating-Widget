/* ============================================
 * Storytelling System Dot Rating Widget v1.0
 * ========================================= */

(function( $ ){
    
    function SetDotRating(element, value) {
        element.children(".ss-dot").css("background-color", "white");
        if(value > element.data("dot-min")) {
            element.children(".ss-dot").slice(0, value).css("background-color", "black");
            element.data("dot-value", value);
        }
        else {
            element.children(".ss-dot").slice(0, element.data("dot-min")).css("background-color", "black");
            element.data("dot-value", element.data("dot-min"));
        }
    }
    
    $.fn.DotRating = function () {
        var max = this.data("dot-max");
        var value = this.data("dot-value");
        this.html((new Array(max+1)).join("<div class='ss-dot'></div>"));
        SetDotRating(this, value);
        
        this.click(function(e){
            var target = $(e.target);
            if(target.attr("id") !== $(this).attr("id")) {
                SetDotRating($(this), $(this).children(".ss-dot").index(target)+1);
            } else {
                SetDotRating($(this), 0);
            }
        });
    };
    
})(window.jQuery);
