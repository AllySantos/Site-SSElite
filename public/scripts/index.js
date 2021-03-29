
window.onload = () => {
    changeBgMobile();
}

window.onresize = () => {

    changeBgMobile();
}
//Change src from image when display in mobile

function changeBgMobile() {

    var width = window.innerWidth;

    if (width < 991.98) {
        document.getElementById('mainBanner').style.backgroundImage = "url('img/Banner Mobile.png')";
        console.log('Mobile');

    } else {
        document.getElementById('mainBanner').style.backgroundImage = "url('img/banner.png')";
        console.log('Desktop')
    }
}