var navigatorlist = document.querySelector(".navigatorList");
var navigatorItem = document.querySelectorAll(".navigatorItem");
var slider = document.querySelector(".navigator_slider");

function moveToNavigatorItem(index) {
    var item = navigatorItem[index];
    var leftLength = $(item).offset().left + 20;
    if (index == 1)
        leftLength -= 10;
    slider.style.left = leftLength + "px";
}

navigatorlist.onclick = function(e) {
    var item = e.target.parentNode;
    if (item.attributes["data-index"] == undefined)
        return;
    var index = item.attributes["data-index"].value;
    moveToNavigatorItem(index);
    moveToSection(index);
}

/**
 * 初始定位
 */
$(function() {
    var hashSection = window.location.hash.match(/section(\d+)/);
    var index = hashSection ? ~~hashSection[1] : 1;
    moveToNavigatorItem(index);
})