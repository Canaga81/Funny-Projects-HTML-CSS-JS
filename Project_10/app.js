//! Tutorial

//! Fetch

//? Yol-1

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

//? Yol-2

// const response = fetch('https://jsonplaceholder.typicode.com/users');

// response.then((response) => response.json()).
// then((data) => console.log(data)).
// catch((error) => console.log(error));


//! Async & Await

//? Function(kohne)

// async function getData() {

//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log(data);

// }

//? Arror Function(yeni)

// const getData = async () => {

//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();

//     console.log(data);

// }

// getData();

//? Error olub-olmamasi Yoxlanmasi 

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();

//         console.log(data);
//     }
//     catch {
//         console.log(error);
//     }
// }

// getData()


//! Funny Project

const jokeEl = document.getElementById('joke');
const btn = document.getElementById('btn');

btn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {

    const config = {

        headers: {

            Accept: 'application/json',
            
        },

    }

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke;

}