connectButton.addEventListener('click', () => {
  if (typeof window.ethereum !== 'undefined') {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        account = accounts[0];
        walletConnectStatus.innerHTML = 'Wallet connected!';
        walletAddress.innerHTML = account;
        getAccountBalance(account);
      })
      .catch((error) => {
        console.log(error, error.code);
        alert(error.code);
      });
  } else {
    alert('Please use metamask plugin.');
  }
});

async function getAccountBalance(account) {
  ethBalance.innerHTML = await web3.eth.getBalance(account);
  networkId.innerHTML = await web3.eth.getChainId();
}
