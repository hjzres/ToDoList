const addNoteButton = document.getElementById("addNote");
let noteNum = 0;


addNoteButton.addEventListener('click', () => {
    const noteDiv = document.createElement("div");
    noteDiv.className = 'note';
    noteDiv.id = 'note' + noteNum;
    document.body.appendChild(noteDiv);
    noteNum++;
});

