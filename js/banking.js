/* hendal deposit button eventhandalar */
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get deposit amount from input-text
    const depositInput = document.getElementById('deposit-input');

   /*  const newdepositAmounttext = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmounttext); */

    const newdepositAmount = parseFloat(depositInput.value);
    

    // set deposit amount for  html span
    const depositTotal = document.getElementById('deposit-total');
    /* const previusedepositext=depositTotal.innerText;
    const previusedepositTotal = parseFloat(previusedepositext); */
    const previusedepositTotal = parseFloat(depositTotal.innerText);

    const newdepositTotal = previusedepositTotal+ newdepositAmount;

    
    depositTotal.innerText = newdepositTotal;


    // balance set
    const balancetotal = document.getElementById('balance-total');
    const previusebalanceAmount=parseFloat(balancetotal.innerText);
    const newbalanceTotal = previusebalanceAmount + newdepositAmount;
    balancetotal.innerText = newbalanceTotal;


    // clear input
    depositInput.value ='';

});


/* hendal deposit withdaw eventhandalar */
document.getElementById('withdraw-btn').addEventListener('click',function(){

    //get withdaw
    const withdawInput = document.getElementById('withdraw-input');
    const newwithdawAmount=parseFloat(withdawInput.value);

    //set withdaw
    const previuswithdTotal = document.getElementById('withdaw-total');
    const previusewithdawAmount = parseFloat(previuswithdTotal.innerText);
  

    const newwithdawTotal = previusewithdawAmount + newwithdawAmount;

    previuswithdTotal.innerText = newwithdawTotal;

    //balance set
    const balancetotal = document.getElementById('balance-total');
    const previusebalanceAmount = parseFloat(balancetotal.innerText);
    const newbalanceTotal = previusebalanceAmount - newwithdawAmount;
    balancetotal.innerText = newbalanceTotal;

    // clear input
    withdawInput.value='';

});