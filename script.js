// message time-stamp
let theTime = new Date();
theHour = theTime.getHours();
theMinutes = theTime.getMinutes();

// message sender identification
const senderDes = ["Me", "Myself", "I"];
const randomSender = senderDes[Math.floor(Math.random() * senderDes.length)];


const chatBox = document.querySelector("#chatbox");

const form = document.querySelector("#form");

const myButton = document.querySelector("#myButton");


//function to clear form contents
const clearForm = () =>{
    const userSearch = document.querySelector("#user-query");
    userSearch.value= " ";
}


const newMessage = (event) => {
    event.preventDefault();

    // chooses a random sender from the choices me, myself, or I
    const senderDes = ["Me", "Myself", "I"];
    const randomSender = senderDes[Math.floor(Math.random() * senderDes.length)];

    //used to set the time in the message
    let theTime = new Date();
    theHour = theTime.getHours();
    theMinutes = theTime.getMinutes();

    const userSearch = document.querySelector("#user-query").value;

    let newDiv = document.createElement("div");
    newDiv.classList.add("message");

    let spanOne = document.createElement("span");
    spanOne.innerText = `${theHour}:${theMinutes}`;
    newDiv.appendChild(spanOne);

    let spanTwo = document.createElement("span");
    spanTwo.classList.add("sender");
    spanTwo.innerText = `${randomSender}`;
    newDiv.appendChild(spanTwo);

    let spanThree = document.createElement("span");
    spanThree.innerText = userSearch;
    newDiv.appendChild(spanThree);

    console.log(userSearch);

    let spanFour = document.createElement("span");
    spanFour.classList.add("delete");
    spanFour.innerHTML = "❌";

    newDiv.appendChild(spanFour);

    chatBox.appendChild(newDiv);

    clearForm();

}

// newMessage();

form.addEventListener("submit", newMessage);


const getJokes = (event) => {
    event.preventDefault();
    const chatBox = document.querySelector("#chatbox");

    fetch("https://api.chucknorris.io/jokes/random")
    .then((data) => {return data.json()})
    .then((res) => { 
        const jokeInfo =
            `<div class="message" >
        <span>${theHour}:${theMinutes}</span>
        <span class="sender">Fact:</span>
        <span>${res.value}</span>
        <span class="delete">❌</span>
        </div>`;
        
        chatBox.innerHTML +=jokeInfo;
    })
}


//event listener to wait for button click to use get jokes function
myButton.addEventListener("click", getJokes);
