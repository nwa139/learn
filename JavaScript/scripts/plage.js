export function main() {
    let homework = prompt("As-tu finis tes devoirs?");
    let noHomework = homework && homework.toLowerCase() === "oui";

    let weather = prompt("Fait-il beau dehors?");
    let isGoodWeather = weather && weather.toLowerCase() === "oui";
    if (noHomework && isGoodWeather) {
        alert("Tu peux aller à la plage");
    } else {
        alert("Reste à la maison");
    }
}