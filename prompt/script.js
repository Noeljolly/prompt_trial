document.addEventListener("DOMContentLoaded", function () {
    const exploreButton = document.querySelector(".yellow-btn");

    exploreButton.addEventListener("click", function () {
        // Find the target element (Tile Card page)
        const tileCardPage = document.querySelector(".page-tile-card");

        // Scroll to the Tile Card page with smooth behavior
        tileCardPage.scrollIntoView({ behavior: "smooth" });
    });
});
