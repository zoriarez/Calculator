
let numberContainer = document.getElementById('numberContainer');
let two = document.getElementById('2');
let text = document.getElementById('text');
let stringg;
let additional 
//console.log(numbs[0])


for(let i=0; i<9; i++){
    let numKeys = document.createElement('div');
   // numKeys.setAttribute('type','button');
    numKeys.classList.add('numKeys');
    numberContainer.style.gridTemplateColumns = `repeat(3,auto)`
    numberContainer.appendChild(numKeys)
    numKeys.value = i +1;
    numKeys.innerHTML = i + 1;

    numKeys.addEventListener('click',()=>{
        console.log(numKeys.value)
    })
}

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