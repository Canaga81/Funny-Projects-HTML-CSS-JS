const todoInput = document.querySelector( '.todo-input' );
const todoButton = document.querySelector( '.todo-button' );
const todoFilter = document.querySelector( '.filter-todo' );
const todoList = document.querySelector( '.todo-list' );

//! Alerts

const alertSucess = document.querySelector( '.alert-sucess' );
const alertWarning = document.querySelector( '.alert-warning' );

//! Events

document.addEventListener( "DOMContentLoaded", () => {
    getItem();
} );
todoButton.addEventListener( 'click', addTodo );
todoList.addEventListener( 'click', deleteCheck );
todoFilter.addEventListener( 'click', filterTodo );

//! Functions

function addTodo ( e ) {

    e.preventDefault();

    const isEmpty = str => !str.trim().length;

    if ( isEmpty( todoInput.value ) ) {

        alertWarning.style.display = 'block';

        setTimeout( () => {
            alertWarning.style.display = 'none';
        }, 1500 );

        todoInput.value = "";

    }
    else {
        alertSucess.style.display = 'block';

        setTimeout( () => {
            alertSucess.style.display = 'none';
        }, 1500 );

        saveLocalTodos( todoInput.value );

        //? Create Todo Div

        const todoDiv = document.createElement( 'div' );
        todoDiv.classList.add( 'todo' );
        todoList.appendChild( todoDiv );

        //? Completed Btn

        const completedBtn = document.createElement( 'button' );
        completedBtn.innerHTML = "<i class='fas fa-plus-circle'></i>";
        completedBtn.classList.add( 'completed-btn' );
        todoDiv.appendChild( completedBtn );

        //? List (li) New Todo

        const newTodo = document.createElement( 'li' );
        newTodo.innerText = todoInput.value;
        newTodo.classList.add( 'todo' );
        todoDiv.appendChild( newTodo );

        //? Trash Btn

        const trashBtn = document.createElement( 'button' );
        trashBtn.innerHTML = "<i class='fas fa-minus-circle'></i>";
        trashBtn.classList.add( "trash-btn" );
        todoDiv.appendChild( trashBtn );

        //? Todo Input Value Empty

        todoInput.value = "";

    }

}

function deleteCheck ( e ) {

    const item = e.target;

    if ( item.classList[0] === "trash-btn" ) {

        const todo = item.parentElement;
        todo.classList.add( 'fall' );

        removeLocalStorage( todo );

        todo.addEventListener( 'click', () => {
            todo.remove();
        } );

    }

    if ( item.classList[0] === "completed-btn" ) {

        const todo = item.parentElement;
        todo.classList.toggle( 'completed' );

    }

}

function filterTodo ( e ) {

    const todos = todoList.childNodes;

    todos.forEach( ( item ) => {

        switch ( e.target.value ) {
            case "all":
                item.style.display = 'flex';
                break;
            case "completed":
                if ( item.classList.contains( 'completed' ) ) {
                    item.style.display = 'flex';
                }
                else {
                    item.style.display = 'none';
                }
                break;
            case "uncompleted":
                if ( !item.classList.contains( 'completed' ) ) {
                    item.style.display = 'flex';
                }
                else {
                    item.style.display = 'none';
                }
                break;
        }

    } );

}

function saveLocalTodos ( todo ) {

    let todos;

    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    }
    else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }

    todos.push( todo );

    localStorage.setItem( "todos", JSON.stringify( todos ) );

}

function getItem ( todo ) {

    let todos;

    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    }
    else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }

    todos.forEach( ( todo ) => {

        //? Create Todo Div

        const todoDiv = document.createElement( 'div' );
        todoDiv.classList.add( 'todo' );
        todoList.appendChild( todoDiv );

        //? Completed Btn

        const completedBtn = document.createElement( 'button' );
        completedBtn.innerHTML = "<i class='fas fa-plus-circle'></i>";
        completedBtn.classList.add( 'completed-btn' );
        todoDiv.appendChild( completedBtn );

        //? List (li) New Todo

        const newTodo = document.createElement( 'li' );
        newTodo.innerText = todo;
        newTodo.classList.add( 'todo' );
        todoDiv.appendChild( newTodo );

        //? Trash Btn

        const trashBtn = document.createElement( 'button' );
        trashBtn.innerHTML = "<i class='fas fa-minus-circle'></i>";
        trashBtn.classList.add( "trash-btn" );
        todoDiv.appendChild( trashBtn );

    } );

}

function removeLocalStorage ( todo ) {

    let todos;

    if ( localStorage.getItem( "todos" ) === null ) {
        todos = [];
    }
    else {
        todos = JSON.parse( localStorage.getItem( "todos" ) );
    }

    const todoIndex = todo.children[1].innerText;
    todos.splice( todos.indexOf( todoIndex ), 1 );
    localStorage.setItem( "todos", JSON.stringify( todos ) );

}