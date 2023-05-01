import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import CONST from "./constants";
import * as dotenv from "dotenv";
import { getDefaultNetwork } from "./utils";
import "./tasks";
dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: getDefaultNetwork(process.env.ENVIRONMENT),
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: CONST.chainId.sepolia,
    },
    localhost: {
      url: process.env.LOCAL_RPC_URL,
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
