# 📊 USDC Transaction Tracker
*Track USDC transactions and balances on ARC and Ethereum.*

## ✨ Features
- ✅ Get **USDC balance** for any wallet.
- ✅ Listen to **real-time USDC transfers**.
- ✅ Support **ARC and Ethereum** networks.

## 🛠 Tech Stack
- **Ethers.js** – Blockchain interactions.
- **Node.js** – Backend runtime.

## 🏃‍♂️ How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Add your **RPC URL** (ex: Alchemy, Infura) in `.env`:
   ```env
   ARC_RPC_URL=https://arc-mainnet.g.alchemy.com/v2/YOUR_API_KEY
   ```
3. Run:
   ```bash
   npm start
   ```

## 📜 Example
```javascript
const { getUSDCBalance } = require('./src/index');
const balance = await getUSDCBalance("0xYourAddress", "ARC");
console.log(`Balance: ${balance} USDC`);
```

## 🌍 Next Steps
- [ ] Add **historical transaction fetching**.
- [ ] Integrate with **Circle API** for fiat data.
- [ ] Deploy as a **serverless function** (Vercel, AWS Lambda).

## 🤝 Contributing
Pull requests are welcome!

## 📜 License
MIT