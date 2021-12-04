const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]; 
var given = cashGiven.value;
var bill = billAmount.value;

checkButton.addEventListener("click",function validateAmount() {
    message.style.display = "none";
    if (billAmount.value > 0) {
        if ((given >= bill)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }else{
            errorHandler("The cash provided should atleast be equal to the bill amount");
        }
    }else {
         errorHandler("Invalid bill amount");
    };
});

function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        if (numberOfNotes > 0) {
            amountToBeReturned=amountToBeReturned%availableNotes[i];
            noOfNotes[i].innerText= numberOfNotes;
        }else{
            errorHandler("The cash provided should atleast be equal to the bill amount");
        }
    };
};



function errorHandler(returnMessage) {

    message.style.display = "block";
    message.innerText= returnMessage;
    
};