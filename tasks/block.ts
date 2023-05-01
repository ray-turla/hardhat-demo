import { task } from "hardhat/config"

task("block", "Prints current block number", async (taskArgs, hre) => {
  const blockNumber = await hre.ethers.provider.getBlockNumber()
  console.log("Block Number:", blockNumber)
})