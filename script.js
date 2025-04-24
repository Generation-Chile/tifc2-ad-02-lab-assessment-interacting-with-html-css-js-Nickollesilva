document.querySelector("h1").textContent = "Adiós";

document.querySelector("h1").style.color = "orange";

document.getElementById("clickeable").addEventListener("click", function() {
    this.style.color = "brown";
});