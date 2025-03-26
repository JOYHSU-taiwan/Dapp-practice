if (typeof web3 !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  alert('please use metamask');
}

// wallet address
var account;

// buttons
const connectButton = document.getElementById('connectButton');
const signMessage = document.getElementById('signMessage');

//input
const inputText = document.getElementById('inputText');

// status
const walletConnectStatus = document.getElementById('walletConnectStatus');
const walletAddress = document.getElementById('walletAddress');
const ethBalance = document.getElementById('ethBalance');
const networkId = document.getElementById('networkId');
