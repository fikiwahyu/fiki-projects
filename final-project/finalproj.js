var todolist = JSON.parse(localStorage.getItem("todolist"));
if (!todolist) {
    todolist = []
}
var sbmt_btn = document.getElementById("todo-sbmt");
var todo_section = document.getElementById("todo-section")

sbmt_btn.addEventListener("click", addtodo);

setTimeout(() => {
    todoinit();
    deletelistinit();
    donelistinit();
}, 1000);

function deletelistinit() {
    var ini = document.querySelectorAll(".delete");

    for (let i = 0; i < ini.length; i++) {
        ini[i].addEventListener("click", () => {
            todolist.splice(i, 1);
            localStorage.setItem("todolist", JSON.stringify(todolist));
            createcard(todo_section, todolist);
        });
    }
}

function donelistinit() {
    var ini = document.querySelectorAll(".done");

    for (let i = 0; i < ini.length; i++) {
        ini[i].addEventListener("click", () => {
            todolist[i].stats = "Done";
            localStorage.setItem("todolist", JSON.stringify(todolist));
            createcard(todo_section, todolist);
        });
    }
}

function addtodo() {
    var agenda_form = document.getElementById("form-agenda");
    var waktu_form = document.getElementById("form-waktu");
    var desc_form = document.getElementById("form-desc");
    if ((agenda_form.value != "") && (waktu_form.value != "") && (desc_form.value != "")) {
        var newlist = new CreateList(agenda_form, waktu_form, desc_form);
        todolist.push(newlist);
        if (sortlist(todolist)) {
            localStorage.setItem("todolist", JSON.stringify(todolist))
            createcard(todo_section, todolist);
        }
    } else {
        alert("Lengkapi Formnya")
    }
    deletelistinit();
    donelistinit();
}

function todoinit() {
    createcard(todo_section, todolist);
}

var sortlist = (list) => {
    for (let j = 0; j < list.length; j++) {
        for (let i = j; i < list.length; i++) {
            var temp = list[j];
            if (list[j].waktu > list[i].waktu) {
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    return true;
}

var createcard = (container, list) => {
    container.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        container.innerHTML += `<div class="card mt-3">
        <div class="card-body todo-container">
            <div class="todo-group">
                <div class="todo-title fw-bold h6">
                    ${list[i].agenda}
                </div>
                <div class="todo-datetime">
                ${list[i].waktu}
                </div>
            </div>
            <div class="todo-desc">
                ${list[i].desc}
            </div>
            <div class="todo-btn">
                <div class="todo-group gap-3">
                    <div class="btn btn-sm w-50 btn-outline-danger delete"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg> Delete</div>
                    <div class="btn btn-sm w-50 btn-outline-success done"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                            <path
                                d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                            <path
                                d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                        </svg> Done</div>
                </div>
            </div>
            <div class="todo-stats">
                <span class="spinner-grow spinner-grow-sm" style="height: 10px; width:10px;"
                    role="status" aria-hidden="true"></span>
                ${list[i].stats}
            </div>
        </div>
    </div>`
    }

}

class CreateList {
    constructor(agenda_form, waktu_form, desc_form) {
        this.agenda = agenda_form.value;
        this.waktu = waktu_form.value;
        this.desc = desc_form.value;
        this.stats = "ongoing";
    }
}