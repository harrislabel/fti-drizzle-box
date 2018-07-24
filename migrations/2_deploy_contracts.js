var SimpleStorage = artifacts.require("SimpleStorage");
var HarrisCoin = artifacts.require("HarrisCoin");
var ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(HarrisCoin);
  deployer.deploy(ComplexStorage);
};
