let dipositBtn = document.querySelector("#diposit-btn");
let withdrawBtn = document.querySelector("#withdraw-btn");
let dipositAmount = document.querySelector("#diposit-amount");
let withdrawAmount = document.querySelector("#withdraw-amount");
let currentAmount = document.querySelector("#current-amount");

dipositBtn.addEventListener("click", ()=>{
    let previousDiposit = Number(dipositAmount.innerText);
    let dipositValue = Number(document.querySelector("#diposit-value").value);
    if(dipositValue >= 1){
        dipositAmount.innerHTML = previousDiposit+ dipositValue;

        let previousAmount = Number(currentAmount.innerText);
        currentAmount.innerHTML = previousAmount + dipositValue;
    }
    else{
        alert("Invalid Diposit Amount")
    }
});

withdrawBtn.addEventListener("click", ()=>{
    let previousWithdraw = Number(withdrawAmount.innerText);
    let withdrawValue = Number(document.querySelector("#withdraw-value").value);
    let previousAmount = Number(currentAmount.innerText);
    if(previousAmount > 0 && withdrawValue <= previousAmount){
        if(withdrawValue >= 1){
            withdrawAmount.innerHTML = previousWithdraw + withdrawValue;
            currentAmount.innerHTML = previousAmount - withdrawValue;
        }
        else{
            alert("Invalid Widthdraw Amount");
        }
    }

    else{
        alert("insufficient balance");
    }
});
