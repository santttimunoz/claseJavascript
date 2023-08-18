let notas = [1.0, 4.0, 4.0]

//buscar elemento én particular(si se encuentra devuelve true sino false)
let r = notas.some(function(nota){
  return(nota == 5)
})
console.log(r)

//find te muestra el primer elemento que cumpla con la condicion
let re = notas.find(function(nota){
    return(nota == 5)
  })
  console.log(re)