"use strict";

/**
 * Universal function to add class "active" to menu link and remove it for all another links.
 * */

function makeMenuLinkActive (elementSelector) {
    $(elementSelector).on("click", function (event) {
        event.preventDefault();
        $(this).addClass("active").parent().siblings().children().removeClass("active");
    });
}

/**
 * Universal function to remove class of set items quantity.
 * */

function removeItemsClass(items, quantity, className) {
    items.each((index, element) => index < quantity ? $(element).removeClass(className) : null);
}

/**
 * Universal function that returns all items filtered by attribute value of another element.
 * */

function getFilteredByAttributeItems(itemsSelector, filterElementSelector, attribute) {
    let criteria = $(filterElementSelector).attr(attribute);
    return criteria === "all" ? $(itemsSelector) : $(itemsSelector+"[" + attribute + "=" + criteria + "]");
}

/**
 * Universal function to check is it necessary to show or hide "load more" button depending on count of "hidden items" left.
 * Should be called after pushing "load more" button and/or switching filter category.
 * */

function checkButtonDisplay(hiddenItems, buttonSelector, buttonPushCounter, maxButtonPushCounter) {
    let loadMoreButton = $(buttonSelector);
    hiddenItems.length === 0 || buttonPushCounter === maxButtonPushCounter ? loadMoreButton.hide() : loadMoreButton.show();
}

/**
 * Universal function to use masonry plugin
 * */

function useMasonry(gridSelector, gridItemSelector) {
    let $grid = $(gridSelector).masonry({
        itemSelector: gridItemSelector,
        columnWidth: 10,
        gutter: 11,
        fitWidth: true,
    });
    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });
}

