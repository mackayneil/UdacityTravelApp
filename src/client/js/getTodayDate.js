const getTodayDate = () => {
    const currentDate = new Date()
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();

    const startDate = document.querySelector('#trip-start');
    const endDate = document.querySelector('#trip-end');

    startDate.setAttribute('min', `${year}-${month}-${day}`)
    endDate.setAttribute('disabled', true)

    startDate.addEventListener('change', function() {
        endDate.removeAttribute('disabled')       
        endDate.setAttribute('min', `${startDate.value}`)        
    })
}
getTodayDate()

export { getTodayDate }