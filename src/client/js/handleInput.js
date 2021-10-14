const handleInput = async () => {
    let long;
    let lat

    const userLocation = document.querySelector('#location').value;
    const userLocationValue = { userLocation };


    if (userLocation === '') {  
       console.log('empty');
      } else {        
        fetch('http://localhost:8080/location', {
                method: 'POST',
                credentials: 'same-origin',           
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLocationValue),
            })
              .then(res => res.json())
              .then(function (res) {            
                console.log(res.postalcodes[0].lat);
                console.log(res.postalcodes[0].lng);
              }
            );
        }

   
}



export { handleInput }