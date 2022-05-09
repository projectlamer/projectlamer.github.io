var i = 0;
var slideImage = ["../Images/Karibu - Restaurant.jpeg",
    "../Images/Makai restaurant.jpeg",
    "../Images/Nino's Restaurant.jpeg",
    "../Images/Bongoyo Restobar.jpeg",
    "../Images/Corallo Restaurant.jpeg",
    "../Images/El Halaka.jpeg",
    "../Images/Red Dragon.jpeg",
    "../Images/Zia Amelia.jpeg"];

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