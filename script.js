"use strict";

const div = document.createElement('div')
div.className = 'main'
div.style.backgroundColor = 'yellow'
div.style.display = 'block'
div.style.margin = '30px 50px'
div.style.padding = '10px 20px'
div.style.borderRadius = '5px'
div.style.minHeight = '50px'

document.body.prepend(div)

const background = prompt('Сhoose from the proposed background color and enter it: red, green, blue')
if(!background) {
    div.style.backgroundColor = 'transparent'
} else if(background === 'red' || background === 'green' || background === 'blue'){
    div.style.backgroundColor = background
} else {
    alert('I didn\'t offer you this color, so let the background stay yellow')
}

const shadow = confirm('Would you like to add a shadow?')
if(shadow) {
    div.style.boxShadow = '12px 10px 24px 0px grey'
}else{
    alert('Okay, then without shadow')
}

const text = prompt('Enter the text')
if(text) {
    div.textContent = text
} else {
    alert('Okay, then without text')
}

