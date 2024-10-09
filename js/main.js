//instancio radio que recebe todos os label manual_btn e um cont para passar os slides
var radio = document.querySelector('.manual_btn');
var cont = 1;

//ativo o radio1 para exibir o primeiro slide
document.getElementById('radio1').checked = true;

//de 7 em 7 segundos passa de slide chamando a função
setInterval(() =>{
  proxima_img()
}, 7000);

//função que passa slide
function proxima_img(){

  //adiciona mais um no cont para ele valer o numero do slide que deve ser exibido
  cont ++;

  //limita o cont até 3 por que é a quantidade de imagens que é exibida no carrosel
  if(cont > 3){
    cont = 1;
  }

  //ativa o radio no valor do cont passando de slide
  document.getElementById('radio' + cont).checked = true;
}