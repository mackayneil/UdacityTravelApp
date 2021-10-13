const handleInput = () => {
    let long;
    let lat
    const test = fetch('http://api.geonames.org/postalCodeLookupJSON?placename=seattle&username=neilmackay01')
    .then(response => response.json())
      .then(data => {
        long = data.postalcodes[0].lng;
        lat =  data.postalcodes[0].lat;
        console.log(long)
        
    });


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'    
      },      
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }
  
  postData('http://api.geonames.org/postalCodeLookupJSON?placename=seattle&username=neilmackay01', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}



export { handleInput }