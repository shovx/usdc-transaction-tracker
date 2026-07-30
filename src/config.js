module.exports = {
  usdcContracts: {
    ARC: "0x...",
    ETH: "0xA0b86a33E6441b8b24c7e86e32B19C5D82cdDB2c"
  },
  rpcUrls: {
    ARC: process.env.ARC_RPC_URL || "https://arc-rpc.com",
    ETH: process.env.ETH_RPC_URL || "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
  }
};