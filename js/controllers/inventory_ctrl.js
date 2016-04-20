(function() {
  'use strict';

  var salesTax = 0.0575;

  angular
    .module('shopular')
    .controller('InventoryController', InventoryController);

  InventoryController.$inject = ['inventoryFactory'];

  function InventoryController(inventoryFactoryObject) {
    this.inventory = inventoryFactoryObject.itemsForSale;
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
        console.log(this);
        this.inventory.push(this.newItem);
        this.newItem = {
          name: "",
          price: "",
          quantity: "",
          color: "",
          discount: ""
        };
        // TODO: What I need to do here is figure out how to use the add to storage fn
        // What does it take in? It takes in the full item list which is called
        // this.inventory right now.
        // Ok, how do I call that fn? It came along with the inventoryFactoryObject
        // Do I still have access to that? Yes.
        inventoryFactoryObject.save(this.inventory);
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
