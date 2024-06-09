function openPopup() {
    document.body.classList.add("blurred");
    document.getElementById("term-expanded").classList.add("active");
    document.getElementById("term-popup").style.display = "none";
    document.getElementById("user-input").focus();
    document.execCommand('selectAll', false, null);
    document.getSelection().collapseToEnd();
}

function closePopup() {
    document.getElementById("term-expanded").classList.remove("active");
    document.getElementById("term-popup").style.display = "flex";
    document.body.classList.remove("blurred");
}

document.getElementById("term-popup").addEventListener("click", openPopup);
document.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && event.ctrlKey) {
        openPopup()
    }
});

document.querySelector("#term-expanded .minimize-btn").addEventListener("click", closePopup);