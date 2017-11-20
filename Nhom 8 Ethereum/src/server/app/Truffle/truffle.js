module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x176916e03344eef8B7c85e18D488d71437966333",
      network_id: 4,
      gas: 4000000 // Gas limit used for deploys
    }
  }
};
