const addNoteButton = document.getElementById("addNote");


addNoteButton.addEventListener('click', () => {
    const noteDiv = document.createElement("div");
    noteDiv.className = 'note';
    noteDiv.id = 'note';
    document.body.appendChild(noteDiv);
});

