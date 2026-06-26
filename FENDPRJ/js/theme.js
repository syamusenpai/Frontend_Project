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


    // ==========================
        // Kids Mode
        // ==========================

        const kidsModeBtn =
        document.getElementById("kidsModeBtn");

        if(kidsModeBtn){

            if(localStorage.getItem("kidsMode") === "true"){

                document.body.classList.add("kids-mode");

                kidsModeBtn.checked = true;

                document.getElementById("brandTitle").innerHTML =
                    "🍎 Smart Grocery Kids";

            }

            kidsModeBtn.addEventListener("change", function(){

                document.body.classList.toggle("kids-mode");

                localStorage.setItem(
                    "kidsMode",
                    this.checked
                );

                const brand = document.getElementById("brandTitle");

                if(this.checked){

                    brand.innerHTML = "🍎 Smart Grocery Kids";

                }
                else{

                    brand.innerHTML = `
                        <i class="bi bi-basket2-fill"></i>
                        Smart Grocery
                    `;

                }

            });

        }


}

        