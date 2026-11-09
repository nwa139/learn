export function main() {
    let number = +prompt("Entrer une cote à évaluer:");
    if (number >= 18) {
        alert(`${number} est excellent (E)`);
    } else if (number >= 16) {
        alert(`${number} est très bien (TB)`);
    } else if (number >= 14) {
        alert(`${number} est bien (B)`);
    } else if (number >= 12) {
        alert(`${number} est suffisant (S)`);
    } else if (number >= 10) {
        alert(`${number} est faible (F)`);
    } else {
        alert(`${number} est insuffisant (I)`);
    }
}