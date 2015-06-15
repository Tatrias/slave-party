var Game.entities["locations"] = {};

var Game.entities.locations["Location"] = (function(name, population) {
  this.name = name;
  this.population = population;
});

Game.entities.locations["list"] = {
  CICHOL_STATION	: new Game.entities.locations.Location("Cichol Station", 310),
  ESQUISSE		: new Game.entities.locations.Location("Esquisse", 560),
  NORTHRISE		: new Game.entities.locations.Location("Northrise Town", 850),
  SAMMAIL_EAST		: new Game.entities.locations.Location("East Sammail", 2160),
  SAMMAIL_WEST		: new Game.entities.locations.Location("West Sammail", 1280),
  SILVERPINE		: new Game.entities.locations.Location("Silver Pine", 330),
  SUIBNES_FRENZY	: new Game.entities.locations.Location("Suibne's Frenzy", 470)
};
  
var Game.entities.locations["travelRoutePrices"] = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

