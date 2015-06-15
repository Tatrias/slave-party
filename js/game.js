var Game = ( function () {

  function init() {
  	$.getScript("js/entities/entities.js")
  	  .fail(function(jqxhr, settings, exception) {console.log(jqxhr, settings, exception)});
  	$.getScript("js/views/views.js")
  	  .fail(function(jqxhr, settings, exception) {console.log(jqxhr, settings, exception)});
  };
  
  return {
    init : init
  };

})();

Game.init();
