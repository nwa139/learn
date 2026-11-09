export function main() {
    let number = +prompt("Entrer un nombre à évaluer:");
    if (!number) {
        alert("0 est un nombre nul");
    } else if (number > 0) {
        alert(`${number} est positif (+)`);
    } else if (number < 0) {
        alert(`${number} est négatif (-)`);
    }
}