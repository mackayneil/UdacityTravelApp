// Gets todays date to update the date pickers to prevent user from selecting a day in the past
const getTodayDate = () => {
    const currentDate = new Date()
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();

    const startDate = document.querySelector('#trip-start');
    const endDate = document.querySelector('#trip-end');

 

    if (endDate) {
        endDate.setAttribute('disabled', true)
    }

    if (startDate) {
        startDate.setAttribute('min', `${year}-${month}-${day}`);
        startDate.addEventListener('change', function() {
            endDate.removeAttribute('disabled')       
            endDate.setAttribute('min', `${startDate.value}`)        
        })
    }

 
}
getTodayDate()

export { getTodayDate }