const postList = document.querySelector('.post-list');

const PostUI = (posts) => {

    let result = '';

    posts.forEach((post) => {

        result += `
        <li class="post-item">
                <div class="post-body">
                    <span class="post-id">Post Id: <b>${post.id}</b></span>
                    <strong class="post-title">${post.title}</strong>
                    <p class="post-content">${post.body}</p>
                </div>

                <button class="post-button">Read More</button>
            </li>
        `;

        postList.innerHTML = result;

    });

}

const getData  = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    PostUI(data);

}

window.addEventListener("DOMContentLoaded", getData);