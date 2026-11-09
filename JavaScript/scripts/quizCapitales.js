let correct = 0;

export function main() {
    ask("de la Chine", "pekin");
    ask("de la France", "paris");
    ask("de l'Allemagne", "berlin");
    ask("de l'Italie", "rome");
    ask("de l'Espagne", "madrid");
    ask("du Canada", "ottawa");
    ask("du Japon", "tokyo");
    ask("du Brésil", "brasilia");
    ask("de l'Australie", "canberra");
    ask("de la Belgique", "bruxelles");
    let answer = alert(`Vous avez obtenu ${correct}/10!`);
    correct = 0;
}

function ask(country, capital) {

    let answer = prompt(`Quelle est la capitale ${country}?`);

    if (answer.toLowerCase() === capital) {
        alert(`Bravo, la capitale ${country} est bien ${answer}!`);
        correct++;
    } else {
        alert(`Dommage, la capitale ${country} était ${capital}!`);
    }
}