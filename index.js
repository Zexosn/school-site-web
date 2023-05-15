const letsgoDiv = document.getElementById("letsgo")

// -------------------------------------------------------------- //

const personName = prompt("Quel est le nom de la personne ?")

const text = `

Venez découvrir la vie de <em>${personName}</em>

`

// ------------------------------------------------------------- //

letsgoDiv.innerHTML = text