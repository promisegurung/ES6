const bills = [];
const tips = [];

function recordBills(pay) {
    bills.push(pay)
    let tip = null;    
    if (pay < 50){
        tip = Math.floor(pay * .2);
    } else if(pay >= 50 && pay < 200) {
        tip = Math.floor(pay * .15);
    } else {
        tip = Math.floor(pay * .1);
    }
    console.log(tip);
    tips.push(tip);
}

function showExpenses() {
    console.log('These are the bills: ',  bills);
    console.log('These are the tips: ', tips);
}

recordBills(49.89);
recordBills(120.99);
recordBills(300.73);

showExpenses();

