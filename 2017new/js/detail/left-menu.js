var sections = document.querySelectorAll(".banner");
var activeName = new Array("first-title-on-1", "first-title-on-2", "first-title-on-3", "first-title-on-4");

function activeSection_leftMenu() {
    var currentIndex;
    var currentSection;
    var menuLeft = document.querySelector(".menuLeft");
    var articleListItem;
    var contentPanel;
    var articlePanel = document.querySelector(".article-list-holder");
    var contentList;
    var menuTitles = new Array();
    var articleTitles = new Array();
    var contentLists = new Array();
    var contentItems = new Array();
    var triangles = new Array();

    function init() {
        var currentPart = document.querySelector(".navigator_On");
        currentIndex = parseInt(currentPart.attributes["data-index"].value);
        if (currentPart.attributes["data-index"] == undefined) currentIndex = 1;
        currentSection = sections[currentIndex - 1];

        menuLeft = currentSection.querySelector(".menuLeft");
        menuTitles = menuLeft.querySelectorAll(".mtitle");
        triangles = menuLeft.querySelectorAll(".triangle");
        if (currentIndex != 1) {
            articlePanel = currentSection.querySelector(".article-list-holder");
            articleList_set = articlePanel.querySelectorAll(".article-list");
            articleListItem = articleList_set[0];
            articleTitles = articleListItem.querySelectorAll("li");
        }
        contentPanel = currentSection.querySelector(".content-panel");
        contentLists = contentPanel.querySelectorAll(".content-list");
        contentList = contentLists[0];
        contentItems = contentList.querySelectorAll(".contentItem");
        contentItems[0].className = "contentItem contentItem_on";
    }

    function clearMenuTitle() {
        var activeTitle = menuLeft.querySelector("." + activeName[currentIndex - 1]);
        activeTitle.className = "mtitle";
        var triangle = activeTitle.querySelector(".triangle");
        triangle.className = "triangle";
    }

    function clearArticleList() {
        var activeArticleList = articlePanel.querySelector(".article-list-on");
        activeArticleList.className = "article-list";
    }

    function clearArticleTitle() {
        var activeArticleTitle = articleListItem.querySelector(".article-list-title-on");
        activeArticleTitle.className = "";
    }

    function clearContentList() {
        var activeContentList = contentPanel.querySelector(".content-list-on");
        activeContentList.className = "content-list";
    }

    function clearContentItem() {
        var activeItem = contentList.querySelector(".contentItem_on");
        activeItem.className = "contentItem";
    }

    function change_menuTitle(index) {
        clearMenuTitle();
        console.log(menuTitles);
        menuTitles[index - 1].className = "mtitle " + activeName[currentIndex - 1];
        triangles[index - 1].className = "triangle triangleOn";
    }

    function change_articleList(index) {
        clearArticleList();
        articleList_set[index - 1].className = "article-list-on article-list";
    }

    function change_articleTitle(index) {
        clearArticleTitle();
        articleTitles[index - 1].className = "article-list-title-on";
    }

    function change_contentList(index) {
        clearContentList();
        contentLists[index - 1].className = "content-list content-list-on";
    }

    function change_content(index) {
        clearContentItem();
        contentItems[index - 1].className = "contentItem contentItem_on";
    }

    init();
    menuLeft.onclick = function(e) {
        var item = e.target;
        if (item.className == "") item = item.parentNode;
        if (item.attributes["title-m-list"] == undefined)
            return;
        var menu_title = item;
        var title_index = parseInt(menu_title.attributes["title-m-list"].value);

        if (currentIndex == 1) {
            contentList = contentLists[0];
            contentItems = contentList.querySelectorAll("li");
            change_menuTitle(title_index);
            change_content(title_index);
        } else {
            var title_index = parseInt(menu_title.attributes["title-m-list"].value);
            change_menuTitle(title_index);
            change_articleList(title_index);
            change_contentList(title_index);
            articleListItem = articleList_set[title_index - 1];
            articleListItem = articleListItem.querySelector(".article-list-item");
            articleTitles = articleListItem.querySelectorAll("li");
            contentList = contentLists[title_index - 1];
            contentItems = contentList.querySelectorAll(".contentItem");
            contentItems[0].className = "contentItem contentItem_on";
        }

        // articleListItem.onclick = function(e){
        // 	var item = e.target;
        // 	if( item.attributes["title-a-index"] == undefined )
        // 		return;
        // 	var article_title = item;
        // 	var title_index = parseInt( article_title.attributes["title-a-index"].value );
        // 	change_articleTitle(title_index);
        // 	change_content(title_index);
        // }
    }
    articlePanel.onclick = function(e) {
        var item = e.target;
        if (item.attributes["title-a-index"] == undefined)
            return;
        var article_title = item;
        var title_index = parseInt(article_title.attributes["title-a-index"].value);
        change_articleTitle(title_index);
        change_content(title_index);
        //currentSection.scrollTop = 0;
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

activeSection_leftMenu();