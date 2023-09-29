"use strict";

$(() => {

    const PORTFOLIO_ITEMS_FILTER_ATTRIBUTE = "data-info";
    const HIDDEN_CLASS = "hidden";
    const PORTFOLIO_ITEMS_QUANTITY = 12;
    const LOADER_ANIMATION_DELAY = 2000;
    const MAX_BUTTON_PUSH_COUNTER = 2;
    const LOAD_MORE_BUTTON_SELECTOR = ".works .button-container>a.button";
    const MENU_ACTIVE_SELECTOR = ".works-menu-link.active";
    const LOADER_CONTAINER_SELECTOR = ".works .loader-container";
    const PORTFOLIO_ITEMS_SELECTOR = ".works-portfolio-item";
    const PORTFOLIO_ITEMS_HIDDEN_SELECTOR = PORTFOLIO_ITEMS_SELECTOR + "." + HIDDEN_CLASS;
    const PORTFOLIO_ACTIVE_SELECTOR = PORTFOLIO_ITEMS_SELECTOR + " .portfolio-active";
    let buttonPushCounter = 0;

    /**
     * Function to show portfolio items by attribute value of active menu link, show items and check button display mode on
     * switching menu value.
     * */

    function filterPortfolios() {
        $(".works-menu-link").on("click", () => {
            buttonPushCounter = 0;
            $(PORTFOLIO_ITEMS_SELECTOR).addClass(HIDDEN_CLASS);
            let portfolioItemsHidden = getFilteredByAttributeItems(
                PORTFOLIO_ITEMS_HIDDEN_SELECTOR,
                MENU_ACTIVE_SELECTOR,
                PORTFOLIO_ITEMS_FILTER_ATTRIBUTE);
            removeItemsClass(portfolioItemsHidden, PORTFOLIO_ITEMS_QUANTITY, HIDDEN_CLASS);
            portfolioItemsHidden = getFilteredByAttributeItems(
                PORTFOLIO_ITEMS_HIDDEN_SELECTOR,
                MENU_ACTIVE_SELECTOR,
                PORTFOLIO_ITEMS_FILTER_ATTRIBUTE);
            checkButtonDisplay(portfolioItemsHidden, LOAD_MORE_BUTTON_SELECTOR, buttonPushCounter, MAX_BUTTON_PUSH_COUNTER);
        });
    }

    /**
     * Function to load more portfolio items filtered by attribute value of active menu link, show items and check button
     * display mode on clicking "load more" button. Adds load animation before portfolio items loaded.
     * */

    function loadMorePortfolios() {
        $(LOAD_MORE_BUTTON_SELECTOR).on("click", event => {
            event.preventDefault();
            $(LOAD_MORE_BUTTON_SELECTOR).hide();
            $(LOADER_CONTAINER_SELECTOR).removeClass(HIDDEN_CLASS).delay(LOADER_ANIMATION_DELAY).queue(next => {
                $(LOADER_CONTAINER_SELECTOR).addClass(HIDDEN_CLASS);
                buttonPushCounter++;
                let portfolioItemsHidden = getFilteredByAttributeItems(
                    PORTFOLIO_ITEMS_HIDDEN_SELECTOR,
                    MENU_ACTIVE_SELECTOR,
                    PORTFOLIO_ITEMS_FILTER_ATTRIBUTE);
                removeItemsClass(portfolioItemsHidden, PORTFOLIO_ITEMS_QUANTITY, HIDDEN_CLASS);
                portfolioItemsHidden = getFilteredByAttributeItems(
                    PORTFOLIO_ITEMS_HIDDEN_SELECTOR,
                    MENU_ACTIVE_SELECTOR,
                    PORTFOLIO_ITEMS_FILTER_ATTRIBUTE);
                checkButtonDisplay(portfolioItemsHidden, LOAD_MORE_BUTTON_SELECTOR, buttonPushCounter, MAX_BUTTON_PUSH_COUNTER);
                next();
            });
        });
    }

    /**
     * Function to show block instead of portfolio items on portfolio item hover.
     * */

    function showActivePortfolioInfo() {
        $(PORTFOLIO_ITEMS_SELECTOR).on("mouseenter", function () {
            $(this).append($("<div class='portfolio-active'>" +
                "<div class='portfolio-active-icons'>" +
                "<a href='' class='portfolio-active-share fas fa-share-alt green-color'></a>" +
                "<a href='' class='portfolio-active-search fas fa-search white-color'></a>" +
                "</div>" +
                "<p class='portfolio-active-title green-color'>" + "creative design"+ "</p>" +
                "<p class='portfolio-active-text'>"+$(this).attr(PORTFOLIO_ITEMS_FILTER_ATTRIBUTE)+"</p>" +
                "</div>"));
            $(PORTFOLIO_ACTIVE_SELECTOR).on("mouseleave", () => $(PORTFOLIO_ACTIVE_SELECTOR).remove());
            });
    }

// script to filter collection
    makeMenuLinkActive(".works-menu-link");
    filterPortfolios();
    loadMorePortfolios();
    showActivePortfolioInfo();
});

