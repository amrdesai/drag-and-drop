// Variables
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Event listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

// Function: Drag start
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

// Function: Drag End
function dragEnd() {
    this.className = 'fill';
}

// Function: Drag Over
function dragOver(e) {
    e.preventDefault();
}

// Function: Drag Enter
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

// Function: Drag Leave
function dragLeave() {
    this.className = 'empty';
}

// Function: Drag Drop
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
