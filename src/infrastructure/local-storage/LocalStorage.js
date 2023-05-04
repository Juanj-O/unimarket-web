const KEY_CART_MARKET = "cartMarket";

export const LocalStorage = {
  cartMarket: {
    saveCartMarket(cart) {
      localStorage.setItem(KEY_CART_MARKET, JSON.stringify(cart));
    },
    getCartMarket() {
      return JSON.parse(localStorage.getItem(KEY_CART_MARKET) || "{}");
    },
  },

  deleteAllLocalStorage() {
    localStorage.removeItem(KEY_CART_MARKET);
  },
};
