const hre = require("hardhat");

async function main() {
  const Skyman = await hre.ethers.getContractFactory("Skyman")
  const skyman = await Skyman.deploy("0xd3106F16102e2AEF6AC5D3E371c121885aa4f82e");

  await skyman.waitForDeployment()
  console.log("Skyman: ", await skyman.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
