var Game = ( function () {

  function init() {
  	$.getScript("js/entities/entities.js");
  }
  
  return {
    init : init
  }

})();

Game.init();
