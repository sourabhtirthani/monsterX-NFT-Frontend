import { NFTABI } from "./Abi";
import { nftContractAddress } from "./contract";

let environment = process.env.NETWORK
let contractAddress = "";
let ABI = "";
if(environment == "testnet"){
    contractAddress = nftContractAddress;
    ABI = NFTABI;
}else{
    contractAddress = nftContractAddress;
    ABI = NFTABI;
}

export {
    contractAddress,
    ABI
}