(function() {
  'use strict';

  var salesTax = 0.0575;

  window.items = items;

  angular
    .module('shopular', [])
    .controller('InventoryController', InventoryController);

  function InventoryController() {
    this.inventory = items;
    // TODO: You need to fix the ref to items here. It's in the factory now
    this.tax = salesTax;

    this.newItem = {
      name: "",
      price: "",
      quantity: "",
      color: "",
      discount: ""
    };

    this.save = function saveNewItem(form) {
      if (form.$valid) {
        this.inventory.push(this.newItem);
        this.newItem = {
          name: "",
          price: "",
          quantity: "",
          color: "",
          discount: ""
        };
        form.$setPristine();
        form.$setUntouched();
      } else {
        // form.$setDirty();
        console.log('invalid entry');
      }
    };

    this.decrement = function decrementQuantity(item) {
      if (item.quantity > 0){
        item.quantity = item.quantity - 1;
      } else {
        item.quantity = 0;
      }
    };

    this.increment = function incrementQuantity(item) {
      item.quantity = item.quantity + 1;
    };

  }

})();
