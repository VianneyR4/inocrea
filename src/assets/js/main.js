function closeStartedMessage() {
    document.getElementsByClassName("sarted-message")[0].classList.toggle("d-none");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function js1() {
    document.getElementById("js1").classList.toggle("show");
    document.getElementById("js4").classList.remove("show");
    document.getElementById("js2").classList.remove("show");
    document.getElementById("js3").classList.remove("show");

    window.onclick = function(event) {
        if (!event.target.matches('.title')) {
            var dropdowns = document.getElementsByClassName("elw");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function js2() {
    document.getElementById("js2").classList.toggle("show");
    document.getElementById("js1").classList.remove("show");
    document.getElementById("js4").classList.remove("show");
    document.getElementById("js3").classList.remove("show");
    window.onclick = function(event) {
        if (!event.target.matches('.title')) {
            var dropdowns = document.getElementsByClassName("elw");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function js3() {
    document.getElementById("js3").classList.toggle("show");
    document.getElementById("js1").classList.remove("show");
    document.getElementById("js2").classList.remove("show");
    document.getElementById("js4").classList.remove("show");
    window.onclick = function(event) {
        if (!event.target.matches('.title')) {
            var dropdowns = document.getElementsByClassName("elw");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function js4() {
    document.getElementById("js4").classList.toggle("show");
    document.getElementById("js1").classList.remove("show");
    document.getElementById("js2").classList.remove("show");
    document.getElementById("js3").classList.remove("show");
    window.onclick = function(event) {
        if (!event.target.matches('.title')) {
            var dropdowns = document.getElementsByClassName("elw");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function showMenu() {
    document.getElementById("asas").classList.toggle("show");
    window.onclick = function(event) {
        if (!event.target.matches('.title')) {
            var dropdowns = document.getElementsByClassName("elw");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function terminalleft1() {
    document.getElementById("terminal1").classList.remove("show-item");
    document.getElementById("terminal2").classList.remove("show-item");
    document.getElementById("terminal3").classList.toggle("show-item");
}

function terminalRight1() {
    document.getElementById("terminal1").classList.remove("show-item");
    document.getElementById("terminal2").classList.toggle("show-item");
    document.getElementById("terminal3").classList.remove("show-item");
}

function terminalleft2() {
    document.getElementById("terminal1").classList.toggle("show-item");
    document.getElementById("terminal2").classList.remove("show-item");
    document.getElementById("terminal3").classList.remove("show-item");
}

function terminalRight2() {
    document.getElementById("terminal1").classList.remove("show-item");
    document.getElementById("terminal2").classList.remove("show-item");
    document.getElementById("terminal3").classList.toggle("show-item");
}

function terminalleft3() {
    document.getElementById("terminal1").classList.remove("show-item");
    document.getElementById("terminal2").classList.toggle("show-item");
    document.getElementById("terminal3").classList.remove("show-item");
}

function terminalRight3() {
    document.getElementById("terminal1").classList.toggle("show-item");
    document.getElementById("terminal2").classList.remove("show-item");
    document.getElementById("terminal3").classList.remove("show-item");
}

// -----------my slide---------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function colaps() {
    // let grey = document.getElementById("grey").classList.remove("show");
    // let white = document.getElementById("white").classList.toggle("show");
    document.getElementById("grey22").style.display = "none";
    document.getElementById("grey22").classList.remove("show");
    document.getElementById("white22").style.display = "block";

    let colaps = document.getElementById("solapsShow");

    colaps.style.height = "auto";

}

window.onclick = function(event) {
    // if (!event.target.matches('.title')) {
    // if (colaps.style.height = "auto") {
    colaps.style.height = "20px";
    // }
    // }
}