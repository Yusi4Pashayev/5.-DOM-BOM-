// calculation

const text = document.querySelector('#text');
const button = document.querySelector('#btn');
const list = document.querySelector('#TodoList');

var arr = [];
var i = 0;


function update() {
    list.innerHTML = arr.map((x) => `
<div class="save ${x.mark ? "mark" : ""}" id="${x.id}">
    <span id="save_text">${x.text}</span>
    <button id="btn1" onclick="mark(${x.id})">Mark As done</button>
    <button id="btn2" onclick="del(${x.id})">Delete</button>
</div>
`).join(' ');
}

btn.addEventListener('click', (event) => {
    var obj = {
        id: ++i,
        mark: false,
        text: text.value
    }
    arr.push(obj);
    update();
    text.value = "";
});

function del(id) {
    var index = arr.findIndex(x => x.id === id)
    arr.splice(index, 1);
    update();
}

function mark(id) {
    var index = arr.findIndex(x => x.id === id)
    arr[index].mark = !arr[index].mark;
    update();
}





