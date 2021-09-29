// console.dir(document)
// console.log(document.title)
// console.log(document.URL)
// console.log(body)
// console.log(document.head)
// document.title = 'title'
// console.log(document.title)
// console.log(document.all[8])
// document.all[8].textContent = 'Чтото'
// let navbar = document.getElementById('navbar')


// let mainStyle = document.getElementById('main')
// mainStyle.style.backgroundColor = 'red'
// 
// let items = document.getElementsByClassName("list-group-item")
// console.log(items)
// let li = document.getElementById[1]
// li.style.backgroundColor = 'blue'
// li.innerHTML = 'NEW CONTENT'
// for (let el in items) {
//     items[el].textContent = el
//     items[el].style.color = 'red';
//     items[el].style.backgroundColor = 'yellow'
// }

let newDiv = document.createElement('div')
// console.log(newDiv)
newDiv.className ='container'
// console.log(newDiv)

let text = document.createTextNode('hello world!')
newDiv.append(text)
console.log(newDiv)

let itemsContainer = document.querySelector('#items')
let firstItem = document.getElementsByTagName('li')[0]

itemsContainer.insertBefore(newDiv, firstItem)

let button = document.querySelector('#button')
button.addEventListener('click', buttonClick)
let navbar = document.querySelector('#navbar span')
function buttonClick() {
    navbar.textContent = 'Did you push the button?'
}

let output = document.querySelector('#output')
let box = document.querySelector('#box')

box.addEventListener('mousemove', runEvent)

function runEvent(event) {
    box.style.backgroundColor = 'rgb(' + event.offsetX + ',' + event.offsetY + ', 0)'
}

let form = document.querySelector('form')
let items = document.querySelector('#items')
form.addEventListener('submit', addItem)

function addItem(event) {
    event.preventDefault();
    let input = document.querySelector('input[type="text"]').value;

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    li.className = 'list-group-item';

    items.appendChild(li)
}
items.addEventListener('click', deleteItem)
function deleteItem(event) {
    let li = event.target.parentElement
    items.removeChild(li)
}