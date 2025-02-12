var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var openIcon = document.querySelector('.fas.fa-bars');
var closeIcon = document.querySelector('.fas.fa-times');

function openmenu() {
    sidemenu.style.left = "0";
    openIcon.style.display = 'none';  // Hide the open icon
    closeIcon.style.display = 'inline-block';  // Show the close icon
}

function closemenu() {
    sidemenu.style.left = "-200px";
    openIcon.style.display = 'inline-block';  // Show the open icon
    closeIcon.style.display = 'none';  // Hide the close icon
}

const scriptURL = '<https://script.google.com/macros/s/AKfycbyl1h2zHh9sgi5Gkwb_8MNk2BbK_kDuE73c3AZUMFkw0wnQ_EMeLMdOObqeTC101f2_3g/exec>';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const container = document.getElementById('span-container');

let spans = Array.from(container.children);

spans = shuffle(spans);

container.innerHTML = '';

spans.forEach(span => container.appendChild(span));

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
