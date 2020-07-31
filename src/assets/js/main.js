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