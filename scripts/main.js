let myImage = document.querySelector('#peepos'); // con # seleziona solo ciò ceh identifichi con un id nell'html

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/peepolove.png') {
      myImage.setAttribute('src','images/peepo2.png');
    }
    else {
      myImage.setAttribute('src','images/peepolove.png');
    }
}

let myButton = document.querySelector('#changename');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Benvenuto, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Benvenuto, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

let nome=document.querySelector('#nome');
let cognome=document.querySelector('#cognome');
let eta=document.querySelector('#eta');
nome.onclick = function(){
  
}
