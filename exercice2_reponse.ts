//Interfaces
interface Utilisateur {
    id: number;
    nom: string;
    email: string;
    estActif: boolean;
}

interface Produit {
    id: string;
    nom: string;
    prix: number;
    categorie: string;
    enStock?: boolean; // Propriété optionnelle
}

const utilisateur1: Utilisateur = {
    id: 1,
    nom: "Marie",
    email: "marie@example.com",
    estActif: true
};

const produit1: Produit = {
    id: "P001",
    nom: "Ordinateur portable",
    prix: 999.99,
    categorie: "Électronique"
};

//Extension d'interface
interface Animal {
    nom: string;
    age: number;
}

interface Chien extends Animal {
    race: string;
}

interface Chat extends Animal {
    vies: number;
}

const monChien: Chien = {
    nom: "Rex",
    age: 3,
    race: "Golden Retriever",
};

const monChat: Chat = {
    nom: "Whiskers",
    age: 2,
    vies: 9,
};

//Types littéraux
const direction: "nord" | "sud" | "est" | "ouest" = "nord";
const taille: "petit" | "moyen" | "grand" = "moyen";
const theme: "clair" | "sombre" = "sombre";
const methodeHttp: "GET" | "POST" | "PUT" | "DELETE" = "GET";

// Types littéraux numériques
const resultatDe: 1 | 2 | 3 | 4 | 5 | 6 = 4;
const note: 1 | 2 | 3 | 4 | 5 = 5;

//Interfaces avec fonctions
interface Etudiant {
    nom: string;
    age: number;
    admis: boolean;
}

const etudiant1: Etudiant = {
    nom: "Thomas",
    age: 21,
    admis: true
};

function inscrireEtudiant(etudiant: Etudiant): string {
    if (etudiant.admis) {
        return `L'étudiant ${etudiant.nom} est inscrit avec succès.`;
    } else {
        return `L'étudiant ${etudiant.nom} n'est pas admissible à l'inscription.`;
    }
}
