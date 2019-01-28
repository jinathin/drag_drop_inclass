(() => {
	console.log('fired')
	// set up the puzzle pieces and boards

	// need a reference to each piecese that we want to create 
	const thePieces= ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	// get a reference to the drag side 
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board")

	// get a reference to the buttons at the bottom so we can change the puzzle 
	let puzzleSelectors = document.querySelectorAll("#buttonHolder img");

	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate images here -> need to make 4 (top left, right bottom left, right)
		// debugger;
		// loop through the images refs and generate one for each
		thePieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;

			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}

	function resetPuzzlePieces() {
		// change the current puzzle, regnerate the pieces
		// debugger;
		piecesBoard.innerHTML = ""
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling goes here
	puzzleSelectors.forEach(button => button.addEventListener("click", resetPuzzlePieces));

	// call this function to set up / generate the pieces on Load
	createPuzzlePieces(0);

})();
