function calculateImc(){
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let imc = weight/(height*height).toFixed(2);
    
   // window.alert(imc);
    
       if(imc <= 18.5) {
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/under.png";
        document.getElementById("description").innerHTML = `
        Seu IMC está abaixo do peso ideal, o que pode indicar uma falta de 
        nutrientes importantes em sua dieta. É importante que você converse 
        com um profissional de saúde para avaliar sua alimentação e receber 
        orientações adequadas para alcançar um peso saudável.
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;

       }else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/normal.png";
        document.getElementById("description").innerHTML = `
        Parabéns! Seu IMC está dentro da faixa considerada saudável, o que 
        significa que você está cuidando bem da sua saúde.
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;

       }else if(imc >= 25 && imc <= 29.9){
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/over.png";
        document.getElementById("description").innerHTML = `
        Seu IMC indica que você está com sobrepeso, o que pode aumentar o risco 
        de desenvolver doenças crônicas. É importante buscar ajuda de um 
        profissional de saúde para avaliar sua alimentação e atividade física, 
        e receber orientações para reduzir seu peso de forma saudável.
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;
       }else if(imc >= 30 && imc <= 34.9){
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/obesity1.png";
        document.getElementById("description").innerHTML = `
        Seu IMC indica que você está com obesidade grau 1, o que pode aumentar 
        significativamente o risco de doenças crônicas como diabetes, doenças 
        cardiovasculares e hipertensão. Recomendo que você consulte um 
        profissional de saúde para avaliar sua alimentação e estilo de vida, 
        e receber orientações para reduzir seu peso de forma saudável e minimizar esses riscos
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;
       }else if(imc >= 35 && imc <= 39.9){
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/obesity2.png";
        document.getElementById("description").innerHTML = `
        Seu IMC indica que você está com obesidade grau 2, o que aumenta 
        consideravelmente o risco de doenças crônicas como diabetes tipo 2, 
        doenças cardiovasculares e problemas respiratórios. É fundamental 
        que você busque ajuda de um profissional de saúde para avaliar sua 
        alimentação, atividade física e outras possíveis causas da obesidade, 
        e receber orientações específicas para reduzir seu peso e melhorar sua saúde geral
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;
       }else if(imc >= 40){
        document.getElementById("result").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("img").src = "src/images/obesity3.png";
        document.getElementById("description").innerHTML = `
        Seu IMC indica que você está com obesidade grau 3, também conhecida 
        como obesidade mórbida, o que aumenta muito o risco de problemas de 
        saúde graves como doenças cardiovasculares, diabetes tipo 2, apneia 
        do sono e até mesmo alguns tipos de câncer. É extremamente importante 
        que você busque ajuda de um profissional de saúde imediatamente para 
        avaliar sua saúde e receber orientações específicas para reduzir seu 
        peso de forma saudável e melhorar sua qualidade de vida
        </br> <span class="imc">Seu IMC:`+imc.toFixed(1)+`</span>`;
       }
    
}
