
function showProjectDesc() {
    let projects = document.getElementById("projects");
    let projectImg = document.getElementById("projectImg");
    let selectedValue = projects.value;
    if (selectedValue === "IMC") {
      projectImg.style.backgroundImage = "url(src/images/projects/imc.png)";
      document.getElementById("projectDescription").innerText = `
      Uma calculadora de IMC é uma ferramenta que permite ao usuário calcular 
      o seu índice de massa corporal com base no peso e altura. O IMC pode ser 
      usado para avaliar se uma pessoa tem peso saudável ou está acima ou abaixo 
      do peso ideal. A calculadora exibe o resultado do cálculo, que pode ser 
      interpretado para ajudar a controlar o peso corporal e cuidar da saúde. 
      `;
    }else if (selectedValue === "devweb"){
      projectImg.style.backgroundImage = "url(src/images/projects/devweb.png)";
      document.getElementById("projectDescription").innerText = `
      Este site é um lugar onde você pode encontrar informações básicas sobre 
      desenvolvimento web com as linguagens HTML, CSS e JavaScript. Aqui, você 
      pode aprender passo a passo como essas linguagens funcionam e como elas 
      podem ser aplicadas na criação de páginas da web.
      `;
    }else if(selectedValue === "jogodavelha"){
        projectImg.style.backgroundImage = "url(src/images/projects/jogodavelha.png)";
        document.getElementById("projectDescription").innerText = `Este jogo foi desenvolvido 
        com linguagens Java e kotlin para android`;
  }else if (selectedValue === "..."){
    projectImg.style.backgroundImage = "url(src/images/projects/embreve.png)";
    document.getElementById("projectDescription").innerText = "Mais projetos em breve";

  }else{
    
}
  };

function openProject() {
    const projects = document.getElementById("projects");
    const selectedProject = projects.options[projects.selectedIndex];
    const selectedValue = selectedProject.value;

    if (selectedValue === "IMC") {
        const loading = `
        <div class="container">
        <div class="loading"></div>
        </div>
    `;
        document.getElementById("cRigth").innerHTML = loading;
        setTimeout(function () {
            window.location.href = "projects/IMC/index.html";
        }, 1000);

    } else if (selectedValue === "devweb") {
        const loading = `
        <div class="container">
        <div class="loading"></div>
        </div>
    `;
        document.getElementById("cRigth").innerHTML = loading;
        setTimeout(function () {
            window.location.href = "projects/devweb/index.html";
        }, 1000);
    } else if (selectedValue === "...") {
        alert("Em breve, mais projetos...");

    }else if(selectedValue === "jogodavelha"){
        const loading = `
        <div class="container">
        <div class="loading"></div>
        </div>
    `;
        document.getElementById("cRigth").innerHTML = loading;
        setTimeout(function () {
            window.location.href = "https://play.google.com/store/apps/details?id=com.mendesgames.jogodavelha";
        }, 1000);

    } else {
        alert("Selecione um projeto!");
    }

}