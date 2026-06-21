function initTheme() {

    const toggle = document.getElementById("colorBlindBtn");

    if (!toggle) return;

    // Load saved theme
    if (localStorage.getItem("colorBlind") === "true") {
        document.body.classList.add("colorblind");
        toggle.checked = true;
    }

    toggle.addEventListener("change", function () {

        if (this.checked) {
            document.body.classList.add("colorblind");
            localStorage.setItem("colorBlind", "true");
        } else {
            document.body.classList.remove("colorblind");
            localStorage.setItem("colorBlind", "false");
        }

    });

}