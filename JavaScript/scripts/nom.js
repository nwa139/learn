export function main() {
    let nom = prompt("Entrez votre nom:");
    alert(`Bonjour ${nom || ""}!`);
}