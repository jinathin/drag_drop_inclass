(() => {
	console.log('fired')
	// set up the puzzle pieces and boards

	const theButton = document.querySelector("#buttonHolder img");
	
	function changeHeadline() {
		document.querySelector("h1").textContent = "Changing headline with JS.";
		document.querySelector("p").textContent = "This is the subhead";
	}
	// debugger;
	// it makes the code stops
	// window.addEventListener("load", changeHeadline);
	theButton.addEventListener("click", changeHeadline);
	// load, click, mouse etc are the command to make it work

	
})();
