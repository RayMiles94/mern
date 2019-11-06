import axios from "axios";


const headers = {
  "Content-Type": "application/json"
};

const burl = "http://127.0.0.1:8800";


export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
        {
          params: {
            email,
            password
          } 
        }  
      ,
      {
        headers: headers
      }
    );
  },
  signup: function(email, password) {
    return axios.post(`${burl}/user/signup`, { 
      email,
      password
    }, { 
      headers: headers 
    });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
}; 

/*
export default {
  login: function(email, password) {
    var res = "Admin";
    fetch('http://127.0.0.1:8800/user/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: {
        email,
        password
      }, 
      mode: 'no-cors'
     }).then(res => res.json())
       .then((data) => {
         this.setState({ contacts: data })
       })
        .catch(console.log)  
        return res;
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};
*/