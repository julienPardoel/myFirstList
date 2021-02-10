//TODO LIST :

// Constantes :

const addButton = document.querySelector('#logInBtn');
const userList = document.querySelector('#userList');
const logInPseudo = document.querySelector('#logInPseudo');
const li = document.createElement('li');

// ...

li.appendChild(document.createTextNode(`${logInPseudo.value}`)); // ... ?

addButton.addEventListener('click',(event) =>{ // Au click sur le bouton créer ...

    const li = document.createElement('li'); // ... crée un element li

    li.className = "user"; // ... donne une class à li

    li.appendChild(document.createTextNode(`${logInPseudo.value}`)); // ... ?

    if(logInPseudo.value !== ""){ // ... si mon input est non vide ...

        logInPseudo.value = ''; // ... ça vide mon input

        const checkBtn = document.createElement('button'); // ... crée un bouton check
        const supprBtn = document.createElement('button'); // ... crée un bouton suppr

        checkBtn.innerHTML = '<i class="far fa-check-circle"></i>'; // ... donne du html à check
        supprBtn.innerHTML = '<i class="far fa-trash-alt"></i>'; // ... donne du html à supor

        checkBtn.className = "checkBtn"; // ... donne une class à l'élement
        supprBtn.className = "supprBtn"; // ... donne une class à l'élement
        
        li.appendChild(checkBtn); // ... ?
        li.appendChild(supprBtn); // ... ?

        userList.appendChild(li); // ... ?

    }

});

userList.addEventListener('click',(event) => { // au click sur un élement de li...

    console.log(event.target.parentNode); // ... afficher dans la console le parent de la target

    const button = event.target.parentNode; // ... création d'une variable contenant le parent de la target 

    if(button.classList.contains('supprBtn')){ // ... si la variable button contient la class supprBtn ...

        button.parentNode.remove(); // ...le parent du button est supprimé

    };

    if(button.classList.contains('checkBtn')){ //... si la variable button contient la class checkBtn

        button.parentNode.style.color = 'green'; // ... la couleur du text du parent devient vert

    }

    // if(button.style.color.contains('green')){ // ! ne fonctionne pas

        // button.parentNode.style.color = 'white'; // ! ne fonctionne pas

    // }

});

// FIN TODO LIST

// rajout test 1.2

// COLOR PICKER

// constantes :

const colorBtn = document.querySelector('#colorBtn');
const colorBg = document.querySelector('#colorBg')
const hexaDecimal = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hexaView = document.querySelector('#hexaView');

colorBtn.addEventListener('click', (e) => { // Au click sur le bouton colorBtn ...

    const hexaRamdom = [] // ...creation variable recuperant les 6 chiffres de la boucle

    for(let i = 0; i<6; i++){ // ...boucle demarant à 0, tourne tant qu'elle est inférieur à 6, rajoute +1 tour à chaque tour

        let hexaCalcul = hexaDecimal[Math.floor(Math.random()*hexaDecimal.length)]; //variable recuperant une valeur au hazard dans l'array

        hexaRamdom.push(hexaCalcul); // la valeur récupérer dans hexaCalcul est poussée dans hexaRandom
    }

    const hexaColor = hexaRamdom.join(''); //creation d'une variable joignant les chiffres entre eux pour former un nombre

    colorBg.style.background = `#${hexaColor}`; // application du code hexadecimal sur la couleur du background
    
    hexaView.innerText = `#${hexaColor}`; // affichage du code hexadecimal sur la page
    
});

// FIN COLOR Picker

// OUR REVIEWS

const userProfil = [
    {
        id: 1,
        name: "TITOUAN",
        job: "Web-Developer",
        picture:
          "https://www.vanityfair.fr/uploads/images/thumbs/201905/fb/vf_main_ted_bundy_5142.jpeg_north_1160x474_.jpg",
        citation:
          "Euh... je sais pas comment dire... mais tu vois ce que je veux dire, non ?",
      },
      {
        id: 2,
        name: "CHEWBACCA",
        job: "Contrebandier",
        picture:
          "https://media.anakinworld.com/uploads/entries/original/chewbacca-8f891de8afc396fe13b822a72f428ee52923fe8e.jpeg",
        citation:
          "Rrwwgawwrrggawwrr",
      },
      {
        id: 3,
        name: "JAR JAR BINKS",
        job: "Politique",
        picture:
          "https://static.wikia.nocookie.net/frstarwars/images/9/9d/Jar_Jar_Binks.jpg/revision/latest?cb=20160325193844",
        citation:
          "Eskiousez-moé.",
      },
      {
        id: 4,
        name: "C3PO",
        job: "Droïde-Protocole",
        picture:
          "https://radiodisneyclub.fr/wp-content/uploads/2019/10/C3PO.jpg",
        citation:
          "Dieu me débranche ! Des machines qui créent des machines !",
      },
]

const rightBtn = document.querySelector('.fa-chevron-circle-right');
const leftBtn = document.querySelector('.fa-chevron-circle-left');
const randomBtn = document.querySelector('.fa-random');
const userPicture = document.querySelector('#userPicture');
const userName = document.querySelector('#userName');
const userJob = document.querySelector('#userJob');
const userComment = document.querySelector('#userComment');
let currentReview = 0;

function viewUser(user){

    const review = userProfil[user];
    
    userPicture.src =  review.picture;
    userName.innerText = review.name;
    userJob.innerText = review.job;
    userComment.innerText = review.citation;
};

window.addEventListener("DOMContentLoaded",()=>{
    viewUser(currentReview);
});

rightBtn.addEventListener('click',()=>{
    currentReview++;
    if(currentReview > userProfil.length - 1){
        currentReview = 0;
    }
    viewUser(currentReview);
});

leftBtn.addEventListener('click',()=>{
    currentReview--;
    if(currentReview < 0){
        currentReview = userProfil.length - 1;
    }
    viewUser(currentReview);
});