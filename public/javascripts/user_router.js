function render_about() {
    hide_everything();
    document.getElementById('about').style.display = "inline";
}


function render_game() {
    document.getElementById('game').style.display = "inline";
}


function render_menu() {
    document.getElementById('menu').style.display = "inline";
}


function render_registration() {
    document.getElementById('registration').style.display = "inline";
}


function render_stats() {
    document.getElementById('stats').style.display = "inline";
}


function render_login() {
    document.getElementById('login').style.display = "inline";
}


function hide_everything() {
    document.getElementById('about').style.display = "none";
    document.getElementById('game').style.display = "none";
    document.getElementById('menu').style.display = "none";
    document.getElementById('registration').style.display = "none";
    document.getElementById('stats').style.display = "none";
    document.getElementById('login').style.display = "none";
}


hide_everything();
render_login();


window.onhashchange = function () {
    console.log(window.location.hash);


    switch (window.location.hash) {
        case "#about":
            hide_everything();
            render_about();
            break;
        case "#game":
            hide_everything();
            render_game();
            break;
        case "#menu":
            hide_everything();
            render_menu();
            break;
        case "#registration":
            hide_everything();
            render_registration();
            break;
        case "#stats":
            hide_everything();
            render_stats();
            break;
        case "#login":
            hide_everything();
            render_login();
            break;
    }
};
