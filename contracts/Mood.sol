// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Mood {
  string mood;

  constructor(string memory _mood) {
    mood = _mood;
  }

  function setMood(string memory _mood) public {
    mood = _mood;
  }

  function getMood() public view returns (string memory) {
    return mood;
  }
}
