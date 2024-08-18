
const deposit = document.getElementById('deposit')
const withdraw = document.getElementById('withdraw')
const balance = document.getElementById('balance')
const btnDeposit = document.getElementById('btnDeposit')
const btnWithdraw = document.getElementById('btnWithdraw')






const calculateDeposit = () => {
    console.log("deposit....")
    const depInput = Number(document.getElementById('depositInput').value);

    console.log(depInput)
    deposit.innerHTML = `$${depInput}.00`
    const balValue = Number(balance.innerText) + depInput;
    console.log(balValue, balance.innerText)
    balance.innerHTML = `$${balValue}.00`
    depInput.value = '';
}


const calculateWithdraw = () => {
    ;
    console.log("withdarwal....")
    const withInput = document.getElementById('withdrawInput').value;
    withdraw.innerHTML = `$${withInput}.00`;
    console.log("myyy", balance.innerText)
    if (balance.innerText == '00') {
        alert('You dont have any balance to withdraw')
    } else {
        const balValue = Number(balance.innerText) - withInput;
        console.log(balValue, balance.innerText)
        balance.innerHTML = `$${balValue}.00`
        withInput.value = '';
    }

}




btnDeposit.addEventListener('click', () => {
    calculateDeposit()
})

btnWithdraw.addEventListener('click', () => {
    calculateWithdraw()
})