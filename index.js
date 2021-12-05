const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]; 
var given = cashGiven.value;
var bill = billAmount.value;

checkButton.addEventListener("click",function validateAmount() {
    
    if (billAmount.value > 0) {
        console.log(billAmount.value);
        if ((given>=bill)){
            console.log(cashGiven.value,billAmount.value)
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        
        }else{
            errorHandler("1The cash provided should atleast be equal to the bill amount");
        }
    }else {
         errorHandler("Invalid bill amount");
    };
});

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]);
            amountToBeReturned=amountToBeReturned%availableNotes[i];
        if (numberOfNotes > 0) {

            noOfNotes[i].innerText= numberOfNotes;
        }
        
    };
};

function neutrilize(returnNone){
    message.style.display = "block";
    message.innerText=returnNone;
    console.log(returnNone);
}

function errorHandler(returnMessage) {

    message.style.display = "block";
    message.innerText= returnMessage;
    console.log(returnMessage);
    
};