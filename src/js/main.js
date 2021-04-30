/*exo1*/
let phrase = "Bonjour tout le monde";
/*exo2*/

console.log(phrase.length);
/*exo3*/

console.log(phrase.trimEnd());
/*exo4*/

console.log(phrase.length);
/*exo5*/

console.log(phrase.charAt(50));
/*exo6*/

console.log(phrase.substr(7));
/*exo7*/

console.log(phrase.substr(0));
/*exo8*/

console.log(phrase.substr(0,8));

/*exo9*/

let phrase2 = "c'est le number one";
console.log(phrase2.replace("number", "string"));

/*exo10*/

var min=1; 
var max=10;  
var random = Math.floor(Math.random() * (max - min)) + min; 
console.log(random);