var i = 0 ;
var slidesimage = ["../Images/hot5.jpg","../Images/hot1+().jpg","../Images/hot1++().jpg"];
var slideshow1 = function () {
    document.getElementById('slideshow1').src = slidesimage[i];
    if ( i < slidesimage.length - 1 ) {
        i++;
    } else{
        i = 0 ;
    }
    setTimeout("slideshow1()" , 2000);
}
slideshow1();
var d = 0 ;
var slidesimage2 = ["../Images/hot6.jpg","../Images/hot2+.jpg","../Images/hot2++.jpg"];
var slideshow2 = function () {
    document.getElementById('slideshow2').src = slidesimage2[d];
    if ( d < slidesimage.length - 1 ) {
        d++;
    } else{
        d = 0 ;
    }
    setTimeout("slideshow2()" , 2000);
}
slideshow2();
var v = 0 ;
var slidesimage3 = ["../Images/HOT3.jpg","../Images/hot3+.jpg","../Images/hot3++.jpg"];
var slideshow3 = function () {
    document.getElementById('slideshow3').src = slidesimage3[v];
    if ( v < slidesimage.length - 1 ) {
        v++;
    } else{
        v = 0 ;
    }
    setTimeout("slideshow3()" , 2000);
}



slideshow3();