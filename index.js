var myModule = require('./myModules');

var printFunc = function(param){
  console.log(myModule.addToListFunc(param));
};

printFunc(9);
printFunc(4);
printFunc(6);
printFunc(2);
printFunc(1);
