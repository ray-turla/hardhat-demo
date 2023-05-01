import { assert } from "chai";
import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

describe("Mood", function () {
  const initialMoodValue = "Neutral";
  const contractName = "Mood";
  const setMoodValue = "Happy"
  let MoodFactory: ContractFactory; 
  let mood: Contract;
  this.beforeEach(async function() {
    MoodFactory = await ethers.getContractFactory(contractName);
    mood = await MoodFactory.deploy(initialMoodValue);
  })
  it(`Initial mood must be ${initialMoodValue}`, async function (){
    const currentValue = await mood.getMood()
    assert.equal(currentValue, initialMoodValue)
  });

  it(`Updated value must be ${setMoodValue}`, async function() {
    await mood.setMood(setMoodValue);
    const currentValue = await mood.getMood();
    assert.equal(currentValue, setMoodValue)
  });
});
