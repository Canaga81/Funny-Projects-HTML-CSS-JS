const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const cebr1 = document.getElementById('cebr1');
const equal = document.getElementById('equal');
const cem = document.getElementById('cem');
const cavab = document.getElementById('cavab');
const cavabla = document.getElementById('cavabla');

let result; // Store the correct answer

function generateProblem(difficulty) {
    let random, random1, cebrIndex, operation;

    if (difficulty === 'easy') {
        random = Math.floor(Math.random() * 10);
        random1 = Math.floor((random + 30) / 2);
        const cebr = ['+', '-', '*'];
        cebrIndex = Math.floor(Math.random() * cebr.length);
        operation = cebr[cebrIndex];
    } else if (difficulty === 'normal') {
        random = Math.floor(Math.random() * 100);
        random1 = Math.floor((random + 30) / 2);
        const cebr = ['+', '-'];
        cebrIndex = Math.floor(Math.random() * cebr.length);
        operation = cebr[cebrIndex];
    } else if (difficulty === 'hard') {
        random = Math.floor(Math.random() * 100);
        random1 = Math.floor((random + 30) / 2);
        const cebr = ['+', '-', '*'];
        cebrIndex = Math.floor(Math.random() * cebr.length);
        operation = cebr[cebrIndex];
    }

    num1.innerHTML = random;
    num2.innerHTML = random1;
    cebr1.innerHTML = operation;

    switch (operation) {
        case '+':
            result = random + random1;
            break;
        case '-':
            result = random - random1;
            break;
        case '*':
            result = random * random1;
            break;
        default:
            break;
    }
}

easy.onclick = () => {
    generateProblem('easy');
    cavab.style.display = 'block';
};

normal.onclick = () => {
    generateProblem('normal');
    cavab.style.display = 'block';
};

hard.onclick = () => {
    generateProblem('hard');
    cavab.style.display = 'block';
};

cavabla.onclick = () => {
    const userAnswer = parseInt(cavab.value);

    if (userAnswer === result) {
        Swal.fire('halal olsun');
    } else {
        Swal.fire('halal olmasin');
    }
};