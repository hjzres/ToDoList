const addNoteButton = document.getElementById("add-to-do");
const modal = document.getElementById("modal");

let noteNum = 0;


addNoteButton.addEventListener('click', () => {
    modal.style.display = "block";
});

let NewNote = () => {
    const noteDiv = document.createElement("div");
    noteDiv.className = 'to-do';
    noteDiv.id = 'to-do' + noteNum;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    noteDiv.appendChild(checkbox);

    const text = document.createElement("p");
    text.textContent = "New Note";
    noteDiv.appendChild(text);
    document.body.appendChild(noteDiv);
    noteNum++;
}

