// Hides the popular destinations tab and displays the details tab after a user has submited the info
const updateDetailsPanel = (data) => {
    const popularDestinations = document.querySelector('.destination-card-container');
    const tabs = document.querySelector('.tab-container');
    const header = document.querySelector('#details-header');
    const userLocation = document.querySelector('#location').value;

    popularDestinations.classList.add('d-none')
    tabs.classList.remove('d-none');
    header.innerHTML = userLocation.charAt(0).toUpperCase() + userLocation.slice(1);    
}
export { updateDetailsPanel }