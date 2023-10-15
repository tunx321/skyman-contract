include .env

run:
	npx hardhat run scripts/deploy.js --network ${NETWORK}


verify:
ifdef address
	npx hardhat verify --network ${NETWORK} address ${OWNER}
else
	npx hardhat verify --network ${NETWORK} 0x45c8C9Fb241F31F444CDd16Ebed460D3e3331326 ${OWNER}
endif


server:
	npm run start
