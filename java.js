
function main (){
    var array = [];

    for(var x=0;x<3;x++){
        array.push(prompt("Enter a word"));
    }document.getElementById("btn").style.display = "none";
}

btn.addEventListener("click", main,false);
