
function openPanelR() {
    document.getElementById("cRigth").style.display = "block";
    document.getElementById("text").style.animationName = "textUp";
    document.getElementById("cRigth").style.animationName = "visibleR";
 }
 function openPanelL(){
    let cLeft = document.getElementById("cLeft").style.display;

    if (cLeft === "none") {
        document.getElementById("img").style.display = "none";
        document.getElementById("cLeft").style.display = "flex";
        document.getElementById("cLeft").style.animationName = "visibleR";

    }else if (cLeft === "flex") {
        document.getElementById("cLeft").style.animationName = "hiddenR";
        document.getElementById("cRigth").style.animationName = "hiddenR";
        document.getElementById("img").style.display = "block";
        setTimeout(function() {
            document.getElementById("cLeft").style.display = "none";
            document.getElementById("cRigth").style.display = "none";
        }, 1000);
    }
    
 }
 function showContentAboutMe(){
    document.getElementById("contentProjects").style.display = "none";
    document.getElementById("contentContacts").style.display = "none";
    document.getElementById("contentAboutMe").style.display = "grid";
 }
 function showContentProjects(){
    document.getElementById("contentAboutMe").style.display = "none";
    document.getElementById("contentContacts").style.display = "none";
    document.getElementById("contentProjects").style.display = "grid";
 }
 function showContentContacts(){
    document.getElementById("contentAboutMe").style.display = "none";
    document.getElementById("contentContacts").style.display = "flex";
    document.getElementById("contentProjects").style.display = "none";

 }
function gowhatsapp(){
    window.location.href="https://wa.me/qr/3X3KO4KZIJXKI1";
}

function loading(){
    alert("entrou na funcao");
    console.log("ok");
    

}

  


