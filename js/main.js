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
function getTotalAmount() {
    var totalAmount = (getSize() + getCrust() + getToppings() + getDrink()) * getQuantity();
    alert("You have Ordered" + " " + getQuantity("")  +  " pizza."  +  ""  +  " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  " Thank you for your order welcome again.");
    return totalAmount;
}

function output(){
    if(getTotalAmount()>0){
    prompt("enter your location")
    alert("You delivery fee is 100/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")
    }else{
        alert("Hope to see you again")
    }
    
}

function button(){

    document.getElementById('data').innerHTML= document.getElementById('output')
    
}

