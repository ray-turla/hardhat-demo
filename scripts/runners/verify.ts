import { run } from "hardhat";
export default async function verify (contractAddress: string, contractName: string, args: any) {
  console.log("Verifying contract:", contractName)
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args
    })
  } catch (e: any) {
    if(e.message.toLowercase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

