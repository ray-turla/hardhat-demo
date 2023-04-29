import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import CONST from "./constants";
import * as dotenv from "dotenv";
dotenv.config();

type environment = "production" | "development" | "local"

function getDefaultNetwork(env: environment) {
  let network = "hardhat"
  switch(env) {
    case "production":
      network = "";
      break;
    case "development":
      network = "sepolia";
      break;
    default:
      break;
  }
  return network;
}


task("accounts", "Prints list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

task("network", "Prints current default network based on env values", async() => {
  const { ENVIRONMENT } = process.env
  const defaultNetwork = getDefaultNetwork(ENVIRONMENT)
  console.log("Environment", ENVIRONMENT)
  console.log("Default Network", defaultNetwork)
})

const config: HardhatUserConfig = {
  defaultNetwork: getDefaultNetwork(process.env.ENVIRONMENT),
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: CONST.chainId.sepolia,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};

export default config;
