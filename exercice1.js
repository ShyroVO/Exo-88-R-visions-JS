let tableau = [];

document.getElementById('valeurRandom').innerHTML = "entrez au moins 10 valeurs";

function getRandom(){
    return Math.floor(Math.random() * tableau.length);
}

document.getElementById('valider').addEventListener('click', function (){
    let textUtilisateur = document.getElementById('textUtilisateur').value;
    tableau.push(textUtilisateur);

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
    let tableauJoin = tableau.join(' - ');
    let numerosIndex = 0;

    document.getElementById('divAfficheTableau').innerHTML = numerosIndex + tableauJoin;

})