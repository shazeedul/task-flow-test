document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number" && document.activeElement.classList.contains('arrow-hidden')) {
        document.activeElement.blur();
    }
});

document.addEventListener("keydown", function (e) {
    if (document.activeElement.type === "number" && document.activeElement.classList.contains('arrow-hidden')) {
        console.log(this.activeElement.type);
        if (e.which === 38 || e.which === 40) {
            e.preventDefault();
        }
    }
});
