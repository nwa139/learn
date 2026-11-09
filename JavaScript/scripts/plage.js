export function main() {
    let noHomework;
    let homework = +prompt("As-tu finis tes devoirs?");
    if (homework.toLowerCase() === "oui") {
        noHomework = true;
    } else {
        noHomework = false;
    }

    let isGoodWeather;
    let weather = +prompt("Fait-il beau dehors?");
    if (weather.toLowerCase() === "oui") {
        isGoodWeather = true;
    } else {
        isGoodWeather = false;
    }
    if (noHomework && isGoodWeather) {
        alert("Tu peux aller à la plage");
    } else {
        alert("Reste à la maison");
    }
}