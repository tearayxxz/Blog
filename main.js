var count = 0;
function postFunction() {
    count++;
    var txt = document.getElementById("text1").value;
    if (count == 1){
        document.getElementById("topic1").innerText = txt;
    }
    else if (count == 2){
        document.getElementById("comment1").innerText = txt;
    }
    else if (count == 3){
        document.getElementById("comment2").innerText = txt;
    }
}

function clearFunction() {
    count = 0;
    document.getElementById("topic1").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
}