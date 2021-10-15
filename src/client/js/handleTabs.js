// Functionality for switching tabs
const handleTabs = () => {
    const tabs = document.querySelector('.tabs')
    const tab = document.querySelectorAll('.tab')
    const content = document.querySelectorAll('.content')

    const toggleTabs = (e) => {
        const clickedTab = e.target;
        if(!clickedTab.classList.contains('selected')){         
            tab.forEach(function(i) {
                i.classList.remove('selected')
            })
            clickedTab.classList.add('selected')

            content.forEach(function(i) {
                i.classList.add('d-none')
                if (i.id === clickedTab.dataset.id) {
                    i.classList.remove('d-none')
                }
            })
        };
    }

    if (tabs) {
        tabs.addEventListener('click', toggleTabs)
    }
    
}
handleTabs()

export { handleTabs }