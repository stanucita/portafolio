document.addEventListener("DOMContentLoaded", function() {
    const aboutButton = document.getElementById("aboutButton");
    const experienceButton = document.getElementById("experienceButton");
    const contactButton = document.getElementById("contactButton");
    const backButton = document.getElementById("backButton");
    const sections = document.querySelectorAll("section");
    const backButtonSection = document.querySelector("#backButtonSection");

    aboutButton.addEventListener("click", function() {
        hideAllSections();
        document.getElementById("about").classList.remove("hidden");
        backButtonSection.classList.remove("hidden");
    });

    experienceButton.addEventListener("click", function() {
        hideAllSections();
        document.getElementById("experience").classList.remove("hidden");
        backButtonSection.classList.remove("hidden");
    });

    contactButton.addEventListener("click", function() {
        hideAllSections();
        document.getElementById("contact").classList.remove("hidden");
        backButtonSection.classList.remove("hidden");
    });

    backButton.addEventListener("click", function() {
        hideAllSections();
        backButtonSection.classList.add("hidden");
    });

    function hideAllSections() {
        sections.forEach(function(section) {
            section.classList.add("hidden");
        });
    }
});
