
var modal = document.querySelectorAll('a[href^="#"]');
var div = document.querySelector('.modal-overlay');

function adicionarClasse(){
    div.classList.add('ativo');
    }
modal[0].addEventListener('click', adicionarClasse)
var div2 = document.querySelector('.modal-overlay1');

function adicionarClasse1(){
    div2.classList.add('ativo')
}
modal[1].addEventListener('click', adicionarClasse1)

var div3 = document.querySelector('.modal-overlay2');

function adicionarClasse2(){
div3.classList.add('ativo');
}
function sairModal(){
    div.classList.remove('ativo');   
    div2.classList.remove('ativo');
    div3.classList.remove('ativo');
}
modal[2].addEventListener('click', adicionarClasse2)


