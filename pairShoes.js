var x=0;
var array=Array();
var no_of_socks=0;
window.onload=function(){
    no_of_socks=prompt("No of socks?");
    document.querySelector("p").innerHTML="No of socks "+no_of_socks;
}
 
function add_element_to_array(){
    if(x<no_of_socks){
        array.push(document.getElementById("text1").value);
        x++; document.getElementById("text1").value="";
    }
    else{
        alert("You exceed no of socks");
        document.getElementById("text1").value="";
    }
}

function display_array(){
    document.getElementById("result").innerHTML="Array="+array;
    }

function no_of_pairs(){
    var i=0;
    let pairs=0;
    while (i<array.length-1){
        if (array[i]==array[i+1]){
            pairs+=1;
            i+=2;
        }
        else{
            i+=1
        }
    }
    document.getElementById("pairs").innerHTML="Totol no of matching pairs of socks ="+pairs;
}