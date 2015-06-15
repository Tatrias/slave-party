var Game = Game || {};

Game = ( function () {

  var model = {
    "hour"        : 0, 
    "minute"      : 0,
    "day"         : 0,
    "month"       : 0,
    "year"        : 0,
    "location"    : null,
    "player"      : null,
    "interaction" : 0,
  };

  function get(property) {
    return model[property];
  };

  function init() {
  
  	$.getScript("js/entities/entities.js")
  	  .fail(function(jqxhr, settings, exception) {
  	      console.log(jqxhr);
  	      console.log(settings);
  	      console.log(exception);
  	  });
  	  
      Game.views.init();
      Game.views.update();
  };
  
  function runAction(number) {
    model.interaction = Game.interactions.list[model.interaction].actions[number];
    Game.views.update();
  }

  return {
    init      : init,
    get       : get,
    runAction : runAction,
  };

})();

Game["interactions"] = (function () {

  function Action (description, consequent, duration) {
    this.description = description;
    this.consequent = consequent;
    this.duration = duration;
  };

  function Interaction (description, actions) {
    this.description = description;
    this.actions = actions;
  };

  var list = [];
  
  list[0] = new Interaction(
      "You're bored and don't feel like doing shit.",
      [new Action("Rest", 1, 30)]
  );
  
  list[1] = new Interaction(
      "You rested for thirty minutes. You're bored and can't come to think of anything else to do.",
      []
  );
  
  return {
    list : list,
  };

})();

Game["views"] = ( function () {

  /* Relevant DOM elements */
	var dom = {};
	
	/* Common code to all views */
	function View(dom) {
	  this.dom = dom;
	  this.show = function() { this.dom.style.display = "block"; };
	  this.hide = function() { this.dom.style.display = "none"; };
	};
	
	var views = {
	  "home"            : new View(dom.homeView),
	  "establishments"  : new View(dom.estView),
	  "characters"      : new View(dom.charView),
	  "calendar"        : new View(dom.calView),
	};
	
	/* Views update functions */
	views.home["update"] = function() {
	  var minute = Game.get("minute").toString();
	  dom.homeClock.textContent       = Game.get("hour") + ":" + ((minute.length == 2) ? minute : "0" + minute);
	  var location = Game.get("location");
	  dom.homeLocName.textContent     = (location == null) ? "Undefined location" : location.name;
	  
	  /* Current interaction */
	  var interaction = Game.interactions.list[Game.get("interaction")];
	  dom.homeText.textContent        = interaction.description;
    function createActionElement(action) {
      var actionSpan = document.createElement("span");
      actionSpan.className = "action-text";
      actionSpan.textContent = action.description + " / " + action.duration;
      return actionSpan;
    };
    var availableActions = interaction.actions;
    for(var i=0; i<availableActions.length; i++) {
  	  dom.actionFrame.appendChild(createActionElement(availableActions[i]));
  	}
	};
	
	views.establishments["update"] = function() {
	
	};
	
  views.characters["update"] = function() {
	
	};

	views.calendar["update"] = function() {
	
	};
	
  var currentView = views["home"];

  function bindUIActions() {
    dom.homeButton.onclick = function () { switchToView("home") };
    dom.estButton.onclick = function () { switchToView("establishments") };
    dom.charButton.onclick = function () { switchToView("characters") };
    dom.calButton.onclick = function () { switchToView("calendar") };
  };
  
  function switchToView(view) {
    currentView.hide()
    currentView = views[view];
    currentView.update();
    currentView.show();
  };
  
  function update() {
    currentView.update();
  }
  
  function init() {
    dom = {
	    /* View DIVs */
	    "homeView"      : document.querySelector("#home-view"),
	    "estView"       : document.querySelector("#est-view"),
      "charView"      : document.querySelector("#char-view"),
      "calView"       : document.querySelector("#cal-view"),
      /* Navbar buttons */
      "homeButton"    : document.querySelector("#home-button"),
      "estButton"     : document.querySelector("#est-button"),
      "charButton"    : document.querySelector("#char-button"),
      "calButton"     : document.querySelector("#cal-button"),
      /* Home view elements */
      "homeLocName"   : document.querySelector("#home-loc-name"),
      "homeLocPicture": document.querySelector("#home-loc-pic"),
      "homeText"      : document.querySelector("#home-text"),
      "homeClock"     : document.querySelector("#home-clock"),
      /* Establishment view elements */
      /* Character view elements */
      /* Calendar view elements */
      /* Avatar and actions */
      "actionFrame"   : document.querySelector("#action-frame"),
	  };
    console.log(dom);
    bindUIActions();
  };
  
  return {
    init : init,
    update : update,
  };

})();

$(document).ready(Game.init);
