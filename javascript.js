


function sub(event){
  
  alert('Submitted Your Message!');
}

function lightBox(img){
  document.querySelector('.container').style.display = 'block';
  const image = document.getElementById('show');
  image.src = img.src;
}

function goway(){

    document.querySelector('.container').style.display = 'none'

  
}

function side(){
  const side = document.querySelector('.menu-side');
  if(side.style.display === 'none'){
    side.style.display = 'flex';
  }
  else{
   
    side.style.display = 'none';
    
  }
}