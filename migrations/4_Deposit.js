const Storage = artifacts.require("Deposit")

module.exports = function (deployer) {
    deployer.deploy(Storage)
}