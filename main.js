// button creation

const addButton = document.querySelector('#logInBtn');
const userList = document.querySelector('#userList');
const logInPseudo = document.querySelector('#logInPseudo');
// const logInEmail = document.querySelector('#logInEmail');

const li = document.createElement('li');

li.appendChild(document.createTextNode(`${logInPseudo.value}`));

addButton.addEventListener('click',(event) =>{    
    event.preventDefault();
    // const li = document.createElement('li');
    li.className = "user";    
    li.appendChild(document.createTextNode(`${logInPseudo.value}`));   
    if(userList.appendChild(li)){    
        logInPseudo.value = '';
        // logInEmail.value = '';
    }
});

// button suppression

const supprButton = document.querySelector('#supprBtn');


supprButton.addEventListener('click',(event) =>{
    console.log('supprimer');
    userList.remove(li)
});

// rajout pour test github commit