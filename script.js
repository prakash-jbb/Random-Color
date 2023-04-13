// File link testing
console.log("Runing...");
const myColor=()=>{

    // Decelare global variable color code starting from #.
    var colorCode = "#";

    for(i=0;i<6;i++){
        let myNum = Math.floor(Math.random()*9);
        colorCode += myNum;
    }

    // Body Background Css
    document.querySelector("body").style.background=colorCode;
    // Display Color code
    document.querySelector(".colorCode").innerHTML=colorCode;

    // Cpoy color code on clipboard
    navigator.clipboard.writeText(colorCode);
    
}

// Callback to function
document.querySelector(".clickMe").addEventListener("click",myColor);