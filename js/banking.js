document.getElementById("deposit-button").addEventListener("click", function(){
    const depositInput = document.getElementById("deposit-input");
    const depositInputNumber = depositInput.value;

    if (depositInput.value > 0){

        const depositTotal = document.getElementById("deposit-total");
        const currentDepositTotal = depositTotal.innerText;
        depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositInputNumber);
    
        const balanceTotal = document.getElementById("balance-total");
        const currentBalanceTotal = balanceTotal.innerText;
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositInputNumber);
    }
    depositInput.value = "";

    
   
});



document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputNumber = withdrawInput.value;

    const balanceTotal = document.getElementById("balance-total");
    const currentBalanceTotal = balanceTotal.innerText;

    if ((withdrawInput.value > 0) && (withdrawInput.value <= parseFloat(balanceTotal.innerText))){
          const withdrawTotal = document.getElementById("withdraw-total");
          const currentWithdrawTotal = withdrawTotal.innerText;
        withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawInputNumber);
    
        const balanceTotal = document.getElementById("balance-total");
        const currentBalanceTotal = balanceTotal.innerText;
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawInputNumber);
    }
    withdrawInput.value = "";

  



})