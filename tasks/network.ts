import { task } from "hardhat/config"
import { getDefaultNetwork } from "../utils";
task("network", "Prints current default network based on env values", async() => {
  const { ENVIRONMENT } = process.env
  const defaultNetwork = getDefaultNetwork(ENVIRONMENT)
  console.log("Environment:", ENVIRONMENT)
  console.log("Network:", defaultNetwork)
})