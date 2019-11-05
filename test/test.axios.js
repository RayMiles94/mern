const axios = require('axios').default;

var url = "https://127.0.0.1:3150/"

async function getData(url) {
    try{
        var response =  await axios.get(url);
        console.log(response);
    }
    catch(error) {
        console.error(error);
    }
}

getData(url);
