setTimeout(function() { document.getElementsByClassName('biography-item-pic')[0].style.visibility = 'visible'; }, 3000);
setTimeout(function() { document.getElementsByClassName('olama-item-pic')[0].style.visibility = 'visible'; }, 3300);
setTimeout(function() { document.getElementsByClassName('others-item-pic')[0].style.visibility = 'visible'; }, 3600);
setTimeout(function() { document.getElementsByClassName('vilayat-item-pic')[0].style.visibility = 'visible'; }, 3900);
setTimeout(function() { document.getElementsByClassName('why-imam-item-pic')[0].style.visibility = 'visible'; }, 4200);


var bigParentWidth = document.getElementsByClassName('main-page-menu-pic-border')[0].offsetWidth,
    littleParentWidth = document.getElementsByClassName('main-page-menu-pic-hld')[0].offsetWidth,
    diffParentsWidth = bigParentWidth - littleParentWidth;

    document.getElementsByClassName('biography-item-link')[0].style.transform = 'translateX(' + -diffParentsWidth / 4 + 'px)';
    document.getElementsByClassName('olama-item-link')[0].style.transform = 0;
    document.getElementsByClassName('others-item-link')[0].style.transform = 'translateX(' + diffParentsWidth / 8 + 'px)';
    document.getElementsByClassName('vilayat-item-link')[0].style.transform = 0;
    document.getElementsByClassName('why-imam-item-link')[0].style.transform = 'translateX(' + -diffParentsWidth / 4 + 'px)';

    if (window.innerWidth <= 800) {
        document.getElementsByClassName('main-page-menu-pic-border')[0].style.width = 0.8 * window.innerWidth + 'px';
        document.getElementsByClassName('main-page-menu-pic-border')[0].style.height = 0.8 * window.innerWidth + 'px';

        document.getElementsByClassName('main-page-menu-pic')[0].style.width = .625 * window.innerWidth + 'px';
        document.getElementsByClassName('main-page-menu-pic')[0].style.height = .625 * window.innerWidth + 'px';

        var bigParentWidth = document.getElementsByClassName('main-page-menu-pic-border')[0].offsetWidth,
        menuItemWidth = document.getElementsByClassName('main-page-menu-item-link')[0].offsetWidth * .66,
        rightColWidth = bigParentWidth - menuItemWidth;

        document.getElementsByClassName('main-page-menu-items-hld')[0].style.left = rightColWidth + 'px';

        var menuItems = document.getElementsByClassName('main-page-menu-item-pic');

        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.width = .155 * window.innerWidth + 'px';
            menuItems[i].style.height = .155 * window.innerWidth + 'px';
            menuItems[i].style.backgroundSize = 'cover !important';
        }
    }

    /*  Height of index page  */

    var menuHeight = document.getElementsByClassName('main-page-menu-pic-border')[0].offsetHeight,
        whiteSpace = document.getElementsByClassName('white-space')[0];

    whiteSpace.style.marginTop = menuHeight + 'px';