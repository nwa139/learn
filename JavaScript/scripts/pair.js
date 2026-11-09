export function main() {
    let number = +prompt("Entrez le nombre à tester:");
    let message = "";
    if ((number % 2) === 0) {
        message = `Le nombre ${number} est pair.\n`;
    } else {
        message = `Le nombre ${number} est impair.\n`;
    }
    if ((number % 3) === 0) {
        message = message + `Le nombre ${number} est divisible par trois.\n`;
    } else {
        message = message + `Le nombre ${number} n'est pas divisble par trois.\n`;
    }
    if ((number % 5) === 0) {
        message = message + `Le nombre ${number} est divisible par cinq.\n`;
    } else {
        message = message + `Le nombre ${number} n'est pas divisble par cinq.\n`;
    }
    alert(message);
}