import { ethers, network } from "hardhat";
import { verify } from "./runners";
import CONST from "../constants";

export async function deployMood() {
    const { chainId } = network.config;
    const initialMoodValue = "Neutral";
    const contractName = "Mood"
    const MoodFactory = await ethers.getContractFactory(contractName);
    console.log(`Deploying ${contractName} contract...`)
    const mood = await MoodFactory.deploy(initialMoodValue);
    await mood.deployed();
    console.log(`Contract ${contractName} deployed to ${mood.address}`);
    if(chainId === CONST.chainId.sepolia) {
        console.log("Deployed Sepolia Testnet, ENTER verify process")
        console.log("Waiting for block transactions...")
        await mood.deployTransaction.wait(6)
        verify(mood.address, contractName, [initialMoodValue])
    }
    const currentMood = mood.getMood()
    console.log(`You feel ${currentMood} today!`)
}