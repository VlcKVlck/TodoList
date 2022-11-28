var inputField = document.querySelector("#usrInput");
var state = {
    tasks: []
};
document.addEventListener('DOMContentLoaded', function () {
    console.log("loaded");
});
function render() {
    clear();
    state.tasks.forEach(function (task, index) {
        var node = document.createElement('tr');
        var serial = document.createElement('td');
        var theTask = document.createElement('td');
        node.classList.add('items');
        theTask.innerHTML = task;
        console.log(theTask, "task");
        serial.innerHTML = "".concat(index + 1, ".&nbsp&nbsp&nbsp");
        console.log(serial, "serial");
        node.append(serial);
        node.append(task);
        console.log(node, "node");
        document.querySelector('ul').append(node);
    });
    //upon adding a task - add to the top of the list
    //upon completing a task, delete from the list
}
function addTask() {
    if (!inputField.value)
        return;
    var task = inputField.value;
    inputField.value = '';
    state.tasks.unshift(task);
    render();
}
function clear() {
    var all = document.querySelectorAll('tr');
    all.forEach(function (elem) {
        elem.remove();
    });
}
document.getElementById("submitbtn").addEventListener('click', addTask);
document.addEventListener('keypress', function (event) {
    if (event.key == 'Enter')
        addTask();
});
