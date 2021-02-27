// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

let currentAccount = null;
export default async function _detectEthereumProvider() {
    const provider = await detectEthereumProvider();
    let success = false;
    let error = null
    if (provider) {
        // From now on, this should always be true:
        // provider === window.ethereum
        console.log('provide', provider)
        console.log(provider.selectedAddress, 'selected address')
        try {
            await connect(provider)
            success = true;
        } catch(e) {
            success = false
            error = e
        }
    } else {
        error = 'Please install MetaMask!'
        console.log(error);
    }
    return new Promise((resolve, reject) => {
        if(success) {
            resolve(provider);
        } else {
            reject(`Unable to Connect to MetaMask: ${error}`)
        }
    })
};

async function connect(ethereum) {
    console.log('connect now');
    return ethereum
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
        console.log('ggggg', currentAccount);
        return '';
    }
}
