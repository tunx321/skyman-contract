# Skyman contract
Skyman it is NFT collection that implement ERC721 interface. 

# Description
Skyman application can mint new NFT in Sepolia test network.
In this project we use Hardhat to interact with smart contract, compile, deploy it and then verify using etherscan API.
Frontend was developed in React.js and ether.js that help interact with blockchain, call function of deployed contract and interact with them.
In the furutre functionality of this application will be updated by adding storage page that will contain all NFTs that users deployed.

# How to Install and Run the Project
You need to download all dependencies using 
```zsh
npm install
```
After that create .env file and pase following lines:
1. NETWORK=(which network).
2. INFURA_URL="https://sepolia.infura.io/v3/(YOUR-API-KEY)".
3. PRIVATE_KEY=(PRIVATE KEY OF YOU METAMASK ACCOUNT).
4. ETHERSCAN_API=(API that you can get from etherscan.io).
5. OWNER="0xd3106F16102e2AEF6AC5D3E371c121885aa4f82e".

Then compile contract: 
```zsh
make compile
```
Deploy to the network:
```zsh
make deploy
```
Verify the contract:
```zsh
make address=*value* verify
```

Run server(localhost):
```zsh
make run
```

Testing:
```zsh
make ctest
```


