window.onload = function(){
    window.location.pathname.includes('header.html')
    fetch('header.html')
    .then(Response => Response.text())
    .then(html =>{
        document.getElementById('cabecalho').innerHTML = html
    })
    .catch(Error=> console.error('Erro ao carregar'))

}