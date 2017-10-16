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
      from: "0x6d9567856C6afe3F93E33F3EE3D7EEaCce45cA37",
      network_id: 4,
      gas: 4000000 // Gas limit used for deploys
    }
  }
};
