import fs from 'fs';
import path from 'path';
import { Keypair } from '@solana/web3.js';
import ora from 'ora';

// Get the number of wallets to create from command line arguments
const args = process.argv.slice(2);
const numberOfWallets = args.length > 0 ? parseInt(args[0], 10) : 5;

if (isNaN(numberOfWallets) || numberOfWallets <= 0) {
  console.error('Please provide a valid number of wallets to generate.');
  process.exit(1);
}

const outputDirectory = path.join(process.cwd(), 'wallets');

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

let masterList = '';

// Initialize the spinner
const spinner = ora({
  text: 'Generating wallets...',
  spinner: 'dots',
}).start();

for (let i = 0; i < numberOfWallets; i++) {
  const newAccount = Keypair.generate();
  const publicKey = newAccount.publicKey.toBase58();
  const filePath = path.join(outputDirectory, `${publicKey}.json`);

  // Save the keypair to a file
  fs.writeFileSync(filePath, JSON.stringify(Array.from(newAccount.secretKey)));

  // Add the public key to the master list
  masterList += `${publicKey}\n`;
}

// Save all public keys to a text file
const masterListPath = path.join(process.cwd(), 'master_list.txt');
fs.writeFileSync(masterListPath, masterList);

// Stop the spinner once generation is complete
spinner.succeed(`Generated ${numberOfWallets} wallets in ${outputDirectory}`);
console.log(`All wallet public keys saved to ${masterListPath}`);
