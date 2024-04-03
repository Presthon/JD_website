let ageEl = document.getElementById("age");

// Function to update age
function updateAge() {
    let birthDate = new Date('1999-11-04T12:00:00');
    let currentDate = new Date();
    let ageInMilliseconds = currentDate - birthDate;

    // Convert milliseconds to years
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    // Display age up to 12 decimal places
    ageEl.innerText = ageInYears.toFixed(8);
}

// Update age initially
updateAge();

// Update age every second
setInterval(updateAge, 100);
