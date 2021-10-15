// Inputs the data for the trip tab
const handleDate = (startDate, endDate) => {
    const months = { 
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
    }
    const departingDate = document.querySelector('#departing');
    const daysLeft = document.querySelector('#days-left');
    const lengthOfTrip = document.querySelector('#length-of-trip');
    let tripLength = Math.round((endDate.valueAsNumber - startDate.valueAsNumber) / (1000 * 60 * 60 * 24));
    const currentDate = new Date();
    let daysRemaining = Math.round((startDate.valueAsNumber - currentDate.getTime()) / (1000 * 60 * 60 * 24));

    let date = [...startDate.value.split('-')];
    let year = date[0];
    let month = date[1];
    let day = date[2];
    
    // Calculates the length of the trip
    if (tripLength === 1 || tripLength === 0) {
        lengthOfTrip.innerHTML = `1 day`
    } else {
        lengthOfTrip.innerHTML = `${tripLength} days`
    }
    // Inputs the chosen departing day
    departingDate.innerHTML = `${day} / ${months[month]} / ${year}`

    // Calculates the number of days remaining
    if (daysRemaining === -1 || daysRemaining === 1) {
        daysLeft.innerHTML = `1 day`
    } else {
        daysLeft.innerHTML = `${daysRemaining} days`
    }
}

export { handleDate }