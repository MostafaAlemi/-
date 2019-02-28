subPages();

function subPages() {

    var windowHeight = window.innerHeight,
        upButton = document.getElementsByClassName('up-button')[0];

    document.addEventListener('scroll', upButtonFunc, false);
    document.addEventListener('touchMove', upButtonFunc, false);

    function upButtonFunc(evt) {

        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (window.innerWidth <= 800) {
            if (scrollTop >= windowHeight) {
                upButton.style.transform = 'translate(-50% ,0px)';
            }

            else {
                upButton.style.transform = 'translate(-50% ,200px)';
            }
        }

        else {

            if (scrollTop >= windowHeight) {
                upButton.style.transform = 'translateY(0)';
            }

            else {
                upButton.style.transform = 'translateY(200px)';
            }

        }

    }
}