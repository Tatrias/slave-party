Game["views"] = ( function () {

	var dom = {
	  homeView      : document.querySelector("#home-view"),
	  estView       : document.querySelector("#est-view"),
    charView      : document.querySelector("#char-view"),
    calView       : document.querySelector("#cal-view"),
    homeButton    : document.querySelector("#home-button"),
    estButton     : document.querySelector("#est-button"),
    charButton    : document.querySelector("#char-button"),
    calButton     : document.querySelector("#cal-button"),
	};
	
	var views = {
	  home            : dom.homeView,
	  establishments  : dom.estView,
	  characters      : dom.charView,
	  calendar        : dom.calView,
	};
	
  var currentView = views["home"];
	
  function bindUIActions() {
    dom.homeButton.onclick = function () { console.log("home clicked"); showView("home") };
    dom.estButton.onclick = function () { console.log("ests clicked"); showView("establishments") };
    dom.charButton.onclick = function () { console.log("chars clicked"); showView("characters") };
    dom.calButton.onclick = function () { console.log("calendar clicked"); showView("calendar") };
  };

  function init() {
    bindUIActions();
    console.log("views loaded");
  };
  
  function showView(view) {
    currentView.style.display = "none";
    currentView = views[view];
    currentView.style.display = "block";
  };
  
  return {
    init : init,
  };

})();

Game.views.init();
