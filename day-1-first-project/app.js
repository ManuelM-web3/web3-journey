let connected = false;

document.getElementById("connectBtn").addEventListener("click", function() {

    connected = true;
    document.getElementById("status").innerText = "Status: Connected";
    document.getElementById("balance").innerText = "Balance: 0 ETH";

});