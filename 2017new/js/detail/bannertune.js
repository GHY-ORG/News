var pre = document.querySelectorAll(".button-left");
var next = document.querySelectorAll(".button-right");
var bannerHolder = document.querySelector(".bannerHolder");
var bannerList = bannerHolder.querySelector(".bannerList");
var banners = bannerHolder.querySelectorAll(".banner");

function moveToSection(index) {
    for (var i in banners)
        banners[i].className = "banner";
    banners[index - 1].className = "banner section_on";
}

function movePre(index){
	moveToSection( index-1 );
	moveToNavigatorItem( index );
	activeSection_AutoScroll();
	activeSection_leftMenu();
}

function moveNext(index){
	moveToSection( index + 1 );
	moveToNavigatorItem( index+2 );
	if(index+1 != 5){
		activeSection_AutoScroll();
		activeSection_leftMenu();
	}
}

bannerList.onclick = function(e){
	var item = e.target;						/**/
	if( item.attributes["btn-lr-index"] == undefined )
		return;
	var index = parseInt(item.attributes["btn-lr-index"].value);
	if( index <= 4 ){
		movePre( index+1 );
	}
	else{
		moveNext( index-4 );
	}
}
