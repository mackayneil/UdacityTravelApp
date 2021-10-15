// Clears the user input to allow searching for a new location
const clearInputs = () => {
    const userLocationInput = document.querySelector('#location');
    const userStartDate = document.querySelector('#trip-start'); 
    const userEndDate = document.querySelector('#trip-end');
   
    userLocationInput.value = '';
    userStartDate.value = '';
    userEndDate.value = '';
}

export { clearInputs }