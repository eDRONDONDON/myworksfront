"use strict";

$(() => {

    const HIDDEN_CLASS = "hidden";
    const LOADER_ANIMATION_DELAY = 2000;
    const IMAGE_ITEMS_QUANTITY = 18;
    const GRID_SELECTOR = ".gallery-grid";
    const GRID_ITEM_SELECTOR = ".gallery-grid-item";
    const GRID_ITEM_ACTIVE_SELECTOR = ".gallery-item-active";
    const LOAD_MORE_BUTTON_SELECTOR = ".gallery .button-container>a.button";
    const LOADER_CONTAINER_SELECTOR = ".gallery .loader-container";
    const IMAGES_HIDDEN_SELECTOR = ".gallery " + GRID_ITEM_SELECTOR + "." + HIDDEN_CLASS;
    let buttonPushCounter = 0;

    /**
     * Handler function to show block instead of image on image item hover. Include possibility to resize image.
     * */

    function showActiveImageHandler() {
        $(GRID_ITEM_ACTIVE_SELECTOR).remove();
        let activeImageInfo = $(
            "<div class='gallery-item-active'>" +
            "<a href='' class='gallery-active-search fas fa-search white-color blue-background'></a>" +
            "<a href='' class='gallery-active-arrows fas fa-arrows-alt white-color blue-background'></a>" +
            "</div>");
        activeImageInfo.offset({top:$(this).position().top, left:$(this).position().left});
        activeImageInfo.height($(this).height());
        activeImageInfo.width($(this).width());
        $(GRID_SELECTOR).append(activeImageInfo);
        $(GRID_ITEM_ACTIVE_SELECTOR).on("mouseleave", () => $(GRID_ITEM_ACTIVE_SELECTOR).remove());
        resizeImage($(this));
    }

    /**
     * Function to add event to showActiveImageHandler.
     * */

    function showActiveImageInfo() {
        $(GRID_ITEM_SELECTOR).on("mouseenter", showActiveImageHandler);
    }

    /**
     * Function to resize image on clicking arrows button on image hover.
     * */

    function resizeImage(image) {
        $(GRID_ITEM_ACTIVE_SELECTOR).children().last().on("click", event => {
            event.preventDefault();
            $(GRID_ITEM_SELECTOR).off("mouseenter");
            $(GRID_ITEM_ACTIVE_SELECTOR).remove();
            if (/[\w\s-]*width3[\w\s-]*height[3-4]/.test(image.attr("class"))) {
                image.removeClass();
                image.addClass("gallery-grid-item");
            } else {
                image.removeClass();
                image.addClass("gallery-grid-item");
                image.addClass("gallery-grid-item--width3");
                image.addClass("gallery-grid-item--height3");
            }
            useMasonry(GRID_SELECTOR, GRID_ITEM_SELECTOR);
            $(GRID_ITEM_SELECTOR).delay(250).queue(next => {
                $(GRID_ITEM_SELECTOR).on("mouseenter", showActiveImageHandler);
                next();
            });
        })
    }

    /**
     * Function to show more images and check button display mode on clicking "load more" button.
     * Adds load animation before images loaded.
     * */

    function loadMoreImages() {
        $(LOAD_MORE_BUTTON_SELECTOR).on("click", event => {
            event.preventDefault();
            $(GRID_ITEM_SELECTOR).off("mouseenter");
            $(LOAD_MORE_BUTTON_SELECTOR).hide();
            $(LOADER_CONTAINER_SELECTOR).removeClass(HIDDEN_CLASS).delay(LOADER_ANIMATION_DELAY).queue(next => {
                $(LOADER_CONTAINER_SELECTOR).addClass(HIDDEN_CLASS);
                buttonPushCounter++;
                removeItemsClass($(IMAGES_HIDDEN_SELECTOR), IMAGE_ITEMS_QUANTITY, HIDDEN_CLASS);
                checkButtonDisplay($(IMAGES_HIDDEN_SELECTOR), LOAD_MORE_BUTTON_SELECTOR, buttonPushCounter);
                useMasonry(GRID_SELECTOR, GRID_ITEM_SELECTOR);
                $(GRID_ITEM_SELECTOR).delay(250).queue(next => {
                    $(GRID_ITEM_SELECTOR).on("mouseenter", showActiveImageHandler);
                    next();
                });
            });
        });
    }

    useMasonry(GRID_SELECTOR, GRID_ITEM_SELECTOR);
    loadMoreImages();
    showActiveImageInfo();
});