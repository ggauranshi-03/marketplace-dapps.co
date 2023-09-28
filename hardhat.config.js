// require("@nomiclabs/hardhat-waffle");

// module.exports = {
//   solidity: "0.8.4",
//   paths: {
//     artifacts: "./src/backend/artifacts",
//     sources: "./src/backend/contracts",
//     cache: "./src/backend/cache",
//     tests: "./src/backend/test"
//   },
// };
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomicfoundation/hardhat-verify");
module.exports = {
  solidity: "0.8.4",
  networks: {
    polygon_mumbai: {
      url: process.env.YOUR_ALCHEMY_POLYGON_API_HTTP_URL, // Replace with your Alchemy Polygon API HTTP URL
      accounts: [process.env.PRIVATE_KEY], // Replace with your private key or use environment variables
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  etherscan: {
    apiKey: "S61IGACWCHDUBND6PUX81E2QAMQGJRJVE4", // Replace with your Etherscan API key
  },
};
