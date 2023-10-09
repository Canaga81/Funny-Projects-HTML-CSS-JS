let userList = [];
let getUserList;

let nameListDom = document.getElementById( 'nameList' );

function Read () {

    nameListDom.innerHTML = "";

    getUserList = JSON.parse( localStorage.getItem( "userList" ) );

    if ( getUserList != null ) {

        if ( getUserList.length === 0 ) {
            nameListDom.innerHTML = "There are any no users";
        }
        else {

            for ( let i = 0; i < getUserList.length; i++ ) {
                nameListDom.innerHTML += `
                    <div class="user-item">

                        <p>
                            <i class="fas fa-user"></i>
                            <span>User :</span> ${ getUserList[i] }
                        </p>

                        <div class="buttons">

                            <button class="primary" onclick="Edit(${ i })">
                                <i class="fas fa-edit"></i>
                                Edit
                            </button>

                            <button class="danger" onclick="Delete(${ i })">
                                <i class="fas fa-trash"></i>
                                Delete
                            </button>

                        </div>
                    
                    </div>
                `;
            }

        }

    }

}

function Create () {

    const storage = JSON.parse( localStorage.getItem( "userList" ) );
    let inputText = document.getElementById( "name" ).value;

    if ( inputText == "" ) {
        alert( "Write a name" );
    }
    else {

        if ( storage === null ) {

            userList.push( inputText );
            localStorage.setItem( "userList", JSON.stringify( userList ) );

        }
        else {

            userList = JSON.parse( localStorage.getItem( "userList" ) );
            userList.push( inputText );
            localStorage.setItem( "userList", JSON.stringify( userList ) );
            
        }

    }

}

const formEl = document.getElementById( 'form' );
formEl.addEventListener( "submit", ( e ) => {
    e.preventDefault();
    Create();
    Read();
    formEl.reset();
} );


// function Edit ( item ) {
//     console.log(item);
// }

document.addEventListener( "DOMContentLoaded", () => {
    Read();
} );