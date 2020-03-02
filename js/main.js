function getSize() {
    var selectedValue = document.getElementById("size").value;
    console.log(typeof(selectedValue));

   
    if(selectedValue){ 
        return parseInt(selectedValue);
        
    } else {
        return false
    };
    
}
function getCrust() {
    var selectedCrust = document.getElementById("crust").value;
    
    if(selectedCrust){
        return parseInt(selectedCrust)
    } else {
        return false
    }

    
}
function getToppings() {
    var selectedToppings = document.getElementById("toppings").value;
    
    if(selectedToppings){
        return parseInt(selectedToppings);
    } else {
        return false
    }
}
function getQuantity() {
    var selectedQuantity = document.getElementById("quan").value;
    
    if(selectedQuantity){
        return parseInt(selectedQuantity);
    } else {
        return false
    }
}
function getDrink() {
    var selectedDrinks = document.getElementById("drinks").value;
    
    if(selectedDrinks){
        return parseInt(selectedDrinks);
    } else {
        return false
    }
}
function getAmount() {
    var selectedAmount = document.getElementById("quantityOfDrinks").value;
    
    if(selectedAmount){
        return parseInt(selectedAmount);
    } else {
        return false
    }
}


function output(){
    // debugger
    let ourAmount = getTotalAmount()
    console.log(ourAmount);
    if(ourAmount && getSize() > 0 && getQuantity() >= 5){

        var promptOptions = {
            title: "Enter delivery location",
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
        
     } else if( getSize() < 1) {
         bootbox.alert("Please enter the size of Pizza!!")
     }
     else if( getQuantity() < 1) {
        bootbox.alert("Please enter the Quantity of Pizza!!")
    }
    else if( getQuantity() < 5) {
        bootbox.alert("Sorry we currently dont deliver less than 5 pizza.Please  pick up your order at any branch near you.Thank you for your Order!!")
    }
    else if( getDrink() > 1 && getAmount() < 1) {
        bootbox.alert("Please enter the Quantity of Drinks!!")
    }
      else if(getTotalAmount() == 0) {
        bootbox.alert("Hope to see you again")
    }
}


function getTotalAmount() {
    let totalAmount = ((getSize() + getCrust() + getToppings() ) * getQuantity() ) + (getDrink() * getAmount());
    if( totalAmount && getSize() > 0  ){
        bootbox.alert("You Ordered" + " " + getQuantity("")  +  " pizza."  +  ""  +  " The price is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    }else {
        return false
    }
    return totalAmount;
}


var btn = document.getElementById("myBtn");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", output);
   
    
