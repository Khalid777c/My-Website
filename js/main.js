// creat Element
let pagelanding = document.createElement('div');
let textloding = document.createElement('p');
let icon = document.createElement('i')

// add text in the element
textloding.textContent = 'Dev Khaled';

// add element in the div
pagelanding.appendChild(textloding);
textloding.appendChild(icon)

//  add class name
pagelanding.className = 'pagelanding';
icon.className ="fa-solid fa-hourglass-start"

// add div in the body
document.body.appendChild(pagelanding);


setInterval(()=>{
    pagelanding.remove()
},5000)