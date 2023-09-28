# NFT Marketplace

## Deployed Contracts

- [NFT contract](https://mumbai.polygonscan.com/address/0x5c7270609eb45e9265a91e0baf7079ae11119bb4#code)
- [Marketplace](https://mumbai.polygonscan.com/address/0x7c4baddc6be74e1639c3e4a3bbd2b54f4e556d40)

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Ethers](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ipfs](https://ipfs.io/) (Metadata storage)
- [React routers](https://v5.reactrouter.com/) (Navigational components)

## Requirements For Initial Setup

- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)

## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:

```
$ cd nft_marketplace
$ npm install
```

### 3. Boot up local development blockchain

```
$ cd nft_marketplace
$ npx hardhat node
```

### 4. Connect development blockchain accounts to Metamask

- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.

### 5. Migrate Smart Contracts

`npx hardhat run src/backend/scripts/deploy.js --network localhost`

### 6. Run Tests

`$ npx hardhat test`

### 7. Launch Frontend

`$ npm run start`

## License

MIT
