var i = 0;
var slideImage = ["../Images/Dolhine House.jpeg",
    "../Images/Giftun Island.jpeg",
    "../Images/Paradise Island.jpeg",
    "../Images/Hurghada Desert.jpeg",
    "../Images/Hurghada Museum.jpeg",
    "../Images/Sharm El-Naga.jpeg"];

//expression function

var slideShow1 = function () {
    document.slideShow1.src = slideImage[i];
    if (i < slideImage.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideShow1()", 1500);
}
slideShow1()