require('dotenv').config();
const { ethers } = require('ethers');
const { usdcContracts } = require('./config');

const provider = new ethers.JsonRpcProvider(
  process.env.ARC_RPC_URL || "https://arc-rpc.com"
);

const usdcAbi = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

async function getUSDCBalance(address, network = "ARC") {
  const contractAddress = usdcContracts[network];
  if (!contractAddress) throw new Error("Network not supported");

  const contract = new ethers.Contract(contractAddress, usdcAbi, provider);
  const balance = await contract.balanceOf(address);
  return ethers.formatUnits(balance, 6);
}

async function listenToUSDCTransfers(address, network = "ARC") {
  const contractAddress = usdcContracts[network];
  const contract = new ethers.Contract(contractAddress, usdcAbi, provider);

  console.log(`Listening for USDC transfers on ${network}...`);

  contract.on("Transfer", (from, to, amount, event) => {
    const formattedAmount = ethers.formatUnits(amount, 6);
    console.log(`New USDC Transfer:
  From: ${from}
  To: ${to}
  Amount: ${formattedAmount} USDC
  Tx Hash: ${event.hash}`);
  });
}

(async () => {
  try {
    const walletAddress = "0x...";
    const balance = await getUSDCBalance(walletAddress, "ARC");
    console.log(`USDC Balance on ARC: ${balance} USDC`);
  } catch (error) {
    console.error("Error:", error.message);
  }
})();

module.exports = { getUSDCBalance, listenToUSDCTransfers };