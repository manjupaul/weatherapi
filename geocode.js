const request=require('request');
const weather= require('./weather');
//var address = argv.a;

var getAddress = (address)=> {
    var encodedAddress = encodeURIComponent(address);
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
            // console.log(`Latitude:${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude:${body.results[0].geometry.location.lng}`);
            weather.getWeather(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng);
        }
        //console.log(body);
        //console.log(JSON.stringify(body,undefined,2));

    });
};
module.exports.getAddress = getAddress;