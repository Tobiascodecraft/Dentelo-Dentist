
function Booking () {
    let Surname = document.querySelector('.js-surname').value;
    let Name = document.querySelector('.js-name').value;
    let Mail = document.querySelector('.js-mail').value;
    let PhoneNumber = document.querySelector('.js-phoneNumber').value;
    let Time = document.querySelector('.js-Time').value;
    let Date = document.querySelector('.js-Date').value;

    // Message Variables
    const UnvalidMail = `
    ${Mail} is not a valid Mail <span id="red-icon"><i class="fa-solid fa-circle-exclamation"></i></span>
    `;

    const ValidMail = `
    ${Mail} is a valid Mail <span id="green-icon"><i class="fa-solid fa-check"></i></span>
    `;

    const ValidDate = `
    <p id="p-js-display">Your booking was succsessful! <i class="fa-solid fa-face-smile"></i><br>
      We will send you a verification Mail.
    </p>
    `;
    // End

    // Checks if Mail Format is correct
    if (Mail.includes('@') && Mail.includes('.')) {
        document.querySelector('.js-dislpayMessage').innerHTML = ValidMail;
    }else {
        document.querySelector('.js-dislpayMessage').innerHTML = UnvalidMail;
    }

    // Checks if Appointment is avaiable
    if ( Date.includes(7) || Date.includes(9) ) {
       document.querySelector('.js-dislpayMessage-check').innerHTML = `There are no more open <br> Appointments on ${Date}
       <span id="red-icon"><i class="fa-solid fa-circle-exclamation"></i></span>. <br>
       <span id="red-icon">Please select another day.</span>
       `;
    }

    /* TODO Mail checker
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }

       if (!isValidEmail(Mail)) {
        
      }
    */

    // Displays Succsess Message
    if ( Mail.includes('@') && Mail.includes('.') ) {

            if (Surname !== '' && Name !== '' && Mail !== '' && PhoneNumber.length >= 6 && Time !=='' && Date !== '') {

                if ( !Date.includes(7) || !Date.includes(9) ) {
                    document.querySelector('.container-booking-js').innerHTML = ValidDate;
                }
            }

    }

    //Checks if length is okay 
    if (Surname.length < 3) {
        document.querySelector('.display-short').innerHTML = `Your Surname is to short`;
    } else {
        document.querySelector('.display-short').innerHTML = `Surname:`;
    }

    if (Name.length < 3) {
        document.querySelector('.display-short-name').innerHTML = `Your Name is to short`;
    } else {
        document.querySelector('.display-short-name').innerHTML = `Name:`;
    }

    const RequiredField = [Surname, Name, Mail, PhoneNumber, Time, Date];
    // Checks that no Inputs are empty    
    if (RequiredField.some(field => field === '')) {
        document.querySelector('.js-dislpayMessage-empty').innerHTML = `
        Please fill out all fields. <span id="red-icon"><i class="fa-solid fa-circle-exclamation"></i></span>
      `;
    } else {
        document.querySelector('.js-dislpayMessage-empty').innerHTML = ``;
    }

    // Phone Number Check
    if (PhoneNumber.length <=5 ) {
        document.querySelector('.js-dislpayMessage-phone').innerHTML = `
        Please use a valid Phone Number. <span id="red-icon"><i class="fa-solid fa-circle-exclamation"></i></span>
        `;
    } if (PhoneNumber.length >= 6 ) {
        document.querySelector('.js-dislpayMessage-phone').innerHTML = `
        "${PhoneNumber}" is a valid Phone Number. <span id="green-icon"><i class="fa-solid fa-check"></i></span>
        `;
    }

}

