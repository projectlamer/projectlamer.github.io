var i = 0;
var slideImage = ["../Images/Albatros White Beach .jpeg",
    "../Images/Arabia Azur Resort.jpeg",
    "../Images/Gravity Hotel & Aqua Park HurghadaOpens .jpeg",
    "../Images/Sky View Suites Hotel.jpeg",
    "../Images/Steigenberger Aqua Magic Red Sea.jpeg",
    "../Images/Sunrise Holidays Resort.jpeg",
    "../Images/TUI MAGIC LIFE Kalawy.jpeg",
    "../Images/Kempinski Hotel Soma Bay.jpeg"];

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