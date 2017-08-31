//const request = require('request');
const yargs = require('yargs');
const geocode =require('./geocode');
const argv = yargs
    .options({
        a: {
            alias: 'address',
            demand: true,
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
geocode.getAddress(argv.a);

