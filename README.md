# Solana Wallet Generator

This script generates Solana wallets and saves each wallet's keypair as a JSON file, using the public key as the filename. Additionally, it creates a master list containing all the public keys and their corresponding values in a plain text file.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [NPM](https://www.npmjs.com/) (comes with Node.js)

> Recommended to use NVM

## Installation

1. Clone the repository or download the script to your local machine. `git clone https://github.com/0xKyran/solana-wallet-generator.git`

2. Navigate to the project directory:

3. Install the required dependencies:

```bash
npm i
```

## Usage

To generate wallets, run the following command:

```bash
node index.js <number_of_wallets>
```
> Replace `<number_of_wallets>` with the number of wallets you want to generate,


eg. To generate 10 wallets:

```bash
node index.js 10
```

If no argument is provided, the script defaults to creating 5 wallets.

## Output

Each wallet is saved as a JSON file in the wallets directory, named using the public key (e.g., wallets/{pubkey}.json).
A master list of all public keys is saved in a text file named master_list.txt in the project directory.
