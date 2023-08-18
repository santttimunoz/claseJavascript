let estudiante1 = {
    nombre:"santiago",
    cedula:1000291109,    
    promedio:"4.5",
    estado:false
}
let estudiante2 = {
    nombre:"daniel",
    cedula:28947732,    
    promedio:3.5,
    estado:true
}
let estudiante3 = {
    nombre:"diego",
    cedula:97378273,    
    promedio:3.4,
    estado:true
}
let estudiante4 = {
    nombre:"keff",
    cedula:346453543,    
    promedio:5.0,
    estado:true
}
let estudiante5 = {
    nombre:"martha",
    cedula:764532543,    
    promedio:3.3,
    estado:false
}

let estudiantes = [
    estudiante1,
    estudiante2,
    estudiante3,
    estudiante4,
    estudiante5
]
let filtro = estudiantes.filter(function(estudiante){
    return(estudiante.promedio >= 3.5)
})
let filtro2 = estudiantes.filter(function(estudiante){
    return(estudiante.promedio == 4.5)
})
//el operador triple igual(===) compara el valor y el tipo de dato
//el operador doble igual(==)solo compara el valor
console.log(filtro2)
