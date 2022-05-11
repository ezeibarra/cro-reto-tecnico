function initTest(){
//aqui tu magia para lograr realizar el experimento
//accedo a la lista ordenada que contiene las cards
var lista = document.querySelector(".item-list")
//accedo al hijo numero dos para acceder a data
var data = document.querySelector(".item-list > li:nth-child(2)")
//accedo al div.counter hijo 1 para quitar animacion
var tecnologiaCounterHijo1 = document.querySelector(".item-list > li:nth-child(3) > div:nth-child(1) > div:nth-child(1)")
//accedo al div.counter hijo 2 para quitar animacion
var tecnologiaCounterHijo2 = document.querySelector(".item-list > li:nth-child(3) > div:nth-child(1) > div:nth-child(2)")
//accedo al div.content para quitar animacion
var tecnologiaContent = document.querySelector(".item-list > li:nth-child(3) > div:nth-child(2)")
//aplicaciones
//escondo la card de data con un display none
data.style.display = "none"
//quito animaciones .counter hijo 1
tecnologiaCounterHijo1.style.opacity = "1"
tecnologiaCounterHijo1.style.transform = "translate(0px, 0px)"
//quito animaciones .counter hijo 2
tecnologiaCounterHijo2.style.opacity = "1"
tecnologiaCounterHijo2.style.transform = "translate(0px, 0px)"
//quito animaciones div content
tecnologiaContent.style.opacity = "1"
tecnologiaContent.style.transform = "translate(0px, 0px)"
//cambio el 3 de tecnologia por un 2 para corregir numeracion
tecnologiaCounterHijo2.innerText ="2"
}
initTest()

