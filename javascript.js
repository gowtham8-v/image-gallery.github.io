

function showCat(){
  if(document.querySelector('.cat-card').style.display === 'none'){
    document.querySelector('.cat-card').style.display = 'block';
    document.querySelector('.menu-side').style.display = 'none';
  }
  else{
    document.querySelector('.cat-card').style.display = 'none';
    document.querySelector('.menu-side').style.display = 'none';
  }
}

function scrollAbt(){
  const scroll = document.querySelector('.about');
  scroll.scrollIntoView({behavior: "smooth"})
  document.querySelector('.cat-card').style.display='none';
  document.querySelector('.menu-side').style.display = 'none';
}

function scrollHome(){
    const go = document.querySelector('.inside-content');
  go.scrollIntoView({behavior: "smooth"})
  document.querySelector('.cat-card').style.display='none';
  document.querySelector('.menu-side').style.display = 'none';
}

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

function scrollLast(){
  const last = document.querySelector('.last');
  last.scrollIntoView({behavior: "smooth"});
  document.querySelector('.cat-card').style.display='none';
  document.querySelector('.menu-side').style.display = 'none';
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