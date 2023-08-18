let names = Array("moma", "daddy", "brosito", "sist")
let numeros2 = [0,1,1,2,3,5]

//filtrando un arreglo
let filtro = numeros2.filter(function(numero){
    return(numero < 5)
})
console.log(filtro)

let filtro2 = names.filter(function(name){
    return(name.length > 4)
})
console.log(filtro2)