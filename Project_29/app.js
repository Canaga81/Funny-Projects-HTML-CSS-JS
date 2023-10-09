let userList = [];
let getUserList;

let nameListDom = document.getElementById( 'nameList' );

function Read () {

    nameListDom.innerHTML = "";

    getUserList = JSON.parse( localStorage.getItem( "userList" ) );

    if ( getUserList != null ) {

        if ( getUserList.length === 0 ) {
            nameListDom.innerHTML = "Siyahida hec kesin adi yoxdur ! (Ad Elave Edin !)";
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
    let inputTextValue = document.getElementById( 'name' ).value;

    if ( inputTextValue.trim() === "" ) {
        alert( "Bura Bos Biraxila Bilmez !" );
    }
    else {

        if ( storage === null ) {
            userList.push( inputTextValue );
            localStorage.setItem( "userList", JSON.stringify( userList ) );
        }
        else {
            userList = JSON.parse( localStorage.getItem( "userList" ) );
            userList.push( inputTextValue );
            localStorage.setItem( "userList", JSON.stringify( userList ) );
        }

    }

}

function Delete ( item ) {

    let deleteUsers = JSON.parse( localStorage.getItem( "userList" ) );
    deleteUsers.splice( item, 1 );
    localStorage.setItem( "userList", JSON.stringify( deleteUsers ) );
    Read();

}

function Edit ( item ) {

    let editUsers = JSON.parse( localStorage.getItem( "userList" ) );

    nameListDom.innerHTML = "";

    for ( let i = 0; i < editUsers.length; i++ ) {

        if ( i === item ) {
            nameListDom.innerHTML += `
                <div class="user-item">

                    <div>

                        <p>
                            <i class="fas fa-user"></i>
                            <span>User :</span> ${ editUsers[i] }
                        </p>

                        <input autocomplete="off" type="text" placeholder="${ editUsers[i] }" id="newName">

                    </div>

                    <div class="buttons">

                        <button class="success" onclick="Update(${ i })">
                            <i class="fas fa-edit"></i>
                            Update
                        </button>

                        <button class="warning" onclick="Read()">
                            <i class="fas fa-trash"></i>
                            Cancel
                        </button>

                    </div>

                </div>
            `;
        }
        else {
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

function Update ( item ) {

    let updateUsers = JSON.parse( localStorage.getItem( "userList" ) );
    updateUsers[item] = document.getElementById( 'newName' ).value;

    if ( updateUsers[item] === "" ) {
        alert( "Bura bos biraxila bilmez !" );
    }
    else {
        localStorage.setItem( "userList", JSON.stringify( updateUsers ) );
        Read();
    }

}

const formEl = document.getElementById( 'form' );

formEl.addEventListener( 'submit', ( e ) => {

    e.preventDefault();
    Create();
    Read();
    formEl.reset();

} );

document.addEventListener( "DOMContentLoaded", () => {
    Read();
} );