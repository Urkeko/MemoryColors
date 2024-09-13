const colores = [
 document.getElementById('color1'),
 document.getElementById('color2'),
 document.getElementById('color3'),
 document.getElementById('color4'),
 document.getElementById('color5'),
 document.getElementById('color6'),
 document.getElementById('color7'),
 document.getElementById('color8'),
 document.getElementById('color9'),
 document.getElementById('color10'),
 document.getElementById('color11'),
 document.getElementById('color12'),
 document.getElementById('color13'),
 document.getElementById('color14'),
 document.getElementById('color15'),
 document.getElementById('color16')
];

let secuencia=[];
function iluminarAleatoriamente(){

  colores.forEach(circulo =>circulo.classList.remove('iluminar'));
  const circuloAleatorio = Math.floor(Math.random()*colores.length)

  secuencia.push(circuloAleatorio);
    
  colores [circuloAleatorio].classList.add('iluminar');

  
  setTimeout(()=> {
    colores[circuloAleatorio].classList.remove('iluminar');
  },1000);
}

let intervalo;

function comenzarParpadeo(){
    intervalo = setInterval (iluminarAleatoriamente, 1000);
}
function detenerParpadeo(){
    clearInterval(intervalo);
    colores.forEach(circulo =>circulo.classList.remove('iluminar'));
}
comenzarParpadeo();

setTimeout (detenerParpadeo, 10000)

let secuenciaUsuario = [];

colores.forEach((color, index)=>{
  color.addEventListener('click', ()=> {
    secuenciaUsuario.push(index);
    color.classList.add('iluminar');

    setTimeout(()=>{
      color.classList.remove('iluminar');
    },500);

    verificarSecuencia();
  });
  
});

function verificarSecuencia(){
  console.log("Secuencia correcta:", secuencia);
  
  if (secuenciaUsuario.length === secuencia.length){
    if (secuenciaUsuario.join(',')===secuencia.join(',')){
      swal('"Excelent", "Crack", "success"');
    }else{
      swal({
        title: "¡Very Badly!",
        icon: "error",
        button: "try again"
      }).then(() => {
        location.reload(); 
      });
    }
    secuenciaUsuario =[];
  }

}