const request = require('request');
//request (options,callback)

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=herndon+va&key=${process.env['GOOGLE_KEY']}`,
     json :true
},(error, response, body) =>{
    //console.log(body);
   //console.log(JSON.stringify(body,undefined,2));
    console.log(`Address:${body.results[0].formatted_address}`);
 console.log(`Latitude:${body.results[0].geometry.location.lat}`);
 console.log(`Longitude:${body.results[0].geometry.location.lng}`);
})