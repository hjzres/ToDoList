const addNoteButton = document.getElementById("add-to-do");
const textArea = document.getElementById("textArea");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");

let noteNum = 0;


addNoteButton.addEventListener('click', () => {
    modal.style.display = "block";
});

submit.addEventListener('click', () =>{
    NewNote(textArea.value);
    textArea.value = "";
    modal.style.display = "none";
});

let NewNote = (note) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = 'to-do';
    noteDiv.id = 'to-do' + noteNum;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    noteDiv.appendChild(checkbox);

    const text = document.createElement("p");
    text.textContent = note;
    noteDiv.appendChild(text);
    document.body.appendChild(noteDiv);
    noteNum++;
}

