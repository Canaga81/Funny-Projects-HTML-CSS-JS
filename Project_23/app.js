const quizData = [
    {
        question: "Dunyanin En Boyuk Dovleti ?",
        a: "Rusiya",
        b: "Turkiye",
        c: "Cin",
        d: "Fransa",
        e: "Kanada",
        correct: "a",
    },
    {
        question: "Dunyanin En Kicik Dovleti ?",
        a: "Monaco",
        b: "Vatikan",
        c: "Liviya",
        d: "Simali Koreya",
        e: "Finlandiya",
        correct: "b",
    },
    {
        question: "Sefeviler Dovletini Banisi Kimdir ?",
        a: "2'ci Tehmasib",
        b: "Emir Teymur",
        c: "Ibrahim Derbendi",
        d: "2'ci Sah Abbas",
        e: "Sah Ismayil Xetai",
        correct: "e",
    },
    {
        question: "Osmanli Dovleti Ne Zaman Yaranib ?",
        a: "1521",
        b: "1041",
        c: "1499",
        d: "1299",
        e: "1451",
        correct: "d",
    },
    {
        question: "Caldiran Doyusu Ne Zaman Olub ?",
        a: "1518",
        b: "1524",
        c: "1514",
        d: "1551",
        e: "1414",
        correct: "c",
    },
];

const quiz = document.getElementById( 'quiz' );
const answerEls = document.querySelectorAll( '.answer' );
const questionEl = document.getElementById( 'question' );

const a_text = document.getElementById( 'a_text' );
const b_text = document.getElementById( 'b_text' );
const c_text = document.getElementById( 'c_text' );
const d_text = document.getElementById( 'd_text' );
const e_text = document.getElementById( 'e_text' );

const submitBtn = document.getElementById( 'submit' );

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz () {

    const currentQuizData = quizData[currentQuiz];

    deselectedAnswer();

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

}

function deselectedAnswer () {

    answerEls.forEach( ( answerEl ) => answerEl.checked = false );

}

function getSelected () {

    let answer;

    answerEls.forEach( ( answerEl ) => {

        if ( answerEl.checked ) {

            answer = answerEl.id;

        }

    } );

    return answer;

}

submitBtn.addEventListener( 'click', () => {

    const answer = getSelected();

    // console.log( answer );

    if ( answer ) {

        if ( answer === quizData[currentQuiz].correct ) {

            score++;

        }

        currentQuiz++;

        if ( currentQuiz < quizData.length ) {

            loadQuiz();

        }
        else {

            quiz.innerHTML = `
                <h2> Test Tamamlandi, ${ score * 20 } puan aldiniz.😉 </h2>
                <button class = "submit" onClick = "location.reload()">Tekrar Dene 😢</button>
            `;

        }

    }

} );