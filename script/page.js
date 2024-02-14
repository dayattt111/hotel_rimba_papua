const toggle = document.getElementById('tombol');
const nav = document.getElementById('navbar-nav');
const navLink = document.querySelectorAll('.nav-link');
const navBar = document.getElementsByClassName('navbar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    // navBar.style.background = 'black';
});

for ( let i = 0; i < navLink.length; i++ ) {
    navLink[i].addEventListener('click', function() {
        nav.classList.toggle('show');
    } )
}

var indexValue = 1;
showImg(indexValue);
function btn_slide(e) {showImg(indexValue = e);}
function side_slide(e) {showImg(indexValue += e);}
function showImg(e){
    var i;
    const img = document.querySelectorAll('.img_main');
    const sliders = document.querySelectorAll('.btn-slide span');

    if (e > img.length) {indexValue = 1}
    if (e < 1) {indexValue = img.length}
    for(i=0; i < img.length; i++){
        img[i].style.display = 'none';
    }
    for(i=0; i < sliders.length; i++){
        sliders[i].style.background = 'aliceblue';
    }
    img[indexValue-1].style.display = 'block';
    sliders[indexValue-1].style.background = 'brown';
}