Game.entities["drinks"] = new Object();

Game.entities.drinks["Drink"] = (function(name) {
	this.name
});

Game.entities["drinks"] = {
  ABSINTHE		: new Game.entities.drinks.Drink("Absinthe"),
  BEER			: new Game.entities.drinks.Drink("Beer"),
  RUM			: new Game.entities.drinks.Drink("Rum"),
  SODA_SPACEBERRY	: new Game.entities.drinks.Drink("Spaceberry soda"),
  SODA_LIME		: new Game.entities.drinks.Drink("Lime soda"),
  TEA_BLACK		: new Game.entities.drinks.Drink("Black tea"),
  TEA_GREEN		: new Game.entities.drinks.Drink("Green tea"),
  TEA_RED			: new Game.entities.drinks.Drink("Red tea"),
  WINE_RED		: new Game.entities.drinks.Drink("Red wine"),
  WINE_WHITE		: new Game.entities.drinks.Drink("White wine"),
  WHISKEY			: new Game.entities.drinks.Drink("Whiskey")
};
