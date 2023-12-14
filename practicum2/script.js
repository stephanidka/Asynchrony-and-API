const divContainer = document.querySelector('.container');
const button = document.getElementById('button');

function generateHtmlCell(post){
    return `
    <div class="post">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    </div>`;
}

function addToCell(html, divContainer){
    if(divContainer){
        divContainer.innerHTML += html;
    } else {
        console.error(`Container is not found.`);
    }
}

function getObj(){
    return fetch ('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        return data;
        });
}

document.querySelector('#button').addEventListener('click', async function () {
    const posts = await getObj(); 

    posts.forEach(post => {
        const postHTML = generateHtmlCell(post);
        addToCell(postHTML, divContainer);
    });
});