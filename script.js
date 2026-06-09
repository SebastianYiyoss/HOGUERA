let contentList = document.getElementById('contentList')
let headerSecond = document.getElementById('headerSecond')
let blur = document.getElementById('blur')
let header = document.querySelector('header')

/* let abrirCarta = new Audio('./audios/AbrirHoja.mp3')
let corcho = new Audio('./audios/Corcho.mp3')
let cerrarCarta = new Audio('./audios/Cerrar.mp3')
let ballenaGemido = new Audio('./audios/Ballena.mp3')
let ballenaHabla = new Audio('./audios/BallenaTwo.mp3') */

headerSecond.addEventListener('mouseover', contentListAct)
function contentListAct() {
    contentList.classList.add('contentListAct')
    contentList.classList.remove('none')

    headerSecond.removeEventListener('mouseover', contentListAct)
    headerSecond.addEventListener('mouseout', contentListDes)
}
function contentListDes() {
    contentList.classList.remove('contentListAct')
    contentList.classList.add('none')

    headerSecond.addEventListener('mouseover', contentListAct)
    headerSecond.removeEventListener('mouseout', contentListDes)
}

let hoguera = document.getElementById('hoguera')
setInterval(() => {
    hoguera.setAttribute('src', './imagenes/HOGUERA 2.svg')
    setTimeout(() => {
        hoguera.setAttribute('src', './imagenes/HOGUERA.svg')
    }, 250);
}, 500);

let menu = document.getElementById('menu')
menu.addEventListener('click', openMenu)
function openMenu() {
    contentList.classList.add('contentListAct')
    contentList.classList.remove('none')
    menu.removeEventListener('click', openMenu)
    menu.addEventListener('click', closeMenu)
    menu.setAttribute('src', './imagenes/equisIcon.png')
    headerSecond.removeEventListener('mouseover', contentListAct)
    blur.classList.remove('none')
    morral.classList.remove('zDex')
}
function closeMenu() {
    contentList.classList.remove('contentListAct')
    contentList.classList.add('none')
    menu.addEventListener('click', openMenu)
    menu.removeEventListener('click', closeMenu)
    menu.setAttribute('src', './imagenes/menuIcon.png')
    headerSecond.addEventListener('mouseover', contentListAct)
    blur.classList.add('none')
    morral.classList.add('zDex')
}

let cerrarMenuForSelect = document.querySelectorAll('#cerrarMenu')
cerrarMenuForSelect.forEach(closeMenuFor => {
    closeMenuFor.addEventListener('click', closeMenuTwo)
});
function closeMenuTwo() {
    contentList.classList.remove('contentListAct')
    contentList.classList.add('none')
    menu.addEventListener('click', openMenu)
    menu.removeEventListener('click', closeMenu)
    menu.setAttribute('src', './imagenes/menuIcon.png')
    headerSecond.addEventListener('mouseover', contentListAct)
    blur.classList.add('none')
    morral.classList.add('zDex')
}

let morral = document.getElementById('morral')
let cartaHeader = document.getElementById('cartaHeader')
let permitirBoton = document.getElementById('permitirBoton')
let negarBoton = document.getElementById('negarBoton')
let botellaHeader = document.getElementById('botellaHeader')
let ballenaHeader = document.getElementById('ballenaHeader')
let cartaBety = document.getElementById('itemCartaBety')
let textoMorral = document.getElementById('textoMorral')
let cartaBetyAbierta = document.getElementById('cartaBetyAbierta')

