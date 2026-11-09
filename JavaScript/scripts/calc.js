function calcAdd() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber + secondNumber;
    alert(`Le résultat de l'addition des valeurs ${firstNumber} et ${secondNumber} est ${result}.`);
}

function calcSub() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber - secondNumber;
    alert(`Le résultat de la soustraction des valeurs ${firstNumber} et ${secondNumber} est ${result}.`);
}

function calcMul() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber * secondNumber;
    alert(`Le résultat de la multiplication de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
}

function calcDiv() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber / secondNumber;
    alert(`Le résultat de la division de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
}

function calcMod() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber % secondNumber;
    alert(`Le reste de la division de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
}

export function main() {
    let firstNumber = +prompt("Entrez votre première valeur:") || 0;
    let secondNumber = +prompt("Entrez votre deuxième valeur:") || 0;
    let result = firstNumber + secondNumber;
    alert(`Le résultat de l'addition des valeurs ${firstNumber} et ${secondNumber} est ${result}.`);
    result = firstNumber - secondNumber;
    alert(`Le résultat de la soustraction des valeurs ${firstNumber} et ${secondNumber} est ${result}.`);
    result = firstNumber * secondNumber;
    alert(`Le résultat de la multiplication de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
    result = firstNumber % secondNumber;
    alert(`Le reste de la division de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
    result = firstNumber / secondNumber;
    alert(`Le résultat de la division de la valeur ${firstNumber} par ${secondNumber} est ${result}.`);
}