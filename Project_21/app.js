const content = document.getElementById( 'content' );
const speedEl = document.getElementById( 'speed' );

const text = `Menim Yaratdigim Baku Devs Web Saytim`;
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText () {

    content.innerText = text.slice( 0, idx );
    idx++;

    if ( idx > text.length ) {
        //*** content.innerText => (Dongunu Dayandirir);
        idx = 1; //! => (Dongunu Yaradir)
    }

    setTimeout( writeText, speed );

}

speedEl.addEventListener( 'input', ( e ) => speed = 300 / e.target.value );