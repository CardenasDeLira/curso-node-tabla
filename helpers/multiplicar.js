const fs = require('fs');
const colors = require('colors')

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        let salida = ''
        let consola = ''
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`
        }
        if(listar){
            console.log('========================'.green)
            console.log('     tabla del:'.green, colors.blue(base))
            console.log('========================'.green)
            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        resolve(`tabla-${base}.txt`)
    })
}

module.exports = {
    crearArchivo
}