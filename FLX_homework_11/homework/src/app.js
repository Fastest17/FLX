let input = document.getElementById('newTask');
let list = document.getElementById('list');
let message = document.getElementById('message');
let addBtn = document.getElementById('addBtn');
let maxItem = 10;
let count = 0;
let dragEl;

input.addEventListener('input', function () {
    if (input.value !== '') {
        addBtn.disabled = false;
    } else {
        addBtn.disabled = true;
    }
});

addBtn.addEventListener('click', addTask);

function addTask() {
    if (count >= maxItem) {
        message.style.display = 'block';
        input.value = '';
        input.setAttribute('disabled', 'true');
        addBtn.disabled = true;
    } else {
        const item = document.createElement('li');
        item.className = 'draggable';
        item.setAttribute('draggable', 'true');

        const divOut = document.createElement('div');
        divOut.className = 'out';

        const checkbox = document.createElement('i');
        checkbox.className = 'check material-icons';
        checkbox.innerText = 'check_box_outline_blank';

        const p = document.createElement('p');
        p.innerHTML = input.value;

        const deleteBtn = document.createElement('i');
        deleteBtn.className = 'material-icons delete';
        deleteBtn.innerText = 'delete';

        divOut.appendChild(checkbox);
        divOut.appendChild(p);

        item.appendChild(divOut);
        item.appendChild(deleteBtn);

        list.appendChild(item);
        input.value = '';

        //task done
        checkbox.addEventListener('click', function() {
            doneTask(checkbox);
        });
        //delete task
        deleteBtn.addEventListener('click', function() {
            deleteTask(item);
            count--;
        });

        //drag&drop
        handleDragEnd(item);

        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);

        addBtn.disabled = true;
        count++;
    }
}

function handleDragEnd(e) {
    [].forEach.call(e, function (col) {
        col.classList.remove('over');
    });
}

function handleDragStart(e) {
    dragEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter() {
    this.classList.add('over');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave() {
    this.classList.remove('over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (dragEl !== this) {
        dragEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
}

function doneTask(done) {
    done.innerHTML = 'check_box'
}

function deleteTask(task) {
    task.remove();
    message.style.display = 'none';
    input.disabled = false;
}

list.addEventListener('click', function(e){
    const firstElement = 0;
    if(e.target.classList[firstElement] === 'material-icons') {
        deleteTask(e.target.parentNode)
    } else if (e.target.classList[firstElement] === 'check') {
        doneTask(e.target)
    }
});