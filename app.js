let RESET = document.getElementById("reset-btn");
let billError = document.getElementById("bill-error");
let peopleError = document.getElementById("people-error");
let tipAmount = document.getElementById("result-tip");
let total = document.getElementById("result-total");
let tip = 0;

function clearTips(){
    document.getElementById("custom-tip").style.border = "none";
    document.getElementById("p5").style.backgroundColor = "#00474B";
    document.getElementById("p5").querySelector("h1").style.color = "#FFFFFF";
    document.getElementById("p10").style.backgroundColor = "#00474B";
    document.getElementById("p10").querySelector("h1").style.color = "#FFFFFF";
    document.getElementById("p15").style.backgroundColor = "#00474B";
    document.getElementById("p15").querySelector("h1").style.color = "#FFFFFF";
    document.getElementById("p25").style.backgroundColor = "#00474B";
    document.getElementById("p25").querySelector("h1").style.color = "#FFFFFF";
    document.getElementById("p50").style.backgroundColor = "#00474B";
    document.getElementById("p50").querySelector("h1").style.color = "#FFFFFF";
}

function reset(){
    document.getElementById("bill-input").style.border = "none";
    billError.textContent = "";
    document.getElementById("people-number").style.border = "none";
    peopleError.textContent = "";
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
    document.getElementById("bill-input").value = "";
    document.getElementById("custom-tip").value = "";
    document.getElementById("people-number").value = "";
    RESET.style.backgroundColor = "#0D686D";
    tip = 0;
    clearTips();
}

function p5(){
    tip = 5;
    clearTips();
    document.getElementById("custom-tip").value = "";
    document.getElementById("p5").style.backgroundColor = "#9FE8DF";
    document.getElementById("p5").querySelector("h1").style.color = "#00474B";
    change();
}
function p10(){
    tip = 10;
    clearTips();
    document.getElementById("custom-tip").value = "";
    document.getElementById("p10").style.backgroundColor = "#9FE8DF";
    document.getElementById("p10").querySelector("h1").style.color = "#00474B";
    change();
}
function p15(){
    tip = 15;
    clearTips();
    document.getElementById("custom-tip").value = "";
    document.getElementById("p15").style.backgroundColor = "#9FE8DF";
    document.getElementById("p15").querySelector("h1").style.color = "#00474B";
    change();
}
function p25(){
    tip = 25;
    clearTips();
    document.getElementById("custom-tip").value = "";
    document.getElementById("p25").style.backgroundColor = "#9FE8DF";
    document.getElementById("p25").querySelector("h1").style.color = "#00474B";
    change();
}
function p50(){
    tip = 50;
    clearTips();
    document.getElementById("custom-tip").value = "";
    document.getElementById("p50").style.backgroundColor = "#9FE8DF";
    document.getElementById("p50").querySelector("h1").style.color = "#00474B";
    change();
}

function format(num){
    let str = num.toString();
    if(!str.includes(".")){
        return "$" + str + ".00";
    }
    if(str.split(".")[1].length == 1){
        return "$" + str + "0";
    }
    return "$" + str;
}
function change(){
    document.getElementById("bill-input").style.border = "none";
    billError.textContent = "";
    document.getElementById("custom-tip").style.border = "none";
    document.getElementById("people-number").style.border = "none";
    peopleError.textContent = "";
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";

    let proceed = true;
    let bill = document.getElementById("bill-input").value;
    if(document.getElementById("custom-tip").value){
        tip = document.getElementById("custom-tip").value;
        clearTips();
    }
    let people = document.getElementById("people-number").value;

    if(bill || tip || people){
        RESET.style.backgroundColor = "#26C2AE";
    }else{
        RESET.style.backgroundColor = "#0D686D";
    }

    if(bill < 0){
        document.getElementById("bill-input").style.border = "2px solid #E17052";
        billError.textContent = "Can't be negative";
        proceed = false;
    }
    if(tip < 0 || tip > 100){
        document.getElementById("custom-tip").style.border = "2px solid #E17052";
        proceed = false;
    }
    if(people < 0){
        peopleError.textContent = "Can't be negative";
        document.getElementById("people-number").style.border = "2px solid #E17052";
        proceed = false;
    }
    if(!people){
        proceed = false;
    }else if(people != Math.round(people)){
        peopleError.textContent = "Can't be float type";
        document.getElementById("people-number").style.border = "2px solid #E17052";
        proceed = false;
    }else if(people == 0){
        peopleError.textContent = "Can't be zero";
        document.getElementById("people-number").style.border = "2px solid #E17052";
        proceed = false;
    }

    if(proceed){
        let calcTip = bill*tip/people/100;
        let calcTotal = Math.round((bill/people + calcTip)*100)/100;
        calcTip = Math.round(calcTip*100)/100;

        tipAmount.textContent = `${format(calcTip)}`;
        total.textContent = `${format(calcTotal)}`;
    }
}