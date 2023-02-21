const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'El rango entre 1 y x para el resultado'
    })
    .check( (argv, options)=> {
        if( isNaN( argv.b)){
            throw 'Base must be a number'
        }
        return true;
    })
    .argv


module.exports = argv