cardsBeneficio = document.getElementsByClassName("cardBeneficio");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        cardsBeneficio.className += "show"
    } else {
        cardsBeneficio.className += "hide"
    }
};

window.addEventListener("scroll", myScrollFunc);