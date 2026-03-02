//Types de base

let prenom: string = "Jean";
let age: number = 30;
let isStudent: boolean = true;
let city: string = "Paris";
let salary: number = 2500.50;
let country: string = "France";
let hasLicense: boolean = false;
let email: string = "jean@example.com";
let yearsExperience: number = 5;
let isEmployed: boolean = true;

//Types unions
let id: string | number = "12345"; // Peut être une chaîne de caractères ou un nombre
let score: number | string = 85; // Peut être un nombre ou une chaîne de caractères
let status: string | boolean = "active"; // Peut être une chaîne de caractères ou un booléen
let level: string | number = "beginner"; // Peut être une chaîne de caractères ou un nombre
let result: string | boolean = "pass"; // Peut être une chaîne de caractères ou un booléen

//Types listes
let fruits: string[] = ["apple", "banana", "orange"];
let numbers: number[] = [1, 2, 3, 4, 5];
let namesAndNumber: (string | number)[] = ["Alice", 25, "Charlie"];
let mixedList: (string | number | boolean)[] = ["text", 42, true, "another text"];
let emptyList: any[] = [];

//Types objets
let person: { name: string; age: number; isStudent: boolean } = {
    name: "Alice",
    age: 28,
    isStudent: false
};

let car: { make: string; model: string; year: number; doors?: number } = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

//Types fonctions
function greet(name: string): string {
    return `Hello, ${name}!`;
}

function add(a: number, b: number): number {
    return a + b;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}