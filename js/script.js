let display = document.getElementById("display");

function appenfvalue(value){
    if(display.value == "Error"){
        display.value = "";
        display.value += value; 
    }else{
        display.value += value; 
    }
}

function clearDisplay(){
    display.value = "";
}

function deleteLastNumber(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}