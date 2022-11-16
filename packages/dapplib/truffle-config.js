require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind assault gesture loan fox turn'; 
let testAccounts = [
"0xe465adff5f9b0ac7900557ae7583fbe06c87a905a09c257e010b23f82e53b8fd",
"0x891a9562322b88c1284a1410deb53b88d0f710e420c5f648e13a4b67724a24b2",
"0xcc5f30380d693b3b89cfe0f63db5c9449314bf3964077681e3bed01e4d0973d3",
"0xf0848984d2a46778158f1340eccd4aa5a3eea7cc412053b271c85ae0fcf86f6c",
"0x64da77ab206c31b96303edabe11916ca99c707b7627632fcb04a52e996b2f30d",
"0x61a4826ea03af20474e384f019bf8ba988b6db9ac7b769cca32261f34cfb681e",
"0xf6fcbff88790323b789ea5d8106d91b417e29db4858aca10f98de4b36c419259",
"0x2dd37fb1fd2763608ba7e2304dd1a9e153921e73ef518a1b122aa0fc65371b1a",
"0x5a5b454d67f899ffc16ecec26c7012c0c088410a00f346eab667a7584945b308",
"0xf636ebd4da3c9a5597e25303d9c73a19a99785569032d76fc179d4788a560d7c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

