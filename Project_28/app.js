const todosEl = document.getElementById( 'todos' );
const form = document.getElementById( 'form' );
const textInput = document.getElementById('textInput')
const url = "https://652155cda4199548356d1267.mockapi.io/api/v1/todos"

axios.get(url)