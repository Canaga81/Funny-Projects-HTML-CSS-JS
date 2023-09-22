const newToDoInput = document.getElementById( 'newToDo' );
const addTodoBtn = document.getElementById( 'addTodo' );
const clearAllBtn = document.getElementById( 'clearAllBtn' );
const todoContent = document.querySelector( '.todo-content' );

clearAllBtn.onclick = () => {
    todoContent.innerHTML = '';
}

addTodoBtn.onclick = () => {

    const value = newToDoInput.value.trim();

    if ( value ) {

        const todo = createElement( 'div', '', 'todo' );

        const h4 = createElement( 'h4', value );

        const removeBtn = createElement( 'button', '❌' );
        removeBtn.onclick = () => {

            todo.remove();

        }

        const editBtn = createElement( 'button', '🖊' );
        editBtn.onclick = () => {

            const newBasliq = prompt( 'Yeni bir basliq elave edin: ', h4.textContent );
            h4.textContent = newBasliq;

        }

        todo.append( h4, removeBtn, editBtn );
        todoContent.appendChild( todo );
        newToDoInput.value = '';

    }

};

function createElement ( tagName, textContent, className = '' ) {

    const newElem = document.createElement( tagName );
    newElem.textContent = textContent;
    newElem.className = className;
    return newElem;

}