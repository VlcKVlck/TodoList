const inputField = document.querySelector("#usrInput");
const state = {
    tasks:[],

}

document.addEventListener('DOMContentLoaded', function () {
    console.log ("loaded")
});

function render (){
    clear();
    state.tasks.forEach(function(task, index){
        const node = document.createElement('tr')
        const serial =document.createElement('td')
        const theTask =document.createElement('td')
        node.classList.add ('items');
        theTask.innerHTML = task;
        console.log (theTask, "task")
        serial.innerHTML = `${index+1}.&nbsp&nbsp&nbsp`;
        console.log (serial, "serial")
        node.append(serial);
        node.append(task)
        console.log (node, "node")
        document.querySelector('ul').append(node);
    })


    //upon adding a task - add to the top of the list
    //upon completing a task, delete from the list
}

function addTask(){
    if (!inputField.value) return;
    let task = inputField.value;
    inputField.value=''
    state.tasks.unshift(task);
    render();
}

function clear(){
    const all = document.querySelectorAll('tr')
    all.forEach(function (elem){
        elem.remove();
    })

}


document.getElementById("submitbtn").addEventListener('click', addTask)
document.addEventListener('keypress', function (event){
    if (event.key =='Enter') addTask();
})
