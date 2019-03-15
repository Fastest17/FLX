let rootNode = document.querySelector('#task-list');
let mainSection = document.querySelector('#main-page');
let addSection = document.querySelector('#add-new-item');
let modifySection = document.querySelector('#modify-item');
let addBtn = document.querySelector('#add-btn');
let addTaskBtn = document.querySelector('#add-task');
let modTaskBtn = document.querySelector('#m-btn');
let aCancel = document.querySelector('#a-cancel');
let mCancel = document.querySelector('#m-cancel');
let aInput = document.querySelector('#add-input');
let mInput = document.querySelector('#modify-input');
let tasks = [];
let zero = 0;

window.onload = (e) => {
    location.hash = '#/main';
}
window.onhashchange = checkHash;

addBtn.onclick = (e) => {
    location.hash = '#/add';
}
aCancel.onclick = (e) => {
    aInput.value = '';
    location.hash = '#/main';
}
mCancel.onclick = (e) => {
    mInput.value = '';
    location.hash = '#/main';
}
addTaskBtn.onclick = addTask;


function checkHash(){
    if(location.hash === '#/main') {
        mainSection.style.display = 'flex';
        addSection.style.display = 'none';
        modifySection.style.display = 'none';
        if (tasks.length > zero) {
            document.getElementById('span').innerHTML = '';
        } else {
            document.getElementById('span').innerHTML = 'TODO is empty';
        }
    } else if(location.hash === '#/add') {
        mainSection.style.display = 'none';
        addSection.style.display = 'flex';
    } else if(location.hash === '#/modify') {
        modifySection.style.display = 'flex';
        mainSection.style.display = 'none';
    }
}

function addTask(){
    if (aInput.value === '') {} else {
        let item = '<div class="item"> ' +
            '<img class="check" onclick="checkTask(this)" src="assets/img/todo-s.png" alt="">' +
            '<div class="label" onclick="editTask(this)">' + aInput.value + '</div>' +
            '<img onclick="deleteTask(this)" src="assets/img/remove-s.jpg" alt="" class="del">' +
            '</div>';
        rootNode.innerHTML += item;
        tasks.push(rootNode.lastChild);
        aInput.value = '';
        location.hash = '#/main';
    }
}

function display() {
    rootNode.innerHTML = '';
    for (let i = zero; i < tasks.length; i++) {
        rootNode.innerHTML += tasks[i].outerHTML;
    }
}

function editTask(elem){
    let two = 2;
    let todos = document.querySelectorAll('.item');
    let arr = Array.prototype.slice.call(todos);
    let t = arr.indexOf(elem.parentNode);
    location.hash = '#/modify';
    checkHash();
    modTaskBtn.onclick = (e) => {
        if (mInput.value === '') {} else {
            location.hash = '#/main';
            tasks[t].childNodes[two].innerHTML = mInput.value;
            display();
            mInput.value = '';
        }
    }
}

function checkTask(elem) {
    let todos = document.querySelectorAll('.item');
    let arr = Array.prototype.slice.call(todos);
    let t = arr.indexOf(elem.parentNode);
    let one = 1,
        two = 2;
    tasks[t].childNodes[one].src = 'assets/img/done-s.png';
    tasks[t].childNodes[two].style.backgroundColor = 'grey';
    let q = tasks[t];
    tasks.splice(t, one);
    tasks.push(q);
    display();
}

function deleteTask(elem) {
    let todos = document.querySelectorAll('.item');
    let arr = Array.prototype.slice.call(todos);
    let t = arr.indexOf(elem.parentNode);
    let one = 1;
    tasks.splice(t, one);
    display();
    if (tasks.length > zero) {
        document.getElementById('span').innerHTML = '';
    } else {
        document.getElementById('span').innerHTML = 'TODO is empty';
    }
}