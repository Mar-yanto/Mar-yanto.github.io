const tUbahWarna = document.getElementById('tUbahWarna')
tUbahWarna.onclick = function(){
    document.body.classList.toggle('hitam')
}

const tAcakWarna = document.createElement('button')
const teksTombol = document.createTextNode('Acak Warna')
tAcakWarna.appendChild(teksTombol)
tAcakWarna.setAttribute('type', 'button')

tUbahWarna.after(tAcakWarna)

let r;
let g;
let b;
tAcakWarna.addEventListener('click', function(){
     r = Math.round(Math.random() * 255)
     g = Math.round(Math.random() * 255)
     b = Math.round(Math.random() * 255) 
    
    document.body.style.backgroundColor = 'rgb('+ r+','+ g+','+ b+')'

    return document.body.style.backgroundColor
})


const AcakWarna = document.querySelector('input[placeholder=AcakWarna]')

AcakWarna.addEventListener('click', function tAcak(){
    
    AcakWarna.value = document.body.style.backgroundColor = 'rgb('+ r+','+ g+','+ b+')'

})



const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')
const inputMerah = document.getElementsByClassName('inputMerah')
sMerah.addEventListener('input', function(){
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r+','+ g+','+ b+')' 
})


sHijau.addEventListener('input', function(){
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r+','+ g+','+ b+')'
})


sBiru.addEventListener('input', function(){
    const r = sMerah.value 
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+ r+','+ g+','+ b+')'
})

const placeholderMerah = document.querySelector('input[placeholder=placeholderMerah]')
placeholderMerah.addEventListener('click', function(){
    placeholderMerah.value = sMerah.value
})

const placeholderHijau = document.querySelector('input[placeholder=placeholderHijau]')
placeholderHijau.addEventListener('click', function(){
    placeholderHijau.value = sHijau.value
})

const placeholderBiru = document.querySelector('input[placeholder=placeholderBiru]')
placeholderBiru.addEventListener('click', function(){
    placeholderBiru.value = sBiru.value
})


const tableNode = document.querySelector('table')
tableNode.onclick = function (e){
    e.target.style.backgroundColor = e.target.innerHTML
}
 
