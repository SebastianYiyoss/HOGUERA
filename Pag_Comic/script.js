let navegacion = document.getElementById('navegacion')
let cerrarNav = document.getElementById('cerrarNav')
let abrirNav = document.getElementById('abrirNav')
let borroso = document.getElementById('borroso')

abrirNav.addEventListener('click', function () {
    navegacion.classList.remove('scaleCero')
    navegacion.classList.add('zDex')
    borroso.classList.remove('none')
})
cerrarNav.addEventListener('click', function () {
    navegacion.classList.add('scaleCero')
    navegacion.classList.remove('zDex')
    borroso.classList.add('none')
})

const clickRevista = lottie.loadAnimation({
    container: document.getElementById('clickRevista'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'clips/libro/clickRevista.json'
})