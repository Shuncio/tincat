    //creates the new Date object
let currentDate = new Date();      

    //gets the access to the current year 
let currentYear = currentDate.getFullYear();

    // shows the current year in the footer
document.querySelector('.footer-p').textContent = `Made with love by Shuncio. ${currentYear}`;