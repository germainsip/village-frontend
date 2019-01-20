var btn1 = document.getElementById("btn1");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var adresse = document.getElementById("adresse");
var cp = document.getElementById("cp");
var ville = document.getElementById("ville");
var tel = document.getElementById("telephone");
var mail = document.getElementById("mail");



btn1.addEventListener("click", function () {
    var cbon = true;
//    TODO: améliorer regex pour françois régis
    var regPre =/^\D{2,20}$/;
    if (regPre.test(prenom.value)==false) {
        cbon = false;
        prenom.className = "invalid";
    } else {
        prenom.className = "valid";
      
    }
    var regNom = /^\D{2,20}$/;
    if (regNom.test(nom.value)==false) {
        cbon = false;
        nom.className = "invalid";
    } else {
        nom.className = "valid";

    }
    var regeAdr = /^[0-9]{1,3}[a-z A-Z]{2,30}$/;
    if (regeAdr.test(adresse.value)==false) {
        cbon = false;
        adresse.className = "invalid";
    } else {
        adresse.className = "valid";
    }
    var regeCP = /^[0-9]{5}$/;
    if (regeCP.test(cp.value)==false) {
        cbon = false;
        cp.className = "invalid";
    } else {
        cp.className = "valid";
    }
// TODO: regex ville
    var regeVille = /^\D{2,20}$/;
    if (regeVille.test(cp.value)==false) {
        cbon = false;
        ville.className = "invalid";
    } else {
        ville.className = "valid";
    }
});