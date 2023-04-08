'use strict'

const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

// quando ele pega o elemento 'open-register' e adiciona um evento(execute o evento), evento click. O evento chama a função moveOverlay
document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)



// --------------------------------------------------------------------------------------------------------------------------------------------



const loginContainerHome = document.getElementById('login-container-home')

const moveOverlayHome = () => loginContainer.classList.toggle('move')

// quando ele pefa o elemento 'open-register' e adiciona um evento(execute o evento), evento click. O evento chama a função moveOverlay
document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)