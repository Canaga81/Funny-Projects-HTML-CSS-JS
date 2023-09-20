const container = document.querySelector( '.container' );
const unsplashPhoto = 'https://source.unsplash.com/random/';
const rows = 9;

for ( let i = 0; i < rows * 3; i++ ) {

    const img = document.createElement( 'img' );

    img.src = `${ unsplashPhoto }${ getRandomSize() }`;
    
    container.appendChild( img );

}

function getRandomNumber () {

    return Math.floor( Math.random() * 10 ) + 300;

}

function getRandomSize () {

    return `${ getRandomNumber() }px x ${ getRandomNumber() }px`;

}