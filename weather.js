const request = require('request');

var getWeather = (lat,lng) => {
    request({
        url: `https://api.darksky.net/forecast/096100a5b048a56b88ad1534ea9f22cd/${lat},${lng}`,
        json: true
    },(error,response,body)=>{

        if(error) {
            console.write("Unable to connect forecast server");
        }else if(response.statusCode == 400){
            console.log("Unable to fetch weather!!");
        }else if(response.statusCode===200){
            console.log("It is actually:",body.currently.temperature);
            console.log("Feels like:",body.currently.apparentTemperature);
        }
        //console.log(body);
    });

    }
    module.exports.getWeather = getWeather;


