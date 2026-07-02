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

let volverViñeta = document.getElementById('volverViñeta')
let pasarViñeta = document.getElementById('pasarViñeta')
let contadorProgres = 0

/* CODIGO DE VIÑETAS */

/* Viñeta Numero 1 */
let V1V1= document.getElementById('V1V1')
let container = document.querySelector('.secViñetaOne')
let rocas = document.querySelector('.introRocas')
let textEmp = document.querySelector('.textEmpezar')
let wall = document.querySelector('#RocaOne')
let wall2 = document.querySelector('#RocaTwo')
let wall3 = document.querySelector('#RocaThree')
let wall4 = document.querySelector('#RocaFour')
let wall5 = document.querySelector('#RocaFive')
let wall6 = document.querySelector('#RocaSix')
let emerg = document.getElementById('emerg')
let viñetaInt = document.querySelector('.vñt')
let pasarViñetaTransitionN1 = document.getElementById('pasarViñetaTransitionN1')

const pasos = new Audio('recursosV1/Pasos.mp3')
const static = new Audio('recursosV1/Estatica.mp3')
const hit = new Audio('recursosV1/Hit.mp3')
const hitTwo = new Audio('recursosV1/RocaOne.mp3')
const hitThree = new Audio('recursosV1/RocaTwo.mp3')
const hitFour = new Audio('recursosV1/RocaThree.mp3')
const fRock = new Audio('recursosV1/FinalRock.mp3')
const hitMadera = new Audio('recursosV1/GolpeMadera.mp3')
const Camera = new Audio('recursosV1/Camera.mp3')
const Puerta = new Audio('recursosV1/Puerta.mp3')
const Llueve = new Audio('recursosV1/LluviaTrueno.mp3')

wall.addEventListener('click', pClick)
function pClick() {
    textEmp.classList.add('none')
    wall.classList.add('none')
    wall2.classList.remove('none')
    container.classList.add('streak')
    hit.play()
    hit.volume = 0.6
}

wall2.addEventListener('click', sClick)
function sClick() {
    wall2.classList.add('none')
    wall3.classList.remove('none')
    container.classList.add('streak2')
    hitTwo.play()
    hitTwo.volume = 0.7
}

wall3.addEventListener('click', tClick)
function tClick() {
    wall3.classList.add('none')
    wall4.classList.remove('none')
    container.classList.add('streak3')
    hitThree.play()
    hitThree.volume = 0.8
}

wall4.addEventListener('click', fClick)
function fClick() {
    wall4.classList.add('none')
    wall5.classList.remove('none')
    container.classList.add('streak4')
    hitFour.play()
    hitFour.volume = 0.9
}

wall5.addEventListener('click', fiClick)
function fiClick() {
    wall5.classList.add('none')
    wall6.classList.remove('none')
    rocas.classList.add('desaparecer')
    container.classList.add('streak5')
    container.classList.remove('mouse')
    fRock.play()
    fRock.volume = 0.3
    setTimeout(() => {
        Llueve.play()
        Llueve.loop = true
        Llueve.volume = 0.2
        emerg.classList.add('emerg')
    }, 500);
}

