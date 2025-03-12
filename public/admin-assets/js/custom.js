$(document).ready(function () {
    "use strict"; // Start of use strict
    let allShowHidePassword = document.querySelectorAll(".password-showHide");

    allShowHidePassword.forEach((item) => {
        let inputField = item.querySelector(
            'input[type="password"], input[type="text"]'
        );
        let iconBox = item.querySelector(".password-toggle-icon");
        iconBox.addEventListener("click", () => {
            if (inputField.type === "password") {
                inputField.type = "text";
                // push new icon tag
                iconBox.innerHTML = '<i class="fas fa-eye"></i>';
            } else {
                inputField.type = "password";
                iconBox.innerHTML = '<i class="fas fa-eye-slash"></i>';
            }
        });
    });
});
