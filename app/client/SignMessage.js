signMessage.addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    const message = document.getElementById('inputText').value;

    if (!message) {
      alert('Please enter a message to sign.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];

      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account],
        from: account,
      });

      console.log('Message to sign:', message);
      console.log('Signature:', signature);
    } catch (error) {
      console.error('Failed to sign message:', error);
    }
  } else {
    alert('Please use metamask plugin.');
  }
});
