const axios = require('axios').default;

var url = "http://127.0.0.1:3150/"
var weather  ="https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22";

async function getData(url) {
    try{
        var response =  await axios.get(url);
        console.log(response.data);
    }
    catch(error) {
        console.error("Server is Offline or Error");
    }
}

getData(url);
