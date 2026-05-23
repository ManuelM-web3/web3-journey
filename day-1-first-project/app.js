const state = {
    connected: false,
    balance: 0
};

function render() {
    const statusEl = document.getElementById('status');
    const balanceEl = document.getElementById('balance');
    const btn = document.getElementById("connectBtn");

    if (state.connected) {
        statusEl.innerText = "Status: Connected";
        balanceEl.innerText = "Balance: " + state.balance + " ETH";
        btn.innerText = "Disconnect Wallet";
    } else {
        statusEl.innerText = "Status: Not Connected";
        balanceEl.innerText = "Balance: --";
    }

}

document.getElementById("connectBtn").addEventListener("click", function () {
    if (!state.connected) {
        state.connected = true;
        state.balance = 5;
    } else {
        state.connected = false;
        state.balance = 0;
    }
    
    render();
});

function simulateTransaction() {
    if (!state.connected) return;

    let change = Math.floor(Math.random() * 3) - 1; 
    state.balance = Math.max(0, state.balance + change);

    render();
}

setInterval(simulateTransaction, 3000);