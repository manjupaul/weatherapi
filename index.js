const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a:{
            alias : 'address',
            demand :true,
            describe : 'Address to fetch weather',
            string : true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


//request (options,callback)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=14390%20Air%20and%20Space%20Museum%20Parkway%20Chantilly+Virginia+%2020151&key=${process.env['GOOGLE_KEY']}`,
     json :true
},(error, response, body) =>{
    //console.log(body);
   //console.log(JSON.stringify(body,undefined,2));
    console.log(`Address:${body.results[0].formatted_address}`);
 console.log(`Latitude:${body.results[0].geometry.location.lat}`);
 console.log(`Longitude:${body.results[0].geometry.location.lng}`);
})