const state = {
    connected: false,
    balance: 0
};

function render() {
    const statusEl = document.getElementById('status');
    const balanceEl = document.getElementById('balance');

    if (state.connected) {
        statusEl.innerText = "Status: Connected";
        balanceEl.innerText = "Balance: " + state.balance + " ETH";
    } else {
        statusEl.innerText = "Status: Not Connected";
        balanceEl.innerText = "Balance: --";
    }

}

document.getElementById("connectBtn").addEventListener("click", function () {
    state.connected = true;
    state.balance = 5;
    render();
});