console.log("TO DO LIST");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }
    let myObject = { title: addTitle.value, text: addTxt.value };
    notesObject.push(myObject);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    addTitle.value = "";
    addTxt.value = "";
    showNotes();
});


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }
    let html = "";
    notesObject.forEach(function (element, index) {
        html += `<div class="row container-fuild my-3 mx-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                        <a class="btn btn-secondary" id="editBtn">EDIT</a>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-secondary">DELETE</button>
                        </div>
                    </div>
                       </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObject.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show!`
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObject = JSON.parse(notes);
    }
    notesObject.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObject));
    showNotes();
}






