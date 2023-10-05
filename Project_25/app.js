const inputText = document.getElementById( 'inputText' );
const addTodo = document.getElementById( 'addTodo' );
const clearTodo = document.getElementById( 'clearTodo' );
const toDoContainer = document.getElementById( 'toDoContainer' );

addTodo.addEventListener( 'click', () => {

    let paragraph = document.createElement( 'p' );
    
    paragraph.classList.add( 'list-style' );
    toDoContainer.appendChild( paragraph );
    paragraph.innerHTML = inputText.value;
    inputText.value = '';

    paragraph.addEventListener( 'click', () => {

        paragraph.style.textDecoration = 'line-through';

    } );

    paragraph.addEventListener( 'dblclick', () => {

        paragraph.remove();

    } );

    clearTodo.addEventListener( 'click', () => {

        paragraph.remove();

    } );

} );