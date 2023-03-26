
let numberContainer = document.getElementById('numberContainer');
let Clear = document.getElementById('C');
let divide = document.getElementById('divide');
let  multiply= document.getElementById('multiply');
let minus = document.getElementById('minus');
let  plus = document.getElementById('plus');
let  equals = document.getElementById('equals');
let textDisplay = document.getElementById('textDisplay');
let stringg;
let additional 


for(let i=0; i<9; i++){
    let numKeys = document.createElement('input');
    numKeys.setAttribute('type','button');
    numKeys.className="numKeys";
    numberContainer.style.gridTemplateColumns = `repeat(3,auto)`
    numberContainer.appendChild(numKeys)
    numKeys.value = i +1;
    numKeys.innerHTML = i + 1;

   numKeys.addEventListener('click',()=>{
        console.log(numKeys.value)
        textDisplay.value= numKeys.value
        textDisplay.innerHTML +=numKeys.value
    })
}

Clear.addEventListener('click',()=>{
    textDisplay.innerHTML = ""
})

divide.addEventListener('click',()=>{
    textDisplay.innerHTML += divide.value
})
multiply.addEventListener('click',()=>{
    textDisplay.innerHTML += multiply.value
})
minus.addEventListener('click',()=>{
    textDisplay.innerHTML += minus.value
})
plus.addEventListener('click',()=>{
    textDisplay.innerHTML += plus.value
})

equals.addEventListener('click',()=>{
    textDisplay.innerHTML = `${eval(textDisplay.innerHTML)}`
})
/*
console.log(text.value)
one.addEventListener('click',()=>{
    stringg = `${numbs[1]}`
     text.value= text.value + stringg
    console.log(text.value)

    if(stringg.length == 0){

    }
})

two.addEventListener('click',()=>{
    text.value = `${numbs[2]}${text.value}`
    console.log(stringg)
*/
    /*if(stringg.length == 0){

    }
})
*/