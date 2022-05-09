function over(a) {
 a.style.color="rgb(0, 51, 255)";
  a.innerHTML = "GO TO  PAGE AND SEE ";
}
function out(a) {
    a.style.color="rgba(156, 0, 8, 0.836)";
  a.innerHTML=" Just by clicking on the link that is prodived in the page .";
}
var i=0;
var slidesImage=["karnak.jpg","karnak1.jpg","karnak2.jpg"];
var slideShow = function(){
  document.slideShow.src=slidesImage[i];
  if(i<slidesImage.length-1){
    i++;
  }
  else{
    i=0;
  }
setTimeout("slideShow()", 1000);
}
slideShow();
var i=0;
var slidesImageTwo=["hatsh.jpg","hatsh1.jpg","hatsh2.jpg"];
var slideShowTwo = function(){
  document.slideShowTwo.src=slidesImageTwo[i];
  if(i<slidesImageTwo.length-1){
    i++;
  }
  else{
    i=0;
  }
setTimeout("slideShowTwo()", 1200);
}
slideShowTwo();
var i=0;
var slidesImageThree=["photo.jpeg","photo1.jpeg","photo2.jpeg"];
var slideShowThree = function(){
  document.slideShowThree.src=slidesImageThree[i];
  if(i<slidesImageThree.length-1){
    i++;
  }
  else{
    i=0;
  }
setTimeout("slideShowThree()", 1300);
}
slideShowThree();
var i=0;
var slidesImageFo=["msg.jpg","msg1.jpg","msg2.jpg"];
var slideShowFo = function(){
  document.slideShowFo.src=slidesImageFo[i];
  if(i<slidesImageFo.length-1){
    i++;
  }
  else{
    i=0;
  }
setTimeout("slideShowFo()", 1400);
}
slideShowFo();
var i=0;
var slidesImageFi=["lux.jpg","lux1.jpg","lux2.jpg"];
var slideShowFi = function(){
  document.slideShowFi.src=slidesImageFi[i];
  if(i<slidesImageFi.length-1){
    i++;
  }
  else{
    i=0;
  }
setTimeout("slideShowFi()", 1500);
}
slideShowFi();