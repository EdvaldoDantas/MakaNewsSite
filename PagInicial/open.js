let menu_escondido = document.getElementById('menu-escondido')
let menu = document.getElementById('menu')
let fechado = true

menu.addEventListener('click',()=>{
   
    if(menu_escondido.classList.contains('fechado')){
        menu_escondido.classList.remove('fechado')
        menu_escondido.classList.add('abrir')
    }
    else if(menu_escondido.classList.contains('abrir')){
        menu_escondido.classList.remove('abrir')
        menu_escondido.classList.add('fechado')
    }
})

definicao = document.getElementById("Def")
definicao.addEventListener('click',()=>{
    window.location.href = 'Definições.html'
})
document.addEventListener('click',(event)=>{
   const cli = menu.contains(event.target)
   if(!cli){
        menu_escondido.classList.remove('abrir')
        menu_escondido.classList.add('fechado')
   }
})
document.addEventListener('scroll',()=>{
    menu_escondido.classList.remove('abrir')
    menu_escondido.classList.add('fechado')
})
