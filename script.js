let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", removeTask);

        let totalTask = document.querySelector(".count");
        let totalTaskCount = parseInt(totalTask.textContent);
        totalTask.textContent = totalTaskCount + 1;

        let remainingTask = document.querySelector(".count2");
        let remainingTaskCount = parseInt(remainingTask.textContent);
        remainingTask.textContent = remainingTaskCount + 1;
    }
}

function removeTask() {
    this.parentElement.remove();

    let completedTask = document.querySelector(".count3");
    let completedTaskCount = parseInt(completedTask.textContent);
    completedTask.textContent = completedTaskCount + 1;

    let remainingTask = document.querySelector(".count2");
    let remainingTaskCount = parseInt(remainingTask.textContent);
    remainingTask.textContent = remainingTaskCount - 1;

    let totalTask = document.querySelector(".count");
    let totalTaskCount = parseInt(totalTask.textContent);
    totalTask.textContent = totalTaskCount - 1;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    let presentTime = new Date();
    document.querySelector('.date').innerText = (days[presentTime.getDay()] + ', ' + presentTime.getDate() + ' ' + months[presentTime.getMonth()] + ' ' + presentTime.getFullYear());

    document.querySelector("#hour").innerText = (presentTime.getHours() < 10 ? "0" : "") + presentTime.getHours();
    document.querySelector("#minute").innerText = (presentTime.getMinutes() < 10 ? "0" : "") + presentTime.getMinutes();
    document.querySelector("#second").innerText = (presentTime.getSeconds() < 10 ? "0" : "") + presentTime.getSeconds();
}, 1000);
