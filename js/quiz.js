let questions=[
    {
        id:1,
        question: "Where was Harry Potter born?",
        answer:"Godric's Hollow",
        options: [
            "London", "Salazar's Hollow", "Godric's Hollow","Washington DC"
        ]
    },
    {
        id:2,
        question: "Who killed Sirius Black?",
        answer:"Bellatrix Lestrange",
        options: [
            "Bellatrix Lestrange", "Voldemort", "Peter Pettigrew", "Harry Potter"
        ]
    },
    {
        id:3,
        question: "Who died at the end of Harry Potter and the Goblet of Fire?",
        answer:"Cedric Diggory",
        options: [
            "Victor Krum", "Fleur Delacour", "Hermione Granger", "Cedric Diggory"
        ]
    },
    {
        id:4,
        question: "Who was Dumbledore's brother?",
        answer:"Aberforth",
        options: [
            "Rubeus Hagrid", "Sirius Black", "Aberforth", "Lucius Malfoy"
        ]
    },
    {
        id:5,
        question: "How many Horcruxes were there in the whole series?",
        answer:"8",
        options: [  
            "8", "6", "2", "10"
        ]
    },
    {
        id:6,
        question: "Finish this line from Harry Potter and the Order of the Phoenix : I must not ____",
        answer:"Tell lies",
        options: [
            "Tell lies", "Beat others", "Be unkind", "Fail in the exam"
        ]
    },

];

let value=JSON.stringify(questions);
localStorage.setItem("question", value);


let points=0;
let question_count=0;

window.onload=function(){
    show(question_count);
}

function next(){
    if(question_count==questions.length-1){
        location.href="./end.html";
    }
    console.log(question_count);

    let user_answer=document.querySelector("li.option.active").innerHTML;
    if(user_answer==questions[question_count].answer){
        points+=1;
        sessionStorage.setItem("points",points);
        }
        else{
        points+=0;
        sessionStorage.setItem("points",points);
        }

        console.log(points);

        question_count++;
        show(question_count);
}


function show(count){
    let question=document.getElementById("questions")
    let[first,second,third,fourth]=questions[count].options;
    question.innerHTML=`
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;

    toggleActive();
}


function toggleActive(){
    let option=document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++){
    option[i].onclick=function(){
    for(let i=0;i<option.length;i++){
    if(option[i].classList.contains("active")) {
    option[i].classList.remove("active")
    }
    }
    option[i].classList.add("active");
    };
    }
    }