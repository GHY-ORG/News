var hashSection = window.location.hash.match(/section(\d+)/);
var index = hashSection ? ~~hashSection[1] : 1;

moveToNavigatorItem(index + 1);
moveToSection(index);
if (index != 5) {
    activeSection_AutoScroll();
    activeSection_leftMenu();
}