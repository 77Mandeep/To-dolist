let addToDoButton=document.getElementById('addToDo');
let todocontanier=document.getElementById('todocontainer');
let inputfield = document .getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText= inputfield.value; 
    todocontanier.appendChild(paragraph);
    inputfield.value= "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration=" line-through";

    })
    paragraph.addEventListener('dblclick', function(){
        todocontanier.removeChild(paragraph);


})
})