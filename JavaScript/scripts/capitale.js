export function main() {
    let answer = prompt("Quelle est la capitale de la Chine?");
    if (answer.toLowerCase() === "pekin" || answer.toLowerCase() === "pékin") {
        alert(`Bravo, la capitale de la Chine est bien ${answer}!`);
    } else {
        alert(`La capitale de la Chine n'est pas ${answer}...`);
        ask();
    }
}