import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xb69144C32b32Bc79Efb0191Fe049fC621FdA9bE1';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}