cartaBety.addEventListener('click', abrirCartaHeader)
botellaHeader.addEventListener('click', abrirCartaHeader)
function abrirCartaHeader() {
    cartaHeader.classList.remove('none')
    botellaHeader.classList.add('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    cartaHeader.classList.add('zDex')
    blur.classList.remove('none')
    abrirCarta.play()
    cartaBety.classList.remove('none')
    textoMorral.classList.add('none')
    cosasMorral.classList.add('none')
    morral.addEventListener('click', abrirMorral)
    morral.removeEventListener('click', cerrarMorral)
}
negarBoton.addEventListener('click', negarBotonH)
function negarBotonH() {
    cartaHeader.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
    blur.classList.add('none')
    cerrarCarta.play()
}
permitirBoton.addEventListener('click', permitirBotonH)
function permitirBotonH() {
    setTimeout(() => {
        ballenaHabla.play()
    }, 8000);
    ballenaHeader.classList.add('ballenaHeader')
    ballenaHeader.classList.remove('none')
    cartaHeader.classList.add('none')
    header.classList.add('zDex')
    blur.classList.add('none')
    morral.classList.add('zDex')
    permitirBoton.classList.add('none')
    cartaBetyAbierta.setAttribute('src', './imagenes/cartaHeaderTwo.svg')
    ballenaGemido.play()
    ballenaGemido.volume = 2
}

let cosasMorral = document.getElementById('cosasMorral')
morral.addEventListener('click', abrirMorral)
function abrirMorral() {
    cosasMorral.classList.remove('none')
    blur.classList.remove('none')
    morral.removeEventListener('click', abrirMorral)
    morral.addEventListener('click', cerrarMorral)
}
function cerrarMorral() {
    cosasMorral.classList.add('none')
    blur.classList.add('none')
    morral.addEventListener('click', abrirMorral)
    morral.removeEventListener('click', cerrarMorral)
}

let arañaConLinterna = document.getElementById('arañaConLinterna')
let arañaSinRaton = document.getElementById('arañaSinRaton')
let ratonViento = document.getElementById('ratonViento')
let luzVioletaGrab = document.getElementById('luzVioletaGrab')
let ratonGrab = document.getElementById('ratonGrab')
let itemLuzVioleta = document.getElementById('itemLuzVioleta')
let itemRaton = document.getElementById('itemRaton')
let linternaActivador = document.getElementById('linternaActivador')
let violeta = document.getElementById('violeta')
let cartaSecreta = document.getElementById('cartaSecreta')

linternaActivador.addEventListener('click', activarVioleta)
function activarVioleta() {
    violeta.classList.remove('none')
    linternaActivador.removeEventListener('click', activarVioleta)
    linternaActivador.addEventListener('click', desactivarVioleta)
    cartaSecreta.setAttribute('src', './imagenes/documentoCajaFuerte.svg')
    itemDocumentoSecreto.setAttribute('src', './imagenes/itemDocumentoSecretoTwo.svg')
    imagenDatasAlim.setAttribute('src', './imagenes/datasAlimTwo.png')
}
function desactivarVioleta() {
    violeta.classList.add('none')
    linternaActivador.addEventListener('click', activarVioleta)
    linternaActivador.removeEventListener('click', desactivarVioleta)
    cartaSecreta.setAttribute('src', './imagenes/documentoCajaFuerteBlanco.svg')
    itemDocumentoSecreto.setAttribute('src', './imagenes/itemDocumentoSecreto.svg')
    imagenDatasAlim.setAttribute('src', './imagenes/datasAlim.png')
}
ratonViento.addEventListener('click', function () {
    textoMorral.classList.add('none')
    itemRaton.classList.remove('none')
    ratonGrab.classList.add('zDex')
    ratonViento.classList.add('none')
    ratonGrab.classList.remove('none')
    ratonGrab.classList.add('grabItem')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    arañaConLinterna.removeEventListener('click', arañaClickOne)
    arañaConLinterna.addEventListener('click', arañaClickTwo)
    setTimeout(() => {
        ratonGrab.classList.add('none')
        ratonGrab.classList.remove('grabItem')
        blur.classList.add('none')
        header.classList.add('zDex')
        morral.classList.add('zDex')
    }, 6000);
})
arañaConLinterna.addEventListener('click', arañaClickOne)
function arañaClickOne() {
    arañaSinRaton.classList.remove('none')
    arañaSinRaton.classList.add('arañaSinRatonMensaje')
    setTimeout(() => {
        arañaSinRaton.classList.remove('arañaSinRatonMensaje')
        arañaSinRaton.classList.add('none')
    }, 6000);
}
function arañaClickTwo() {
    linternaActivador.classList.remove('none')
    itemLuzVioleta.classList.remove('none')
    itemRaton.classList.add('none')
    luzVioletaGrab.classList.add('zDex')
    luzVioletaGrab.classList.add('grabItem')
    arañaConLinterna.classList.remove('pointer')
    arañaConLinterna.setAttribute('src', './imagenes/arañaIntroTwo.svg')
    luzVioletaGrab.classList.remove('none')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    arañaConLinterna.removeEventListener('click', arañaClickTwo)
    setTimeout(() => {
        luzVioletaGrab.classList.remove('grabItem')
        luzVioletaGrab.classList.add('none')
        blur.classList.add('none')
        header.classList.add('zDex')
        morral.classList.add('zDex')
    }, 6000);
}

let sliderContainerPosters = document.getElementById('sliderContainerPosters')
let postersComic = document.getElementsByClassName('posterComic')
const botonAntes = document.getElementById('botonAntes')
const botonDespues = document.getElementById('botonPasar')

let contadorPosters = 0
const sizePoster = 100 / postersComic.length

function moverPoster() {
    sliderContainerPosters.style.transform = `translateX(-${contadorPosters * (100 / postersComic.length)}%)`
}
botonAntes.addEventListener('click', function () {
    if (contadorPosters <= 0){
        contadorPosters = postersComic.length - 1
    }
    else {
        contadorPosters--
    }
    moverPoster()
})
botonDespues.addEventListener('click', function () {
    if (contadorPosters >= postersComic.length - 1){
        contadorPosters = 0
    }
    else {
        contadorPosters++
    }
    moverPoster()
})

let abrirSobreSecreto = document.getElementById('abrirSobreSecreto')
let sobreSecreto = document.getElementById('sobreSecreto')
let sobreSecretoAbrir = document.getElementById('sobreSecretoAbrir')
let cerrarSobre = document.getElementById('cerrarSobre')
let itemSobreRobotica = document.getElementById('itemSobreRobotica')

itemSobreRobotica.addEventListener('click', abrirSobre)
abrirSobreSecreto.addEventListener('click', abrirSobre)
function abrirSobre(){
    textoMorral.classList.add('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    sobreSecreto.classList.remove('none')
    sobreSecreto.classList.add('zDex')
    abrirSobreSecreto.classList.add('none')
    blur.classList.remove('none')
    itemSobreRobotica.classList.remove('none')
    cosasMorral.classList.add('none')
}
sobreSecreto.addEventListener('click', function () {
    sobreSecretoAbrir.setAttribute('src', './imagenes/sobreSecretoComicTwo.svg')
    sobreSecreto.classList.remove('pointer')
    cerrarSobre.classList.remove('none')
})
cerrarSobre.addEventListener('click', function() {
    header.classList.add('zDex')
    morral.classList.add('zDex')
    sobreSecreto.classList.add('none')
    sobreSecreto.classList.remove('zDex')
    abrirSobreSecreto.classList.remove('none')
    blur.classList.add('none')
})

let sectionComic = document.querySelector('.sectionComic')
let selectCajaFuerte = document.getElementById('selectCajaFuerte')
let desSelectCajaFuerte = document.getElementById('desSelectCajaFuerte')
let cajafuerte = document.getElementById('cajaFuerte')
let cajaFuerteMode = document.getElementById('cajaFuerteMode')
let cajaFuerteModeTwo = document.getElementById('cajaFuerteModeTwo')
let CajaFuerteInput = document.getElementById('CajaFuerteInput')
let enterCode = document.getElementById('enterCode')
const codeCorrect = '1602'
let contadorErroresCode = 0
let globoTimeBlock = document.getElementById('globoTimeBlock')
let timeOutBlock = document.getElementById('timeOutBlock')
let timeOutblockCounter = 16

selectCajaFuerte.addEventListener('click', function () {
    cajafuerte.classList.remove('none')
    cajafuerte.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
desSelectCajaFuerte.addEventListener('click', function () {
    cajafuerte.classList.add('none')
    cajafuerte.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})
enterCode.addEventListener('click', function () {
    if (CajaFuerteInput.value === codeCorrect){
        CajaFuerteInput.style.color = 'green'
        enterCode.classList.add('none')
        setTimeout(() => {
            cajaFuerteMode.classList.add('none')
            cajaFuerteModeTwo.classList.remove('none')
            CajaFuerteInput.classList.add('none')
            sectionComic.classList.remove('sectionComicFondoOne')
            sectionComic.classList.add('sectionComicFondoTwo')
            recogerCartaCajaFuerte.classList.remove('none')
        }, 1000);
    }
    else{
        CajaFuerteInput.classList.add('animationIncorrectCode')
        CajaFuerteInput.value = ''
        setTimeout(() => {
            CajaFuerteInput.classList.remove('animationIncorrectCode')
        }, 600);
        contadorErroresCode++
        if (contadorErroresCode === 3) {
            setTimeout(() => {
                cajafuerte.classList.add('none')
                cajafuerte.classList.remove('zDex')
                blur.classList.add('none')
                header.classList.add('zDex')
                morral.classList.add('zDex')
                contadorErroresCode = 0
                selectCajaFuerte.classList.add('none')
                globoTimeBlock.classList.remove('none')
                const intervalTimeBlock = setInterval(() => {
                    timeOutblockCounter--
                    timeOutBlock.textContent = timeOutblockCounter
                    if (timeOutblockCounter === 0) {
                        clearInterval(intervalTimeBlock)
                        timeOutblockCounter = 15
                        timeOutBlock.textContent = timeOutblockCounter
                        globoTimeBlock.classList.add('none')
                    }
                }, 1000);
                setTimeout(() => {
                    selectCajaFuerte.classList.remove('none')
                }, 15000);
            }, 500);
        }
    }
})

let itemDocumentoSecreto = document.getElementById('itemDocumentoSecreto')
let recogerCartaCajaFuerte = document.getElementById('recogerCartaCajaFuerte')
let cerrarCartaSecreta = document.getElementById('cerrarCartaSecreta')
let containerCartaSecreta = document.getElementById('containerCartaSecreta')

itemDocumentoSecreto.addEventListener('click', function () {
    containerCartaSecreta.classList.remove('none')
    containerCartaSecreta.classList.add('zDex')
    linternaActivador.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    cosasMorral.classList.add('none')
})
recogerCartaCajaFuerte.addEventListener('click', function () {
    itemDocumentoSecreto.classList.remove('none')
    textoMorral.classList.add('none')
    containerCartaSecreta.classList.remove('none')
    recogerCartaCajaFuerte.classList.add('none')
    containerCartaSecreta.classList.add('zDex')
    cajafuerte.classList.add('none')
    cajafuerte.classList.remove('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
    sectionComic.classList.remove('sectionComicFondoTwo')
    sectionComic.classList.add('sectionComicFondoThree')
    selectCajaFuerte.classList.add('none')
})
cerrarCartaSecreta.addEventListener('click', function () {
    containerCartaSecreta.classList.add('none')
    containerCartaSecreta.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

const kyleSelectAnim = lottie.loadAnimation({
    container: document.getElementById('kyleSelectAnim'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'clips/Kyle/kyleSelect.json'
})
let kyleSelect = document.getElementById('kyleSelect')
kyleSelect.addEventListener('mouseover', kyleHover)
function kyleHover() {
    kyleSelectAnim.setDirection(1)
    kyleSelectAnim.play()
    kyleSelect.removeEventListener('mouseover', kyleHover)
    kyleSelect.addEventListener('mouseout', kyleHoverOut)
}
function kyleHoverOut() {
    kyleSelectAnim.setDirection(-1)
    kyleSelectAnim.play()
    kyleSelect.addEventListener('mouseover', kyleHover)
    kyleSelect.removeEventListener('mouseout', kyleHoverOut)
}

const jimboSelectAnim = lottie.loadAnimation({
    container: document.getElementById('jimboSelectAnim'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'clips/Jimbo/jimboSelect.json'
})
let jimboSelect = document.getElementById('jimboSelect')
jimboSelect.addEventListener('mouseover', jimboHover)
function jimboHover() {
    jimboSelectAnim.setDirection(1)
    jimboSelectAnim.play()
    jimboSelect.removeEventListener('mouseover', jimboHover)
    jimboSelect.addEventListener('mouseout', jimboHoverOut)
}
function jimboHoverOut() {
    jimboSelectAnim.setDirection(-1)
    jimboSelectAnim.play()
    jimboSelect.addEventListener('mouseover', jimboHover)
    jimboSelect.removeEventListener('mouseout', jimboHoverOut)
}

const maggieSelectAnim = lottie.loadAnimation({
    container: document.getElementById('maggieSelectAnim'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'clips/Maggie/maggieSelect.json'
})
let maggieSelect = document.getElementById('maggieSelect')
maggieSelect.addEventListener('mouseover', maggieHover)
function maggieHover() {
    maggieSelectAnim.setDirection(1)
    maggieSelectAnim.play()
    maggieSelect.removeEventListener('mouseover', maggieHover)
    maggieSelect.addEventListener('mouseout', maggieHoverOut)
}
function maggieHoverOut() {
    maggieSelectAnim.setDirection(-1)
    maggieSelectAnim.play()
    maggieSelect.addEventListener('mouseover', maggieHover)
    maggieSelect.removeEventListener('mouseout', maggieHoverOut)
}

const alimSelectAnim = lottie.loadAnimation({
    container: document.getElementById('alimSelectAnim'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'clips/Alim/alimSelect.json'
})
let alimSelect = document.getElementById('alimSelect')
alimSelect.addEventListener('mouseover', alimHover)
function alimHover() {
    alimSelectAnim.setDirection(1)
    alimSelectAnim.play()
    alimSelect.removeEventListener('mouseover', alimHover)
    alimSelect.addEventListener('mouseout', alimHoverOut)
}
function alimHoverOut() {
    alimSelectAnim.setDirection(-1)
    alimSelectAnim.play()
    alimSelect.addEventListener('mouseover', alimHover)
    alimSelect.removeEventListener('mouseout', alimHoverOut)
}

const petaloSelectAnim = lottie.loadAnimation({
    container: document.getElementById('petaloSelectAnim'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'clips/Petalo/petaloSelect.json'
})
let selectPetaloOsc = document.getElementById('selectPetaloOsc')
let petaloSelect = document.getElementById('petaloSelect')
petaloSelect.addEventListener('mouseover', petaloHover)
function petaloHover() {
    selectPetaloOsc.classList.remove('opacityCero')
    selectPetaloOsc.classList.add('opacityOscPetalo')
    petaloSelectAnim.setDirection(1)
    petaloSelectAnim.play()
    petaloSelect.removeEventListener('mouseover', petaloHover)
    petaloSelect.addEventListener('mouseout', petaloHoverOut)
}
function petaloHoverOut() {
    selectPetaloOsc.classList.add('opacityCero')
    selectPetaloOsc.classList.remove('opacityOscPetalo')
    petaloSelectAnim.setDirection(-1)
    petaloSelectAnim.play()
    petaloSelect.addEventListener('mouseover', petaloHover)
    petaloSelect.removeEventListener('mouseout', petaloHoverOut)
}

let datasKyle = document.getElementById('datasKyle')
let datasJimbo = document.getElementById('datasJimbo')
let datasMaggie = document.getElementById('datasMaggie')
let datasAlim = document.getElementById('datasAlim')
let datasPetalo = document.getElementById('datasPetalo')
let imagenDatasAlim = document.getElementById('imagenDatasAlim')
const cerrarDatasKyle = document.getElementById('cerrarDatasKyle')
const cerrarDatasJimbo = document.getElementById('cerrarDatasJimbo')
const cerrarDatasMaggie = document.getElementById('cerrarDatasMaggie')
const cerrarDatasAlim = document.getElementById('cerrarDatasAlim')
const cerrarDatasPetalo = document.getElementById('cerrarDatasPetalo')

let kyleSelectTwo = document.getElementById('kyleSelectTwo')
let jimboSelectTwo = document.getElementById('jimboSelectTwo')
let maggieSelectTwo = document.getElementById('maggieSelectTwo')
let alimSelectTwo = document.getElementById('alimSelectTwo')
let petaloSelectTwo = document.getElementById('petaloSelectTwo')

kyleSelect.addEventListener('click', function () {
    datasKyle.classList.remove('scaleCero')
    datasKyle.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
kyleSelectTwo.addEventListener('click', function () {
    datasKyle.classList.remove('scaleCero')
    datasKyle.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
cerrarDatasKyle.addEventListener('click', function () {
    datasKyle.classList.add('scaleCero')
    datasKyle.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})
jimboSelect.addEventListener('click', function () {
    datasJimbo.classList.remove('scaleCero')
    datasJimbo.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
jimboSelectTwo.addEventListener('click', function () {
    datasJimbo.classList.remove('scaleCero')
    datasJimbo.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
cerrarDatasJimbo.addEventListener('click', function () {
    datasJimbo.classList.add('scaleCero')
    datasJimbo.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})
maggieSelect.addEventListener('click', function () {
    datasMaggie.classList.remove('scaleCero')
    datasMaggie.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
maggieSelectTwo.addEventListener('click', function () {
    datasMaggie.classList.remove('scaleCero')
    datasMaggie.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
cerrarDatasMaggie.addEventListener('click', function () {
    datasMaggie.classList.add('scaleCero')
    datasMaggie.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})
alimSelect.addEventListener('click', function () {
    datasAlim.classList.remove('scaleCero')
    datasAlim.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
alimSelectTwo.addEventListener('click', function () {
    datasAlim.classList.remove('scaleCero')
    datasAlim.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
cerrarDatasAlim.addEventListener('click', function () {
    datasAlim.classList.add('scaleCero')
    datasAlim.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})
petaloSelect.addEventListener('click', function () {
    datasPetalo.classList.remove('scaleCero')
    datasPetalo.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
petaloSelectTwo.addEventListener('click', function () {
    datasPetalo.classList.remove('scaleCero')
    datasPetalo.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
cerrarDatasPetalo.addEventListener('click', function () {
    datasPetalo.classList.add('scaleCero')
    datasPetalo.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusKyle = document.getElementById('dataPlusKyle')
let itemFiguraKyle = document.getElementById('itemFiguraKyle').addEventListener('click', function () {
    dataPlusKyle.classList.remove('scaleCero')
    dataPlusKyle.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusKyle = document.getElementById('cerrarDataPlusKyle').addEventListener('click', function () {
    dataPlusKyle.classList.add('scaleCero')
    dataPlusKyle.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusMaggie = document.getElementById('dataPlusMaggie')
let itemFiguraMaggie = document.getElementById('itemFiguraMaggie').addEventListener('click', function () {
    dataPlusMaggie.classList.remove('scaleCero')
    dataPlusMaggie.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusMaggie = document.getElementById('cerrarDataPlusMaggie').addEventListener('click', function () {
    dataPlusMaggie.classList.add('scaleCero')
    dataPlusMaggie.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusPetalo = document.getElementById('dataPlusPetalo')
let itemFiguraPetalo = document.getElementById('itemFiguraPetalo').addEventListener('click', function () {
    dataPlusPetalo.classList.remove('scaleCero')
    dataPlusPetalo.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusPetalo = document.getElementById('cerrarDataPlusPetalo').addEventListener('click', function () {
    dataPlusPetalo.classList.add('scaleCero')
    dataPlusPetalo.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusGorra = document.getElementById('dataPlusGorra')
let itemGorra = document.getElementById('itemGorra').addEventListener('click', function () {
    dataPlusGorra.classList.remove('scaleCero')
    dataPlusGorra.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusGorra = document.getElementById('cerrarDataPlusGorra').addEventListener('click', function () {
    dataPlusGorra.classList.add('scaleCero')
    dataPlusGorra.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusCamisa = document.getElementById('dataPlusCamisa')
let itemCamisa = document.getElementById('itemCamisa').addEventListener('click', function () {
    dataPlusCamisa.classList.remove('scaleCero')
    dataPlusCamisa.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusCamisa = document.getElementById('cerrarDataPlusCamisa').addEventListener('click', function () {
    dataPlusCamisa.classList.add('scaleCero')
    dataPlusCamisa.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let dataPlusPendon = document.getElementById('dataPlusPendon')
let itemPendon = document.getElementById('itemPendon').addEventListener('click', function () {
    dataPlusPendon.classList.remove('scaleCero')
    dataPlusPendon.classList.add('zDex')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
})
let cerrarDataPlusPendon = document.getElementById('cerrarDataPlusPendon').addEventListener('click', function () {
    dataPlusPendon.classList.add('scaleCero')
    dataPlusPendon.classList.remove('zDex')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})

let code = document.getElementById('code')
let sapoCode = document.getElementById('sapoCode')
let itemCode = document.getElementById('itemCode')
let cerrarCode = document.getElementById('cerrarCode')

itemCode.addEventListener('click', entregaCode)
sapoCode.addEventListener('click', saleSapo)
function saleSapo() {
    sapoCode.classList.add('sapoCodeSale')
    sapoCode.removeEventListener('click', saleSapo)
    setTimeout(() => {
        sapoCode.addEventListener('click', entregaCode)
    }, 2000);
}
function entregaCode() {
    sapoCode.setAttribute('src', './imagenes/sapoCodeTwo.svg')
    sapoCode.classList.remove('pointer')
    sapoCode.removeEventListener('click', entregaCode)
    cosasMorral.classList.add('none')
    itemCode.classList.remove('none')
    textoMorral.classList.add('none')
    code.classList.add('zDex')
    code.classList.remove('scaleCero')
    blur.classList.remove('none')
    header.classList.remove('zDex')
    morral.classList.remove('zDex')
}
cerrarCode.addEventListener('click', function () {
    code.classList.remove('zDex')
    code.classList.add('scaleCero')
    blur.classList.add('none')
    header.classList.add('zDex')
    morral.classList.add('zDex')
})