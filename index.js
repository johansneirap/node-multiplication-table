const argv = require('./config/yargs')
const colors = require('colors')

function printTable (base, hasta) {
    console.log(`TABLA DEL ${base}`.rainbow)
    for (let idx = 0; idx < hasta; idx++) {
        console.log(`${String(base).cyan} ${'*'.magenta} ${String(idx + 1).cyan} ${'='.yellow} ${String((idx + 1) * base).green}`)
    }
}

printTable( argv.b, argv.h)