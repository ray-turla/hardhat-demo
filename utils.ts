type environment = "production" | "development" | "local";

function getDefaultNetwork(env: environment) {
  let network = "hardhat";
  switch (env) {
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

export { getDefaultNetwork };
