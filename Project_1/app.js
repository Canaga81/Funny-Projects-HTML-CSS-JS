const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {

        removePanel();

        panel.classList.add('active');
    });
});

const removePanel = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}