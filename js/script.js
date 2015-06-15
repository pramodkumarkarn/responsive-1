document.getElementById('nav-button').onclick = function (event) {
    event.preventDefault();
    var nav_panel = document.getElementsByClassName('menu-nav')[0];
    if (nav_panel.className.indexOf('visible-menu') > -1) {
        nav_panel.className = nav_panel.className.replace(' visible-menu', '');
    } else {
        nav_panel.className = nav_panel.className + ' visible-menu';
    }
};
