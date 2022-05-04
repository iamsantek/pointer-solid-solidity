# Keyboards dispenser

This project is part of the [Pointer.gg](https://www.pointer.gg/) web3 development path.

# Stack
**Front**: React + Next.js   
**Web3**: Hardhat + AlchemyAPI + Solidity

## Requirements

You need to provide an HTTP endpoint to [AlchemyAPI](https://alchemy.com/?r=DI5MzQ2Nzg2NzA2O) or other web3 platform, and a private Ethereum key to interact with the smart contract.

```bash
1. Create a .env file in the root directory of the project with the following variables:
export NODE_API_URL=<YOUR_ALCHEMY_API_ENDPOINT>
export RINKEBY_PRIVATE_KEY=<YOUR_PRIVATE_ETHEREUM_KEY>
2. $ source .env
```
## How to run locally

```bash
$ yarn
$ yarn dev
```
