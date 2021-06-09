// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

// Import OpenZeppelin ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Inherit from OpenZeppelin ERC721
contract PlaneTicket is ERC721, Ownable {
    // Add our own features (planId, seatId, timeStamp)
    
    // The function called on Token Creation
    constructor() public ERC721("PlaneTicket", "AIRLINETICKET") {
        _setBaseURI("https://tickets.info/"); // Base URI is the URL you use to display data for the NFT
    }
    
    // In the "real world" you would have the shop, mint a token after a sale
    // ANYBODY CAN MINT - NOT SECURE
    function mint(uint256 tokenId) public {
        _mint(msg.sender, tokenId); // Create the TOKEN and send it to whoever called the contract
        _setTokenURI(tokenId, uint2str(tokenId));
    }
    
    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }

}

// Very expensive to store all the data on mainnet