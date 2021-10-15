const updateDetailsPanel = (data) => {
    const popularDestinations = document.querySelector('.destination-card-container');
    const tabs = document.querySelector('.tab-container');
    const header = document.querySelector('#details-header');
    
    popularDestinations.classList.add('d-none')
    tabs.classList.remove('d-none');
    header.innerHTML = data.city_name;
}
export { updateDetailsPanel }