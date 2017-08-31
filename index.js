const request = require('request');
const yargs = require('yargs');

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
var address = argv.a;
var encodedAddress = encodeURIComponent(address);
//console.log('encodedAddress:',encodedAddress);
//request (options,callback)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env['GOOGLE_KEY']}`,
    json: true
}, (error, response, body) => {
    //console.log(body);
    //console.log(JSON.stringify(body,undefined,2));
    console.log(`Address:${body.results[0].formatted_address}`);
    console.log(`Latitude:${body.results[0].geometry.location.lat}`);
    console.log(`Longitude:${body.results[0].geometry.location.lng}`);
})