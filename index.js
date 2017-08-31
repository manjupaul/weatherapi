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
    if (error) {
        console.log("Unable to connect Google server");
    }
    else if (body.status == "ZERO_RESULTS") {
        console.log("Unable to found");
    }
    else if (body.status == 'OK') {
        console.log(`Address:${body.results[0].formatted_address}`);
        console.log(`Latitude:${body.results[0].geometry.location.lat}`);
        console.log(`Longitude:${body.results[0].geometry.location.lng}`);
    }
    //console.log(body);
    //console.log(JSON.stringify(body,undefined,2));

})