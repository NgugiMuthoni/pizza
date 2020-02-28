function getSize() {
    var selectedValue = document.getElementById("size").value;
    return parseInt(selectedValue);
}
function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quantity").value;
    return parseInt(selectedQuantity);
}
function getDrink() {
    var selectedToppings = document.getElementById("drinks").value;
    return parseInt(selectedToppings);
}


function output(){
    let ourAmount = getTotalAmount()
    console.log(ourAmount);
    if(ourAmount){

        var promptOptions = {
            title: "Enter your name",
            message: "You order will be delivered shortly! You delivery fee will be 100/=. ",
            buttons: {
              confirm: {
                label: "Ok"
              }
            },
            callback: function(result) {                
                if (result === null) {                                             
                  console.log("Prompt dismissed");                              
                } else {
                  console.log("Hi "+result);                          
                }
              }
        };
        bootbox.prompt(promptOptions)
        
    } else {
        bootbox.alert("Hope to see you again")
    }
    
}


function getTotalAmount() {
    let totalAmount = (getSize() + getCrust() + getToppings() + getDrink()) * getQuantity();
    if(totalAmount){
        bootbox.alert("You have Ordered" + " " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    } else {
        return false
    }
    return totalAmount;
}

function button(){

    document.getElementById('data').innerHTML= document.getElementById('output')
    
}

$(document).on("click", ".show-alert", function(e) {
    bootbox.prompt("Hello world!", function() {
        // console.log("Alert Callback");
    });
    bootbox.alert("Hello world!", function() {
        // console.log("Alert Callback");
    });
    e.stopPropagation(); 
            return false;
});

