//Section Scroll Navbar
function scrollToSectionHeader() {
    const section = document.querySelector('.section-header'); 
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionServices() {
    const section = document.querySelector('.section-services'); 
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionAbout() {
    const section = document.querySelector('.section-about'); 
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionBlog() {
    const section = document.querySelector('.section-blog'); 
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSectionContact() {
    const section = document.querySelector('.section-contact'); 
    section.scrollIntoView({ behavior: 'smooth' });
}


// E Mail Response System
function ClearInput () {
    let inputValue = document.querySelector('.js-input-mail');
    let messageElement = document.querySelector('.displayMessageMail');

    const SuccsessfulMail = document.querySelector('.displayMessageMail').innerHTML = `
        <p id="displayGoodMessageJs">We will call you soon <span id="green-icon"><i class="fa-solid fa-check"></i></span></p>
    `;

    const FalseMail = document.querySelector('.displayMessageMail').innerHTML = `
        <p id="displayBadMessageJs">Please use a valid Mail <span id="red-icon"><i class="fa-solid fa-circle-exclamation"></i></span></p>
    `;

    if (inputValue.value.includes('@') && inputValue.value.includes('.')) { 
        messageElement.innerHTML = SuccsessfulMail; 
        inputValue.value = '';
    } else {
        messageElement.innerHTML = FalseMail; 
        inputValue.value = '';
    }

}


// Js Animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

