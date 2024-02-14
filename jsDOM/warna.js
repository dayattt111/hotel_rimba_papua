const warna = document.getElementsByClassName('warnaAwal');
const tombol = document.getElementById('tombolWarna');

// fungsi ubah warna dengan toogle
tombol.onclick = function(){
    document.body.classList.toggle('wood');
};
// menambahkan tag element
const rWarna = document.createElement('button');
// menambahkan isi text
const tWarna = document.createTextNode('Acak Warna');
// paste isi Text
rWarna.appendChild(tWarna); 
// menambahkan attribut type yg bertipe button
rWarna.setAttribute('type', 'button');
// menambahkan tag Element baru setelah var tombol
tombol.after(rWarna);

// isi tombol baru
// ?funsi tombol acak warna
rWarna.addEventListener('click', function() {
    // membulatkan angka dari desimal ke bulat dengan fungsi round
    const r = Math.round(Math.random() * 255 + 1)
    // angka random dikalikan dengan 255 + 1
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    // variabel diatas di taro ke dalam fungsi RGB
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

// menetapkan nama Variabel 
const pMerah = document.querySelector('input[name=pilihMerah]');
const pHijau = document.querySelector('input[name=pilihHijau]');
const pBiru = document.querySelector('input[name=pilihBiru]');

// ?Funsgi Slider 
pMerah.addEventListener('input', function() {
    const r = pMerah.value;
    const g = pHijau.value;
    const b = pBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});
pHijau.addEventListener('input', function() {
    const r = pMerah.value;
    const g = pHijau.value;
    const b = pBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});
pBiru.addEventListener('input', function() {
    const r = pMerah.value;
    const g = pHijau.value;
    const b = pBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
});

// ?Fungsi otomatis ganti warna apabila kursor di gerakkan
document.body.addEventListener('mousemove', function(event) {
    // console.log(event.clientX)
    // console.log(event.clientY)
    // client x -> vertikal
    // client y -> horizontal
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)'
});

const color = document.querySelector('#clr');
const hexa = document.querySelector('.hexa');

hexa.innerHTML = color.value;

color.addEventListener('input', function() {
    // hexa.innerHTML = color.value;
    hexa.style.color = color.value;
})