let scann = lottie.loadAnimation({
    container: document.getElementById('scann'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'recursosV1/scanner/Scanner.json'
})
let contSca = document.querySelector('.Cscann')
let punto = document.querySelector('.Pint')

punto.addEventListener('click', actScann)
function actScann() {
    contSca.classList.remove('none')
    contSca.classList.add('gradAparece')
    setTimeout(() => {
        scann.play()
        punto.classList.add('none')
        setTimeout(() => {
            contSca.classList.add('gradDesaparece')
            Puerta.play()
        }, 2500);
    }, 1000);
    setTimeout(() => {
        Camera.play()
        Camera.volume = 0.5
    }, 1000);
    setTimeout(() => {
        volverViñeta.classList.remove('none')
        volverViñeta.addEventListener('click', volverV1)
        V1V1.classList.add('none')
        V2V2.classList.remove('none')
        V2V2.classList.add('flexD')
        Llueve.pause()
    }, 3500);
}
let contVcerr = document.querySelector('.containerVentana')
let ventCerr = document.querySelector('.ventCerr')
let actVcerr = document.querySelector('.actVentanaCerr')
actVcerr.addEventListener('click', ActivarVent)
function ActivarVent () {
    contVcerr.classList.remove('none')
    contVcerr.classList.add('gradAparece')
    actVcerr.classList.add('none')
}
let puntoDos = document.querySelector('.PintTwo')
let tblOne = document.querySelector('.tbl1')
let tblTwo = document.querySelector('.tbl2')
let tblThree = document.querySelector('.tbl3')
let tblFour = document.querySelector('.tbl4')
tblFour.addEventListener('click', function () {
    tblFour.classList.add('aniTabla')
    tblThree.addEventListener('click', tablaCae2)
    hit.play()
})
function tablaCae2() {
    tblThree.classList.add('aniTabla')
    tblTwo.addEventListener('click', tablaCae3)
    hit.play()
}
function tablaCae3() {
    tblTwo.classList.add('aniTabla')
    tblOne.addEventListener('click', tablaCae4)
    hit.play()
}
function tablaCae4() {
    tblOne.classList.add('aniTabla')
    hit.play()
    setTimeout(() => {
        puntoDos.classList.remove('none')
        puntoDos.classList.add('gradAparece')
    }, 1000);
}
let ventanaInt = lottie.loadAnimation({
    container: document.getElementById('ventanaInt'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'recursosV1/ventana/Ventana.json'
})
let contVentInt = document.querySelector('.Cventana')
puntoDos.addEventListener('click', function () {
    ventCerr.classList.add('zoomVent')
    puntoDos.classList.remove('animPints')
    puntoDos.classList.add('gradDesaparece')
    const bajaLluvia = setInterval(() => {
        if (Llueve.volume > 0.01) {
            Llueve.volume -= 0.01
        }
        else {
            Llueve.volume = 0
            clearInterval(bajaLluvia)
        }
    }, 90);
    setTimeout(() => {
        contVentInt.classList.remove('none')
        contVentInt.classList.add('gradAparece')
        ventanaInt.play()
        static.play()
        static.volume = 0.2
    }, 1850);
    setTimeout(() => {
        const subirStatic = setInterval(() => {
            if (static.volume < 0.5) {
                static.volume += 0.01
            }
            else {
                static.volume = 0.6
                clearInterval(subirStatic)
            }
        }, 100);
        pasos.play()
    }, 5200);
    viñetaInt.setAttribute('src', './recursosV1/ViñetaTwoTablasC - Int.svg')
    setTimeout(() => {
        contVcerr.classList.add('none')
        contVentInt.classList.add('none')
        Llueve.volume = 0.2
        static.volume = 0
    }, 11000);
})

/* Viñeta Numero 2 */
function volverV1() {
    pasarViñeta.classList.remove('none')
    pasarViñeta.addEventListener('click', pasarV1)
    V1V1.classList.remove('none')
    V2V2.classList.add('none')
    V2V2.classList.remove('flexD')
    volverViñeta.classList.add('none')
    volverViñeta.removeEventListener('click', volverV1)

    estaticLamp.pause()
    llamadaSal.pause()
    Llueve.play()
}

let V2V2 = document.getElementById('V2V2')
let baldosa = document.querySelector('.baldosa')
let abrirDema = document.querySelector('.abrirDema')
let cerrarDema = document.querySelector('.cerrarDema')
let demanda = document.querySelector('.demandaCont')
let viñetaIntTwo = document.querySelector('.viñetaInt')
let conversacion = document.querySelector('.conversacion')
let text1 = document.querySelector('.t1')
let text2 = document.querySelector('.t2')
let text3 = document.querySelector('.t3')
let text4 = document.querySelector('.t4')

let abrirDemSound = new Audio('./recursosV2/AbrirHoja.mp3')
let cerrarDemSound = new Audio('./recursosV2/Cerrar.mp3')
let caeBal = new Audio('./recursosV2/Hit.mp3')
let rompBal = new Audio('./recursosV2/RompeBal.mp3')
let contesta = new Audio('./recursosV2/Contesta .mp3')
let estaticLamp = new Audio('./recursosV2/Lampara.mp3')
let llamadaSal = new Audio('./recursosV2/Llamada.mp3')

viñetaIntTwo.addEventListener('mouseover', actSound)
function actSound() {
    estaticLamp.play()
    estaticLamp.loop = true
    llamadaSal.play()
    llamadaSal.volume = 0.1
    llamadaSal.loop = true
    viñetaIntTwo.removeEventListener('mouseover', actSound)
}

baldosa.addEventListener('click', baldCae)
function baldCae() {
    baldosa.classList.add('baldosaCae')
    caeBal.play()
    caeBal.volume = 0.2
    setTimeout(() => {
        rompBal.play()
        rompBal.volume = 0.8
    }, 1000);
}
abrirDema.addEventListener('click', function () {
    abrirDemSound.play()
    demanda.classList.remove('none')
    demanda.classList.add('demandaApar')
    demanda.classList.remove('demandaDesa')
    viñetaIntTwo.setAttribute('src', './recursosV2/ViñetaInt2 - Two.svg')
    viñetaIntTwo.classList.add('blurV2')
    viñetaIntTwo.classList.remove('blurDes')
    bocaOneCont.classList.add('blurV2')
    bocaOneCont.classList.remove('blurDes')
    bocaTwoCont.classList.add('blurV2')
    bocaTwoCont.classList.remove('blurDes')
    conversacion.classList.add('blurV2')
    conversacion.classList.remove('blurDes')
    llamadaSal.volume = 0.02
    estaticLamp.volume = 0.2
})
cerrarDema.addEventListener('click', function () {
    cerrarDemSound.play()
    setTimeout(() => {
        demanda.classList.add('none')
        demanda.classList.remove('demandaApar')
    }, 500);
    demanda.classList.add('demandaDesa')
    viñetaIntTwo.setAttribute('src', './recursosV2/ViñetaInt - Two.svg')
    viñetaIntTwo.classList.remove('blurV2')
    viñetaIntTwo.classList.add('blurDes')
    llamadaSal.volume = 0.1
    estaticLamp.volume = 1
    bocaOneCont.classList.remove('blurV2')
    bocaOneCont.classList.add('blurDes')
    bocaTwoCont.classList.remove('blurV2')
    bocaTwoCont.classList.add('blurDes')
    conversacion.classList.remove('blurV2')
    conversacion.classList.add('blurDes')
})
let bocaOneCont = document.querySelector('.BocaOne')
let bocaTwoCont = document.querySelector('.BocaTwo')
let bocaOne = lottie.loadAnimation({
    container: document.getElementById('BocaOne'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'recursosV2/BocaOne/boca1.json'
})
let bocaTwo = lottie.loadAnimation({
    container: document.getElementById('BocaTwo'),
    render: 'svg',
    loop: false,
    autoplay: false,
    path: 'recursosV2/BocaTwo/Boca2.json'
})
let puntBoca = document.querySelector('.puntoDint')
puntBoca.addEventListener('click', puntoAct)
function puntoAct() {
    puntBoca.classList.add('puntoDes')
    setTimeout(() => {
        conversacion.classList.remove('none')
        text1.classList.remove('none')
    }, 800);
    setTimeout(() => {
        puntBoca.removeEventListener('click', puntoAct)
        bocaOne.play()
        text1.classList.add('none')
        text2.classList.remove('none')
    }, 4000);
    setTimeout(() => {
        puntBoca.addEventListener('click', puntoActTwo)
        puntBoca.classList.remove('puntoDes')
        puntBoca.classList.add('puntoApa')
        bocaOneCont.classList.add('none')
        bocaTwoCont.classList.remove('none')
        setTimeout(() => {
            puntBoca.classList.remove('puntoApa')
        }, 1000);
    }, 6500);
    llamadaSal.volume = 0
    llamadaSal.loop = false
    contesta.play()
}
function puntoActTwo() {
    text2.classList.add('none')
    text3.classList.remove('none')
    puntBoca.classList.add('puntoDes')
    puntBoca.classList.remove('puntoApa')
    setTimeout(() => {
        bocaTwo.play()
        text3.classList.add('none')
        text4.classList.remove('none')
        setTimeout(() => {
            text4.classList.add('none')
            contadorProgres++
            pasarViñeta.classList.remove('none')
            pasarViñeta.addEventListener('click', pasarV2)
        }, 4000);
    }, 5000);
}
function pasarV1() {
    volverViñeta.addEventListener('click', volverV1)
    pasarViñeta.removeEventListener('click', pasarV1)
    V1V1.classList.add('none')
    V2V2.classList.remove('none')
    V2V2.classList.add('flexD')
    volverViñeta.classList.remove('none')

    estaticLamp.play()
    llamadaSal.play()
    Llueve.pause()

    if (contadorProgres === 1) {
    } else{
        pasarViñeta.classList.add('none')
    }
}