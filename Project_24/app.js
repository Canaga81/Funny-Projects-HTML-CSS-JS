const cardHolderName = document.getElementById( 'cardHolder' );
const cardNumber = document.getElementById( 'cardNumber' );
const expDateMM = document.getElementById( 'expDateMM' );
const expDateYY = document.getElementById( 'expDateYY' );
const cvc = document.getElementById( 'cvc' );
const form = document.getElementById( 'form' );

const cardHolderError = document.getElementById( 'cardHolderError' );
const cardNumberError = document.getElementById( 'cardNumberError' );
const cardDateError = document.getElementById( 'cardDateError' );
const cvcError = document.getElementById( 'cvcError' );

const card_number_box = document.querySelector( '.card-number' );
const card_holder_name = document.querySelector( '.cardHolderName' );
const card_exp_date_box = document.querySelector( '.cardExpDate' );
const cvc_box = document.querySelector( '.cvc' );

form.addEventListener( 'submit', ( e ) => {

    e.preventDefault();

    const cardHolderNameValue = document.getElementById( 'cardHolder' ).value;
    const cardNumberValue = document.getElementById( 'cardNumber' ).value;
    const expDateMMValue = document.getElementById( 'expDateMM' ).value;
    const expDateYYValue = document.getElementById( 'expDateYY' ).value;
    const cvcValue = document.getElementById( 'cvc' ).value;

    if ( !cardHolderNameValue ) {
        cardHolderError.classList.add( 'd-block' );
    }
    else {
        cardHolderError.classList.add( 'd-none' );
    }

    if ( !cardNumberValue ) {
        cardNumberError.classList.add( 'd-block' );
    }
    else {
        cardHolderError.classList.add( 'd-none' );
    }

    if ( !expDateMMValue ) {
        cardDateError.classList.add( 'd-block' );
    }
    else {
        cardHolderError.classList.add( 'd-none' );
    }

    if ( !expDateYYValue ) {
        cardDateError.classList.add( 'd-block' );
    }
    else {
        cardHolderError.classList.add( 'd-none' );
    }

    if ( !cvcValue ) {
        cvcError.classList.add( 'd-block' );
    }
    else {
        cardHolderError.classList.add( 'd-none' );
    }


    if ( cardHolderNameValue && cardNumberValue && expDateMMValue && expDateYYValue && cvcValue ) {

        card_number_box.innerHTML = cardNumberValue;
        card_holder_name.innerHTML = cardHolderNameValue;
        card_exp_date_box.innerHTML = `${ expDateMMValue }/${ expDateYYValue }`;
        cvc_box.innerHTML = cvcValue;

    }

} );

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

cardNumber.addEventListener( 'input', e => {

    let inputValue = e.target.value.replace( /\D/g, '' ); //! Sadece Reqemler Al
    let formattedValue = '';

    for ( let i = 0; i < inputValue.length; i++ ) {

        formattedValue += inputValue[i];

        if ( ( i + 1 ) % 4 === 0 && i !== inputValue.length - 1 ) {

            formattedValue += '-';

        }

    }

    e.target.value = formattedValue;

} );

cardHolderName.addEventListener( 'input', e => {
    let inputValue = e.target.value;
    let lettersOnly = inputValue.replace( /[^a-zA-Z]/g, '' );

    if ( inputValue !== lettersOnly ) {
        e.target.value = lettersOnly; //! Sadece harf karakterlerini geri yazar.
    }
} );

expDateMM.addEventListener( 'input', e => {
    let inputValue = event.target.value;
    let numbersOnly = inputValue.replace( /[^0-9]/g, '' ); // Sadece rakam karakterlerini korur.

    if ( inputValue !== numbersOnly) {
        e.target.value = numbersOnly; // Sadece rakam karakterlerini geri yazar.
    }
} );

expDateYY.addEventListener( 'input', e => {
    let inputValue = event.target.value;
    let numbersOnly = inputValue.replace( /[^0-9]/g, '' ); // Sadece rakam karakterlerini korur.

    if ( inputValue !== numbersOnly) {
        e.target.value = numbersOnly; // Sadece rakam karakterlerini geri yazar.
    }
} );

cvc.addEventListener( 'input', e => {
    let inputValue = event.target.value;
    let numbersOnly = inputValue.replace( /[^0-9]/g, '' ); // Sadece rakam karakterlerini korur.

    if ( inputValue !== numbersOnly) {
        e.target.value = numbersOnly; // Sadece rakam karakterlerini geri yazar.
    }
} );