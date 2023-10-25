function skillsMember() {
    var x = document.getElementById("skillsMember");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.transition = "all 0.5s ease";
    } else {
        x.style.display = "none";
    }

}