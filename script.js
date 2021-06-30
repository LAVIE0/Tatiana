var modal = document.querySelectorAll('a[href^="#"]');
var divs = document.querySelectorAll('.modal-overlay')
function adicionarClasse(index){
    divs[index].classList.add('ativo');
}

modal.forEach((itemModal, index)=>{
    itemModal.addEventListener('click', function(){
        adicionarClasse(index);
    })
})
var exit = document.querySelectorAll(".exit img");
function sairModal(index){
    divs[index].classList.remove('ativo');
}
exit.forEach((itemImg, index)=>{
    itemImg.addEventListener('click', function(){
        sairModal(index);
    })
})



function entrouMouse(){
    let imagens = document.querySelector("#img01").src = "img/hover1.svg";
    let texto = document.querySelector("#p01").innerHTML = "Converse com a madrinha";
}
function saiuMouse(){
    let imagens = document.querySelector("#img01").src = "img/Asset 2.svg";
    let texto = document.querySelector("#p01").innerHTML = " ";
}
function entrouMouse01(){
    let imagens = document.querySelector("#img02").src = "img/hover2.svg";
    let texto = document.querySelector("#p02").innerHTML = "Solicitar troca de madrinha";
}
function saiuMouse01(){
    let imagens = document.querySelector("#img02").src = "img/Asset 3.svg";
    let texto = document.querySelector("#p02").innerHTML = " ";
}




