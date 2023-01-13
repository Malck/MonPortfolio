const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

/* Show menu */
if(navToggle){
    navToggle.addEventListener("click",  () =>{
        navMenu.classList.add("show-menu")
    })
}

if(navClose){
    navClose.addEventListener("click",  () =>{
        navMenu.classList.remove("show-menu")
    })
}

/* remove menu mobile*/
const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(x => x.addEventListener("click", linkAction))


/*****************   Skills arrow **************************/

const skillsContent = document.getElementsByClassName("skills_content")
const skillsHeader = document.querySelectorAll(".skills_header")
console.log(skillsHeader)

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills_content skills_close"
    }
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click",toggleSkills)
})

/* ************ Services Modal *****************/ 

const modalViews = document.querySelectorAll(".services_modal")
const modalBtns = document.querySelectorAll(".services_button")
const modalCloses = document.querySelectorAll(".services_modal-close")

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i ) => {
    modalBtn.addEventListener("click", () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal")
        })
    })
})

/************ Portfolio swiper ***** */

let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


/* *** Scroll Active sur les icones du menu header *****/ 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;


    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/************ Ajouter une ombre au background header quand on descends sur la page ********** */

function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Show scrollUP **********************************************/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* Dark theme ************************************************/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



//Animation du texte avec 

const textAnim = document.querySelector('h3');

new Typewriter(textAnim, {
    loop: true,
    deleteSpeed:30
})
.typeString('Développeur Front-End')
.pauseFor(500)
.deleteChars(9)
.typeString('Application')
.pauseFor(500)
.deleteChars(11)
.typeString('<span style="color:hsl(var(--hue-color), 78%, 55%)">Javascript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color:hsl(var(--hue-color), 78%, 55%)">React</span> !')
.pauseFor(1000)
.deleteChars(7)
.start()
