// let inp1 = document.getElementsByClassName('form-control')[0];
// console.log(inp1);
// let inp2 = document.getElementsByClassName('form-control')[1];
// console.log(inp2);
// let btn1 = document.getElementsByClassName('btn')[0];
// console.log(btn1);
// let span1 = document.getElementById('response1');
// console.log(span1);

// btn1.addEventListener('click', function () {
//     span1.textContent = parseFloat(inp1.value) + parseFloat(inp2.value);

// })

////////////////////////////////////


// let inp3 = document.getElementsByClassName('form-control')[2];
// console.log(inp3);
// let operateur = document.getElementsByClassName('btn')[1];
// console.log(operateur);
// let inp4 = document.getElementsByClassName('form-control')[3];
// console.log(inp4);
// let btn2 = document.getElementsByClassName('btn')[2];
// console.log(btn2);
// let span2 = document.getElementById('response2');
// console.log(span2);


// btn2.addEventListener('click', () => {

//     let valeur1 = Number(inp3.value);
//     let valeur2 = Number(inp4.value);
//     let operator = operateur.value;

//     let resultat;
//     switch (operator) {
//         case "+": resultat = valeur1 + valeur2 ;
//             break;
//         case "-": resultat = valeur1 - valeur2;
//             break;
//         case "*": resultat =valeur1 * valeur2;
//             break;
//         case "/": resultat =valeur1 / valeur2;
//             break;
//     }

//     span2.innerHTML = resultat;
//     console.log(span2.textContent);
// })

/////////////////////////////////

///MES VARIABLES

// let inp5 = document.getElementsByClassName('form-control')[4];
// console.log(inp5);
// let operateur = document.getElementById('zebi')
// console.log(operateur);

// let btnPlus = document.getElementsByClassName('m-1 btn')[0];
// console.log(btnPlus);
// let btnMoins = document.getElementsByClassName('m-1 btn')[1];
// console.log(btnMoins);
// let btnFois = document.getElementsByClassName('m-1 btn')[2];
// console.log(btnFois);
// let btnDivi = document.getElementsByClassName('m-1 btn')[3];
// console.log(btnDivi);

// let inp6 = document.getElementsByClassName('form-control')[5];
// console.log(inp6);
// let egale = document.getElementsByClassName('btn')[3];
// console.log(egale);
// let span3 = document.getElementById('response3');
// console.log(span3);

// //FONCTION DE MES OPERATEUR

// btnPlus.addEventListener('click', function () {
//     operateur.setAttribute('class', 'fas fa-plus')
// })

// btnMoins.addEventListener('click', function () {
//     operateur.setAttribute('class', 'fas fa-minus')

// })

// btnFois.addEventListener('click', function () {
//     operateur.setAttribute('class', 'fas fa-times')

// })

// btnDivi.addEventListener('click',() =>{
//     operateur.setAttribute('class', 'fas fa-divide')

// })

// // FONCTION DE CALCUL


// egale.addEventListener('click', () => {
//     let valeur1 = Number(inp5.value) ;
//     let valeur2 =  Number(inp6.value) ;

//     console.log(valeur1,valeur2);    
//     console.log(operateur);

//     let resultat;
//     switch (operateur.className) {
//         case "fas fa-plus":
//             resultat = valeur1 + valeur2;
//             break;
//         case "fas fa-minus":
//             resultat = valeur1 - valeur2;
//             break;
//         case "fas fa-times":
//             resultat = valeur1 * valeur2;
//             break;
//         case "fas fa-divide":
//             resultat = valeur1 / valeur2;
//             break;

//     }
//     span3.innerHTML = resultat;
// })

////////////////////////////////////

//MA LIGNE CALCUL

let inp7 = document.getElementById('inpp');

let operateur = document.getElementById('zebi2');

let inp8 = document.getElementById('inpp2');

let egale = document.getElementById('egale1');

let span4 = document.getElementById("response4");

// MES CHIFFRES

let chiffres = document.getElementById("numbersExo4");

chiffres.addEventListener('click', (e) => {
    let target = e.target
    console.log(target);

    if (target.localName == "button") {
        inp7.value += target.textContent.trim();
    } else {
        inp8.value = target.textContent.trim();
    }
    console.log(inp7);

})

// OPERAT0R ET FONCTION OPERATEUR
let operator = document.getElementById("operatorsExo4");

operator.addEventListener('click', (e) => {
    let target = e.target;
    console.log(target);
    if (target.localName == 'button') {
        operateur.classList = target.children[0].className;
    }

    console.log(operateur);
})

// CALCUL



egale.addEventListener("click", () => {
    // let operatorSpan = document.querySelector('#exo-4 .box-body span i');
    // let operator = operatorSpan;
    // console.log(operator)
    let valeur1 = Number(inp7.value)
    let valeur2 = Number(inp8.value)

    let result;
    switch (operateur.className) {
        case "fas fa-plus":
            result = valeur1 + valeur2;
            break;
        case "fas fa-minus":
            result = valeur2 - valeur2;
            break;
        case "fas fa-times":
            result = valeur1 * valeur2;
            break;
        case "fas fa-divide":
            result = valeur1 / valeur2;
            break;
    }
    console.log(result);
    document.getElementById('response4').innerText = result;
})