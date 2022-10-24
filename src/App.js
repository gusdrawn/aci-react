import { useEffect, useState } from "react";

function App() {
const [isLoading, setIsLoading] = useState(true);
const [isError, setError] = useState(false);
const [imageUrl, setImageUrl] = useState(null);
const url = "https://sandboxapicdc.cisco.com/api/aaaLogin.json?gui-token-request=yes"
let dataLogin = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  mode: 'no-cors',
  // credentials: 'same-origin',
  body: JSON.stringify({
    "aaaUser" : {
      "attributes" : {
        "name" : "admin",
        "pwd" : "!v3G@!4@Y"
      }
    }
  })
}
function componentDidMount() {
  // POST request using fetch with set headers
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("credentials: 'include'");


  var raw = JSON.stringify({
    "aaaUser": {
      "attributes": {
        "name": "admin",
        "pwd": "!v3G@!4@Y"
      }
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'credentials': 'include'
    },
    body: raw,
    redirect: 'follow'
  };

  fetch("https://sandboxapicdc.cisco.com/api/aaaLogin.json", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result.cookie))
  .catch(error => console.log('error', error));
}

componentDidMount ();

  // AQUI HAGO LOGIN PRIMERO
  // async function apicLogin() {
  //   const res = await fetch (url,{
  //     method: 'POST',
  //     headers:  {'Content-Type': 'application/json'},
  //     mode: 'no-cors',
  //     // credentials: 'same-origin',
  //     body: JSON.stringify({
  //       "aaaUser" : {
  //         "attributes" : {
  //           "name" : "admin",
  //           "pwd" : "!v3G@!4@Y"
  //         }
  //                   }})})
  //   const data = await res.json();
  //   console.log("Login ejecutado")
  //   console.log(data)
  //   console.log(data.status)
  //   console.log(data.message)
  //   return data;
  // } 
  // apicLogin();

  // fetch(url,dataLogin)
  //   .then((response) => {
  //     console.log(response.status)
  //     return response.json()
  //   })
  //   .catch((error) => console.log(error))
  //   .then((data) => {
  //     console.log(data.json())
  //   })
  //   let dataGET = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'cookie': postAAA},
  //     mode: 'no-cors',
  //     credentials: 'same-origin',
  //     setcookie: ''
  //   }
  //   .then(
  //     fetch("https://sandboxapicdc.cisco.com/api/node/class/fabricNode.json?&order-by=fabricNode.modTs|desc",dataGET)
  //     .then((response) => {
  //       if (response.ok) {
  //         console.log("funciono!!")
  //         console.log(response)
  //         return response.json()
  //   }})
  //       .catch((error) => {
  //         setIsLoading(false);
  //         console.log('Error GET');
  //         console.log(error);
  //         setError(true);
  //       })
  //     .then((dog) => {
  //       console.log('cargo!!');
  //       console.log(dog);
  //       console.log(dog.imdata);
  //   }));

return (
  <div className="App">
    <img src={imageUrl} alt="Imagen de perrito aleatoria" />
  </div>
);
}

export default App;
