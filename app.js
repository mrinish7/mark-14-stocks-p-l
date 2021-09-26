const stockPrice = document.querySelector ("#stock-price");
const stockQuantity = document.querySelector ("#stock-quantity");
const currentPrice = document.querySelector ("#current-price");
const clickBtn = document.querySelector ("#click-btn");
const outputBox = document.querySelector ("#output-box");

clickBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(stockPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
} 

function calculateProfitAndLoss (initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

       showOutput(`Its a loss ${loss} and the loss percent is ${lossPercentage}%`);

    } else if (current > initial) {
        var profit = (current -  initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        
        showOutput(`its a profit ${profit} and the percent is ${profitPercentage}%`);
    } else {
        showOutput(`no loss no bonus`);
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}

// calculateProfitAndLoss(10, 10, 100)