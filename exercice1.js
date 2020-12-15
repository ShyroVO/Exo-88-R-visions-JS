let tableau = [];
let afficheTab = document.getElementById('divAfficheTableau');

document.getElementById('valeurRandom').innerHTML = "entrez au moins 10 valeurs";

function getRandom(){
    return Math.floor(Math.random() * tableau.length);
}

document.getElementById('valider').addEventListener('click', function (){
    let textUtilisateur = document.getElementById('textUtilisateur').value;
    tableau.push(textUtilisateur);

    console.log(tableau.length);

    if (tableau.length === 10) {
        valeurHasard = getRandom();

        document.getElementById('valeurRandom').innerHTML = "Valeur au hasard: " + tableau[valeurHasard];
        document.getElementById('valeur5').innerHTML = "5eme valeur: " + tableau[4];
    }
})

document.getElementById('boutonAfficherHasard').addEventListener('click', function (){
    valeurHasard2 = getRandom();

    document.getElementById('afficherHasard').innerHTML = tableau[valeurHasard2];
})

document.getElementById('afficherTableau').addEventListener('click', function (){

    afficheTab.innerHTML = "";

    for (let i = 0 ; i < tableau.length ; i++) {
        afficheTab.innerHTML += i + " - " + tableau[i] + "<br>";
    }

})

// Reset affichage Tableau:
function affichageTableau (){
    afficheTab.innerHTML = "";

    for (let i = 0 ; i < tableau.length ; i++) {
        afficheTab.innerHTML += i + " - " + tableau[i] + "<br>";
    }
}

// Sup dernier:
document.getElementById('supLast').addEventListener('click', function (){
    tableau.splice(-1 , tableau.length);
    affichageTableau();

})

// Sup All:
document.getElementById('supAll').addEventListener('click', function (){
    tableau.splice(0, tableau.length);
    affichageTableau();

})