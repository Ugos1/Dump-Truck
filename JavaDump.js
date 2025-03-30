function nav() {
    navPart = document.getElementById("nav-part");
    if (navPart.style.display == "none"){
        navPart.style.display = "grid";
        navPart.style.transition = "3sec";
    }
    else{
        navPart.style.display = "none";
    }

}