// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./NFT.sol";

contract BANK {

  MintNft NftContract;
  address payable Admin;

  constructor(address _NFTCA) {
       Admin = payable(msg.sender);
       NftContract = MintNft(_NFTCA);
  }

    mapping(address => uint) myBalance;

    function donateMoney(address _myAddr, uint _amount) public payable {
       require(NftContract.balanceOf(_myAddr) != 0);
       myBalance[_myAddr] += _amount;
    }

    function myDonatedMoney(address _myAddr) public view returns (uint) {
        return myBalance[_myAddr];
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function withdraw(address _myAddr, uint _amount) public {
        require(_myAddr == Admin);
        require(_amount > getBalance());
        Admin.transfer(_amount);
    }
}