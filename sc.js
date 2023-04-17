document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.style.transform = "translateY(0)";
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});
