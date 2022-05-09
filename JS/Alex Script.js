var i=0;
var whereto=["../Images/qitbay.jpg","../Images/stanley.jpg","../Images/bibliotheca-alexandrina.jpg","../Images/montazah.jpg","../Images/sidi-bishr-beach.jpg" ];
function slideshow ()
{
 document.slideshow.src=whereto[i]
 if(i<4){
     i++;
 }else{
     i=0;
 }
 setTimeout("slideshow()",1500);
}
slideshow();
function mOver(obj) {
    obj.innerHTML = " <h1 class='yarb' >Ptolemaic Period <br>[332 BCE - 30 BCE] </h1> "
       obj.style.backgroundImage = "url('http://www.colores.org.es/imagenes_colores/bronceado.jpg')";
  }
  function mOut(obj) {
      obj.style.backgroundImage = "url('https://alexandrei0n.files.wordpress.com/2018/08/as.png')";
    obj.innerHTML = " "
  }
  function mOver1(obj) {
    obj.innerHTML = " <h1 class='yarb' >Romanic Period <br>[30 BCE - 641 A.D.] </h1> "
       obj.style.backgroundImage = "url('http://www.colores.org.es/imagenes_colores/bronceado.jpg')";
  }
  function mOut1(obj) {
      obj.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ancient_Rome_%28cropped%29.JPG/1024px-Ancient_Rome_%28cropped%29.JPG')";
    obj.innerHTML = " "
  }
  function mOver2(obj) {
    obj.innerHTML = " <h1 class='yarb' >Alexandria and Christianity<br>[61 A.D. -   _  ] </h1> "
       obj.style.backgroundImage = "url('http://www.colores.org.es/imagenes_colores/bronceado.jpg')";
  
  }
  function mOut2(obj) {
      obj.style.backgroundImage = "url('http://www.alexandria.gov.eg/Alex/english/images/history/christianity/Nicaea_icon.jpg')";
  
    obj.innerHTML = " "
  }
  function mOver3(obj) {
    obj.innerHTML = " <h1 class='yarb' >Islamic invasion<br>[641 A.D. -   _   ] </h1> "
       obj.style.backgroundImage = "url('http://www.colores.org.es/imagenes_colores/bronceado.jpg')";
  
  }
  function mOut3(obj) {
      obj.style.backgroundImage = "url('http://www.alexandria.gov.eg/Alex/english/images/history/islamic/%D9%85%D8%B3%D9%84%D9%85%D9%8A%D9%86.jpg')";
  
    obj.innerHTML = " "
  }