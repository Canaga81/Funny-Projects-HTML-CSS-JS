const btn = document.querySelector( 'button' );
const rootElm = document.getElementById( 'root' );

let mode = localStorage.getItem( "mode" );

if ( !mode ) {
    localStorage.setItem( "mode", "light" );
}

if ( mode === "light" ) {
    rootElm.classList.remove( 'darkMode' );
} else {
    rootElm.classList.add( 'darkMode' );
}

btn.addEventListener( "click", ( e ) => {

    e.preventDefault();

    if ( mode === "light" ) {
        mode = "dark";
        localStorage.setItem( "mode", mode );
        rootElm.classList.add( 'darkMode' );
    } else {
        mode = "light";
        localStorage.setItem( "mode", mode );
        rootElm.classList.remove( 'darkMode' );
    }
    
} );