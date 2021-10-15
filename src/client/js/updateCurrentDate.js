const updateCurrentDate = () => {
    const months = { 
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
    }

    const date = document.querySelector('.date')
    const currentDate = new Date()
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();
    date.innerHTML = `${day} / ${months[month]} / ${year}`
}

export { updateCurrentDate }