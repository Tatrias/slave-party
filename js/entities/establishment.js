Game.entities["establishment"] = (function () {

  function init() {};

  function Establishment () {
    this.name = "";
    this.cash = 0.0;
    this.capacity = 0;
    this.reputation = 0;
    this.popularity = 0;
    this.longevity = 0;
    this.inventory = new Object();
    this.location = null;
  };
  
  return {
    init : init,
    Establishment : Establishment
  };

})();

Game.entities.establishment.init();
