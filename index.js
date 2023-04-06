const fullname = document.getElementById("fullname");

const message = document.getElementById("message");

document.getElementById("submit-button").onclick = error();

function error (){
    if (fullname.value.length > 30){
         
        alert("Name is too long")
    }

    else if (message.value.length > 500){
         
        alert("message must be 500 of less words")
    }
}



