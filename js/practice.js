//deposit
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get deposit
    const depositInput = document.getElementById('deposit-input');
    const depositAmount=parseFloat(depositInput.value);
    console.log('depositAmount');

    const previusdeposittotal = document.getElementById('deposit-total');
    const previusdepositAmount=parseFloat(previusdeposittotal.innerText);
    console.log('previusdepositAmount');

    const newdepositAmount = previusdepositAmount + depositAmount;
    console.log('newdepositAmount');

    previusdeposittotal.innerText = newdepositAmount;

    //balance
    const previsebalancetotal = document.getElementById('balance-total');
    const previsebalanceAmount=parseFloat(previsebalancetotal.innerText);
    const newbalance = previsebalanceAmount + depositAmount;
    previsebalancetotal.innerText = newbalance;

    // clear
    depositInput.value='';

});

//withdaw
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawinput = document.getElementById('withdraw-input');
    const withdawAmount = parseFloat(withdrawinput.value);

    const previusewithdawtotal = document.getElementById('withdaw-total');
    const previusewithdawAmount = parseFloat(previusewithdawtotal.innerText);

    const newwithdawAmount = previusewithdawAmount + withdawAmount;
    previusewithdawtotal.innerText = newwithdawAmount;

    // balance
    const previusebalancetotal = document.getElementById('balance-total');
    const previsebalanceAmount = parseFloat(previusebalancetotal.innerText);

    const newbalanceAmount = previsebalanceAmount - withdawAmount;
    previusebalancetotal.innerText = newbalanceAmount;

    // clear
    withdrawinput.value='';


})