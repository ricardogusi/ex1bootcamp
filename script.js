const redRange = document.querySelector('#r')
const redInput = document.querySelector('#red')

const greenRange = document.querySelector('#g')
const greenInput = document.querySelector('#green')

const blueRange = document.querySelector('#b')
const blueInput = document.querySelector('#blue')

const caixa = document.querySelector('.caixa')



function update() {
    redInput.value = redRange.value
    greenInput.value = greenRange.value
    blueInput.value = blueRange.value  

    let red = redRange.value
    let green = greenRange.value
    let blue = blueRange.value

    let col = "rgb(" + red + "," + green + "," + blue + ")"

    caixa.style.backgroundColor = col

 
}



