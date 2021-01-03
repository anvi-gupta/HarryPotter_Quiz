var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

var points = sessionStorage.getItem("points");

function reset(){
    location.href = "index.html"; 
}

if(points>=5){
    head_result.innerHTML="That's amazing! You got "+points+" out of 6 right";
    body_result.innerText = "You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!";
}
else{
    head_result.innerText = "Oops! You’ve got only "+points+" out of 6 right";
    body_result.innerText = "JK Rowling has created such characters that even the geekiest of geeks could remember, but that doesn’t mean you shouldn’t try." 
}
