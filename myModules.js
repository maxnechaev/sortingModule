var addToListFunc = function(param){};
var storeList = [];

module.exports = {
  addToListFunc: function(param) {
    storeList.push(param);
    return storeList.sort(function(x, y){
      return x - y;
    });
  }
};
