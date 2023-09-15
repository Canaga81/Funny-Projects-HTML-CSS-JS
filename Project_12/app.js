const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {

    insert.innerHTML = `
    <div class="key">
            <small>${event.key === " " ? "Space": event.key}</small>
        </div>

        <div class="key">
            <small>${event.keyCode}</small>
        </div>

        <div class="key">
            <small>${event.code}</small>
        </div>
    `;

});