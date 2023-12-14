let inputHeader = document.getElementById('header');
let inputBody = document.getElementById('body');
let button = document.getElementById('add_post');
let container = document.querySelector('.container')

function post(){
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: inputHeader.value,
    body: inputBody.value,
    }),
    headers: {
    "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then((data) =>{
    const inputHeaderValue = inputHeader.value;
    const inputBodyValue = inputBody.value;
    const blogText = document.createElement('div')
    const blogTextHeader = document.createElement('div')
    blogTextHeader.className = 'blogTextHeader'
    const blogTextBody = document.createElement('div')
    blogTextHeader.textContent = inputHeaderValue;
    blogTextBody.textContent = inputBodyValue;
    container.appendChild(blogText)
    blogText.appendChild(blogTextHeader)
    blogText.appendChild(blogTextBody)
    inputHeader.value = '';
    inputBody.value = '';
})
}

button.addEventListener('click', post)