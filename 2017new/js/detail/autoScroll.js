var sections = document.querySelectorAll(".pic-panel");
var activeSection_AutoScroll_timer;


function activeSection_AutoScroll() {
    var currentSection;
    var pics = new Array();
    var dots = new Array();
    var picBox, titleBox;
    var picControl = document.querySelector(".pic-control");
    var picTime = 4000;		// 自动轮播时间
    var totalnum, current;

    function init() {
        var currentPart = document.querySelector(".navigator_On");
        var currentIndex = parseInt(currentPart.attributes["data-index"].value);
        current = currentIndex;
        if (current == 1) return;
        currentSection = sections[currentIndex - 1];
        pics = currentSection.querySelectorAll(".pic-item");
        dots = currentSection.querySelectorAll(".pic-control li");
        picBox = currentSection.querySelector(".pic-box");
        picControl = currentSection.querySelector(".pic-control");
        titleBox = currentSection.querySelector(".title-list");
        totalnum = dots.length;
    }

    function nextIndex(index) {
        if (index == (totalnum - 1)) return 0;
        else return index + 1;
    }

    function clearAll(dots) {
        for (var i in dots)
            dots[i].className = "";
    }

    function AutoScroll_moveTo(index) {
        var dot = dots[index];
        var leftLength = index * 240;
        var titleLeftLength = index * 150;
        picBox.style.left = "-" + leftLength + "px";
        titleBox.style.left = "-" + titleLeftLength + "px";
        clearAll(dots);
        dot.className = "active";
    }

    function AutoScroll_moveNext() {
        var currentDot = currentSection.querySelector(".pic-control li.active");
        var currentIndex = parseInt(currentDot.attributes["data-index"].value);
        AutoScroll_moveTo(nextIndex(currentIndex));
    }

    function resetTimer() {
        if (activeSection_AutoScroll_timer != undefined || activeSection_AutoScroll_timer != null)
            clearInterval(activeSection_AutoScroll_timer);
    }

    function setTimer() {
        if (current == 1) return;
        activeSection_AutoScroll_timer = setInterval(function() { AutoScroll_moveNext() }, picTime);
    }

    init();
    resetTimer();
    setTimer();
    picControl.onmouseover = function(e) {
        if (e.target.attributes["data-index"] == undefined) return;
        var dot = e.target;
        if (dot.className == "active") return;
        resetTimer();
        var index = dot.attributes["data-index"].value;
        AutoScroll_moveTo(index);
        setTimer();
    }
}

activeSection_AutoScroll();