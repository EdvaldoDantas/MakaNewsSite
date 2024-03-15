let menu_escondido = document.getElementById('menu-escondido')
let menu = document.getElementById('menu')
const nav_menu = document.getElementById('nav-menu')
let fechado = true
let aberto = false

let firstPosition = ()=>{
    nav_menu.style ="position: absolute; right:-173px"
    nav_menu.style.transition = 'right 0.5s ease'
}
var posicao = parseInt(nav_menu.style.right)
window.onload = firstPosition()

    menu.addEventListener('click',()=>{
        let posicao = parseInt(nav_menu.style.right)
        if(fechado){
            posicao = -12
            nav_menu.style.right = `${posicao}px`
            fechado = false
            aberto = true
        }
        else if(aberto){
            posicao = -173
            nav_menu.style.right = `${posicao}px` 
            fechado = true
            aberto = false
        }
    })

document.addEventListener('click',(event)=>{
    let cont = menu.contains(event.target)
    if(!cont){
        if(aberto){
            posicao = -173
            nav_menu.style.right = `${posicao}px` 
            fechado = true
            aberto = false
        }
    }
})
document.addEventListener('scroll',()=>{
    if(aberto){
        posicao = -173
        nav_menu.style.right = `${posicao}px` 
        fechado = true
        aberto = false
    }
})

definicao = document.getElementById("Def")
definicao.addEventListener('click',()=>{
    window.location.href = 'Definições.html'
})
document.body.style.userSelect = 'none'

function abrirLink(){
    window.location.href = 'Chat.html'
}
