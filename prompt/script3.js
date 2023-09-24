function scrollToMoreBenefits() {
    const targetSection = document.getElementById("moreBenefits");

    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}
