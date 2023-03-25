let numbs = ['0','1','2','3','4','5','6','7','8','9']
let one = document.getElementById('1');
let two = document.getElementById('2');
let text = document.getElementById('text');
let stringg;
let additional 
console.log(numbs[0])


console.log(text.value)
one.addEventListener('click',()=>{
    stringg = `${numbs[1]}`
     text.value= text.value + stringg
    console.log(text.value)

    /*if(stringg.length == 0){

    }*/
})

two.addEventListener('click',()=>{
    text.value = `${numbs[2]}${text.value}`
    console.log(stringg)

    /*if(stringg.length == 0){

    }*/
})
