var pre = document.querySelectorAll(".button-left");
var next = document.querySelectorAll(".button-right");
var bannerHolder = document.querySelector(".bannerHolder");
var bannerList = bannerHolder.querySelector(".bannerList");
var banners = bannerHolder.querySelector(".bannerList li");

function moveToSection(index) {
    var leftLength = (index - 1) * 100;
    // bannerList.style.left = "-" + leftLength + "%";
    $(bannerList).css("left", "-" + leftLength + "%", );
    $(bannerList).attr("now-index", index);

}

function movePre(index) {
    moveToSection(index - 1);
    moveToNavigatorItem(index - 1);
}

function moveNext(index) {
    moveToSection(index + 1);
    moveToNavigatorItem(index + 1);
}

bannerList.onclick = function(e) {
    var item = e.target.parentNode; /**/
    if (item.attributes["btn-lr-index"] == undefined)
        return;
    var index = parseInt(item.attributes["btn-lr-index"].value);
    if (index <= 4) {
        movePre(index + 1);
    } else {
        moveNext(index - 4);
    }
}

$(function() {
    var status = true;

    function mouseEvent(event, delta) {
        var index = parseInt($(bannerList).attr("now-index")) || 1;
        if (delta > 0 && index != 1) {
            movePre(index);
            return false;
        } else if (delta < 0 && index != 5) {
            moveNext(index);
            return false;
        }
        return true;
    }

    $(document).bind('mousewheel', function(event, delta) {
        if (status) {
            status = mouseEvent(event, delta);
            setTimeout(function() {
                status = true
            }, 1500);
        }
    });
});