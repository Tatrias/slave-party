Game["entities"] = ( function () {

  function init() {
    $.getScript("js/entities/drinks.js");
    $.getScript("js/entities/locations.js");
    $.getScript("js/entities/establishment.js");
  };
  
  return {
    init : init
  };

})();

Game.entities.init();
