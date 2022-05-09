var i = 0;
var sildeimage = ["mkdkfn.jpg","NaamaBay-1.jpg","shark bay.jpg",
"ffffff.jpeg", "hhhhhh.jpg"];
    

//expression function

var sildeShow1 = function () {
    document.sildeShow1.src = sildeimage[i];
    if (i < sildeimage.length- 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("sildeShow1()", 2000);
}
sildeShow1()
