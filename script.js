$(document).ready(init);
function init(){
	$(".tower").on("click", selectTopOfStack);
	$(".contains").on("click", placePiece)
}

function selectTopOfStack (event) {
	var selectedPiece = event.target.children[0].children[0];
	if ($(selectedPiece).hasClass("highlight")){
		$(".highlight").removeClass("highlight")
		removePiece(selectedPiece);
	} else {
		$(".highlight").toggleClass("highlight")
		$(selectedPiece).addClass("highlight")
	}
}

function removePiece (selectedPiece) {
	var removedPiece = $(selectedPiece).remove();
	return removedPiece;
}

function placePiece (removedpiece) {
	// if ( || )
	$(this).append(removedPiece);
}

//for calc -> $().on("keypress", "MAIN OPERATOR IF ELSE FUNCTION"
// || keypress.(Charcode("ASCII KEY CODE HERE"))

// function applyRules () {
// 	if ( the selected piece is less than the top existing piece or there are no existing pices)
// 		put the piece in the box. 
// }