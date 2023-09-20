const counters = document.querySelectorAll( '.counter' );

counters.forEach( ( counter ) => {

    counter.innerText = 0;

    const updateCounter = () => {

        const target = Number( counter.getAttribute( 'data-target' ) );

        // console.log(target);

        const pilus = +counter.innerText;

        const increament = target / 300;

        if ( pilus < target ) {

            counter.innerText = `${ Math.ceil( pilus + increament ) }`;
            setTimeout( updateCounter, 1 );

        }
        else {

            counter.innerText = target;

        }

    };

    updateCounter();

} );