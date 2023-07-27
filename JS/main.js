/* DOM in JS */

/*let headTag = document.head;*/
/*let bodyTag = document.body*/
/*let havola = document.documentURI*/
/*let formalar = document.forms*/
/*let rasmlar = document.images*/
/*console.log(rasmlar);*/

/* Events in JS:onclick,ondblclick,onchange,onfocus,onblur,oninput */

/*function meniBirMartabos(){
    alert("Siz battonni bir marta bosdinggiz")
}*/
/*function meniikkimartabos(){
    alert("Siz batonni ikki marta bosdinggiz")
}*/
/*function tanlash(event){
    alert("Siz" +  event.target.value + "ni tanladinggiz!")
}*/
/*function inputgabosish(){
    console.log("inputda bosildi!")
}*/
/*function inputdachiqish(){
    console.log("inputda chiqildi!")
}*/
/*function yozish(event){
    console.log(event.target.value)
}*/
/*document.querySelector(".matnTegi").addEventListener("copy",function (event){
    console.log("Diqqat! Diqqat! Sizdan" + event.target.value + "nomli maxviy xujjatlar kochirilyapti")
})*/

function harakatlanish(e){
    console.log(e.clientX,e.clientY)
}
function kirish(){
    console.log("hududga kirish!")
}
function chiqish(){
    console.log("huddudan chiqildi")
}


