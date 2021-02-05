var StellarSdk = require('stellar-sdk');
//Account One
const pair = StellarSdk.Keypair.random();
const fetch = require('node-fetch');
async function createAccount() {
    try {
        const response = await fetch(
            `https://friendbot.stellar.org?addr=${encodeURIComponent(
                pair.publicKey(),
            )}`,
        );
        const responseJSON = await response.json();
        console.log("SUCCESS! You have a new account :)\n", responseJSON);
        const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");
// the JS SDK uses promises for most actions, such as retrieving an account
        const account = await server.loadAccount(pair.publicKey());
        console.log("Balances for account: " + pair.publicKey());
        account.balances.forEach(function (balance) {
            console.log("Type:", balance.asset_type, ", Balance:", balance.balance);
        });
    } catch (e) {
        console.error("ERROR!", e);
    }
};
//Account Two

export default createAccount;