"use strict";

$(() => {
    function slideToAnchor (anchorLinkSelector) {
        $(anchorLinkSelector).on("click", function() {
            let elementClick = $(this).attr("href");
            let destination = $(elementClick).offset().top;
            let duration = destination;
            if (duration < 500) {
                duration = 500;
            } else if (duration > 1500) {
                duration = 1500;
            }
            $("html").animate({
                scrollTop: destination
            }, duration);
        });
    }

    function showSearchField(searchItemSelector) {
        $(searchItemSelector).on("click", function () {
            $(this).hide().siblings().show(300).children().focus().focusout(function () {
                $(this).parent().hide().siblings().show();
            });
        });
    }

    makeMenuLinkActive(".navbar-menu-link");
    slideToAnchor("a.button-with-layer[href='#purchase']");
    slideToAnchor("a.navbar-menu-link");
    showSearchField(".navbar-menu-search .header-search-icon");
});


