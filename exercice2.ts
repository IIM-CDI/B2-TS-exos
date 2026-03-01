//Interfaces
interface Utilisateur {
    id: /*type*/;
    nom: /*type*/;
    email: /*type*/;
    estActif: /*type*/;
}

interface Produit {
    id: /*type*/;
    nom: /*type*/;
    prix: /*type*/;
    categorie: /*type*/;
    enStock?: /*type*/; // Propriété optionnelle
}

const utilisateur1: /*type interface*/ = {
    id: 1,
    nom: "Marie",
    email: "marie@example.com",
    estActif: true
};

const produit1: /*type interface*/ = {
    id: "P001",
    nom: "Ordinateur portable",
    prix: 999.99,
    categorie: "Électronique"
};

//Extension d'interface
interface Animal {
    nom: /*type*/;
    age: /*type*/;
}

interface Chien extends /*interface parente*/ {
    race: /*type*/;
}

interface Chat extends /*interface parente*/ {
    vies: /*type*/;
}

const monChien: /*type interface*/ = {
    nom: "Rex",
    age: 3,
    race: "Golden Retriever",
};

const monChat: /*type interface*/ = {
    nom: "Whiskers",
    age: 2,
    vies: 9,
};

//Types littéraux
let direction: /*type littéral avec 4 directions*/ = "nord";
let taille: /*type littéral avec 3 tailles*/ = "moyen";
let theme: /*type littéral avec 2 thèmes*/ = "sombre";
let methodeHttp: /*type littéral avec 4 méthodes HTTP*/ = "GET";

// Types littéraux numériques
let resultatDe: /*type littéral avec chiffres de 1 à 6*/ = 4;
let note: /*type littéral avec notes de 1 à 5*/ = 5;

//Interfaces avec fonctions

interface Etudiant {
    nom: /*type*/;
    age: /*type*/;
    admis: /*type*/;
}

const etudiant1: /*type interface*/ = {
    nom: "Thomas",
    age: 21,
    admis: true
};

function inscrireEtudiant(etudiant: /*type interface*/): /*type*/ {
    if (etudiant.admis) {
        return `L'étudiant ${etudiant.nom} est inscrit avec succès.`;
    } else {
        return `L'étudiant ${etudiant.nom} n'est pas admissible à l'inscription.`;
    }
}