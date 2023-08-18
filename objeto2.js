let producto1 = {
    nombre:"MP3",
    precio:104000,
    promocion:true
}
let producto2 = {
    nombre:"discman",
    precio:78500,
    promocion:false
}
let producto3 = {
    nombre:"walkman",
    precio:90000,
    promocion:false
}
let producto4 = {
    nombre:"nokia 1100",
    precio:100000,
    promocion:false
}
let producto5 = {
    nombre:"tamagoshi",
    precio:25000,
    promocion:false
}
let productos = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5
]

let filtro = productos.filter(function(producto){
    return(producto.promocion == false)
})
let filtro2 = productos.some(function(producto){
    return(producto.nombre == "tamagoshi")
})
let filtro3 = productos.filter(function(producto){
    return(producto.precio > 80000 && producto.promocion == true)
})
console.log(filtro)
console.log(filtro2)
console.log(filtro3)