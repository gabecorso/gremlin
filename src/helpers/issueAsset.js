const StellarSdk = require("stellar-sdk");
const fetch = require("node-fetch");

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

const ISSUER = process.env.REACT_APP_PUBLIC;
const ISSUER_SECRET = process.env.REACT_APP_SECRET;
const DIST = process.env.REACT_APP_PUBLIC2;
const DIST_SECRET = process.env.REACT_APP_SECRET2;

// Keys for accounts to issue and receive the new asset.
const issuingKeypair = StellarSdk.Keypair.fromSecret(
    ISSUER_SECRET,
);
const distributionKeypair = StellarSdk.Keypair.fromSecret(
    DIST_SECRET,
);
const availableCurrency = "1000";
const distributedCurrency = "100";

// Create an Asset object that represents the asset to be created.
const gil = new StellarSdk.Asset(
    "Gamestonk",
    issuingKeypair.publicKey(),
);

async function issueAsset() {
    return new Promise(async (resolve, reject) => {
        try {
            // Fetch the base fee and the account that will create our transaction
            const [
                {
                    max_fee: { mode: fee },
                },
                distributionAccount,
            ] = await Promise.all([
                server.feeStats(),
                server.loadAccount(distributionKeypair.publicKey()),
            ]);

            const changeTrustTx = new StellarSdk.TransactionBuilder(
                distributionAccount,
                {
                    fee,
                    networkPassphrase: StellarSdk.Networks.TESTNET,
                },
            )
                .addOperation(
                    // The `changeTrust` operation creates (or alters) a trustline.
                    StellarSdk.Operation.changeTrust({
                        asset: gil,
                        limit: availableCurrency,
                    }),
                )
                .addOperation(
                    // One transaction can have operations from different accounts,
                    // they just need to be signed by each account.
                    StellarSdk.Operation.payment({
                        destination: distributionKeypair.publicKey(),
                        asset: gil,
                        amount: "50",
                        source: issuingKeypair.publicKey(),
                    }),
                )
                .setTimeout(100)
                .build();
            changeTrustTx.sign(distributionKeypair);
            changeTrustTx.sign(issuingKeypair);

            console.log(
                `Making trustline and issuing ${distributedCurrency} Gamestonk…`,
            );
            const txResult = await server.submitTransaction(changeTrustTx);

            console.log(
                `Success! ${
                    issuingKeypair.publicKey()} issued ${distributedCurrency} Gamestonk to ${distributionKeypair.publicKey()}`,
            );
            console.log(txResult);
            return resolve(`Success! ${
                issuingKeypair.publicKey()} issued ${distributedCurrency} Gamestonk to ${distributionKeypair.publicKey()}`)
        } catch (e) {
            console.error("Oh no! Something went wrong.");
            console.error(e.response.data.detail);
            console.error(e.response.data.extras.result_codes);
            console.error(e.response.data.type);
            return reject( e.response.data);
        }
    });
}

export default issueAsset;
