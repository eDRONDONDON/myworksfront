"use strict";

$(() => {
    $(".modal-trigger").on("click", (event) => {
        event.preventDefault();
        $(".modal-layer.hidden").removeClass("hidden").on("click", (event) => {
            if ($(event.target).attr("class") === "modal-layer" || $(event.target).attr("class") === "modal-form-button modal-field") {
                $(".modal-layer").addClass("hidden");
            }
        });
    });
});
