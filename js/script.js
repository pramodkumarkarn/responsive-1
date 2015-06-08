document.getElementById('nav-button').onclick = function (event) {
    event.preventDefault();
    event.stopPropagation();
    var nav_panel = document.getElementById('menu-nav');
    if (nav_panel.className.indexOf('visible-menu') > -1) {
        nav_panel.style.display = 'none';
        nav_panel.className = nav_panel.className.replace(' visible-menu', '');
    } else {
        nav_panel.className = nav_panel.className + ' visible-menu';
        nav_panel.style.display = 'block';
    }
};
