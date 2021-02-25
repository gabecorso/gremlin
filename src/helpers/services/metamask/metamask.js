// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

let currentAccount = null;
export default async function _detectEthereumProvider() {
    const provider = await detectEthereumProvider();

    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        console.log('provide', provider)
        console.log(provider.isConnected());
        await connect(provider)
    } else {
        console.log('Please install MetaMask!');
    }
};

async function connect(ethereum) {
    console.log('connect now');
    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleAccountsChanged)
        .catch((err) => {
            if (err.code === 4001) {
                // EIP-1193 userRejectedRequest error
                // If this happens, the user rejected the connection request.
                console.log('Please connect to MetaMask.');
            } else {
                console.error(err);
            }
        });
}

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        // Do any other work!
        console.log('ggggg');
    }
}
