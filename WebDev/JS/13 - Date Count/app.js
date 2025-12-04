let startDate = new Date("2004-12-13T00:00:00");

function updateCounter() {

    let now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        let prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let timeDiff = now - startDate;
    let diffDate = new Date(timeDiff);

    let hours = diffDate.getHours();
    let minutes = diffDate.getMinutes();
    let seconds = diffDate.getSeconds();

    let nums = document.querySelectorAll(".num");

    nums[0].textContent = years;
    nums[1].textContent = months;
    nums[2].textContent = days;
    nums[3].textContent = hours;
    nums[4].textContent = minutes;
    nums[5].textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();
