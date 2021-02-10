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

    if(button.style.color.contains('green')){ // ! ne fonctionne pas

        button.parentNode.style.color = 'white'; // ! ne fonctionne pas

    }

});

// FIN TODO LIST



