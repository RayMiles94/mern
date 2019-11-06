const axios = require('axios').default;

var list =  [];
for (var i=0; i <100; i++){
    list.push( {
        "data": i
    } );
}

var url = "http://127.0.0.1:3150/";
async function getData(url) {
    try{
        var response =  await axios.get(url, {   
            params: {
                a: list
            }
        });
        console.log(response.data);
    }
    catch(error) {
        console.error("Server is Offline or Error");
    }
}
getData(url);
