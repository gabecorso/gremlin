const StellarSdk = require("stellar-sdk");
const fetch = require("node-fetch");

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const TARGET = process.env.REACT_APP_PUBLIC;
const SOURCE = process.env.REACT_APP_PUBLIC2;
const SOURCE_SECRET = process.env.REACT_APP_SECRET2;

async function sendPayment() {
    return new Promise(async (resolve, reject) => {
        const sourceKeypair = StellarSdk.Keypair.fromSecret(
            SOURCE_SECRET
        );
        const destination =
            TARGET;
        const amount = "100";

        console.log(
            `Making a new test account and sending ${amount} lumens to ${destination}`,
        );

        const [
            {
                max_fee: { mode: fee },
            },
            sender,
        ] = await Promise.all([
            server.feeStats(),
            server.loadAccount(SOURCE),
        ]);

        console.log('after', sender)

        const transaction = new StellarSdk.TransactionBuilder(sender, {
            fee,
            networkPassphrase: StellarSdk.Networks.TESTNET,
        })
            .addOperation(
                // This operation sends the destination account XLM
                StellarSdk.Operation.payment({
                    destination,
                    asset: StellarSdk.Asset.native(),
                    amount,
                }),
            )
            .setTimeout(30)
            .build();
        transaction.sign(sourceKeypair);

        try {
            // Submit the transaction to the Stellar network.
            const transactionResult = await server.submitTransaction(transaction);
            console.log(transactionResult);
            console.log('FINAL');

            return resolve(`Success! ${SOURCE} paid ${TARGET} ${amount} XLM`);
        } catch (e) {
            console.error("Oh no! Something went wrong.");
            console.error(e.response.data.detail);
            console.error(e.response.data.extras.result_codes);
            console.error(e.response.data.type);
            return reject(e.response.data);
        }
    });
}

export default sendPayment;