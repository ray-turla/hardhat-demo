import { expect } from "chai";
import { ethers } from "hardhat";

describe("Mood", function () {
  it("Test mood initial value", async () => {
    const initialMoodValue = "Neutral";
    const contractName = "Mood"
    const Mood = await ethers.getContractFactory(contractName);
    console.log(`Deploying ${contractName} contract...`)
    const mood = await Mood.deploy(initialMoodValue);
    await mood.deployed();
    console.log(`Contract ${contractName} deployed to ${mood.address}`);
    expect(await mood.getMood()).to.equal(initialMoodValue);
  });

  it("Test mood set value", async () => {
    const initialMoodValue = "Neutral";
    const setMoodValue = "Happy";
    const contractName = "Mood"
    const Mood = await ethers.getContractFactory(contractName);
    console.log(`Deploying ${contractName} contract...`)
    const mood = await Mood.deploy(initialMoodValue);
    await mood.deployed();
    console.log(`Contract ${contractName} deployed to ${mood.address}`);
    await mood.setMood(setMoodValue);
    expect(await mood.getMood()).to.equal(setMoodValue);
  });
});
