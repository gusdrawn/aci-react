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
        'credentials': 'include',
        crossOrigin: null
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