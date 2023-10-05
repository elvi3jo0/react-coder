/* let valores = [2, 6, 9, 0, 8]

const miFuncion = (valor, array) => {
    const isIn = array.find(n => n === valor)
    let arrayNuevo = []

    if(isIn){
        arrayNuevo = array.filter(n => n !== valor)
    }else{
        arrayNuevo = [...array, valor]
    }
    return arrayNuevo
}

console.log(miFuncion(8, valores)) */