var navigatorlist = document.querySelector(".navigatorList");
var navigatorItem = document.querySelectorAll(".navigatorItem");
var slider = document.querySelector(".navigator_slider");
var slider_color = new Array("#fda44c", "#e47474", "#43c08c", "#4392c0", "#ffffff");

function clear_navigator() {
    for (var i in navigatorItem)
        navigatorItem[i].className = "navigatorItem";
}

function moveToNavigatorItem(index) {
    var item = navigatorItem[index];
    var leftLength = $(item).offset().left;
    slider.style.left = leftLength + "px";
    slider.style.borderColor = slider_color[index - 2];
    clear_navigator();
    navigatorItem[index].className = "navigatorItem navigator_On";
}

navigatorlist.onclick = function(e) {
    var item = e.target.parentNode;
    if (item.attributes["data-index"] == undefined)
        return;
    var index = parseInt(item.attributes["data-index"].value);
    moveToNavigatorItem(index + 1);
    moveToSection(index);
    if (index != 5) {
        activeSection_AutoScroll();
        activeSection_leftMenu();
    }
}