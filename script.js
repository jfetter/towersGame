$(document).ready(init);
function init () {

	$(".tower").on("click", selectTopOfStack);
  $("#tower3").on("click", checkForVictory);

function selectTopOfStack(event){
			var selectedThing = $(this).children()[0];
			var thingDataSize = $(this).find(">:first-child").data("size");
			console.log("S T:", selectedThing, "S T S:", thingDataSize);
			var lilBroSize = $(this).find(">:nth-child(2)").data("size");
			console.log("LBS:", lilBroSize);
 			// if the class "highlight has not been used anywhere in the body then highlight the box"
 			if  (! $("body").hasClass("highlight")){
			$(selectedThing).addClass("highlight"); 
		 // but if the class "highlight" has been used, remove the item and take the highlight class highlight 
		  } //else  {
			// removeThing();
			// var removedThing =	$(selectedThing).detach().removeClass("highlight");
		 }
}

function placeThing () {
 	if((thingDataSize < lilBroSize || lilBroSize === false))
 	$("this").append(removeTopOfStack);
};

function checkForVictory(){
// if ( tower3 has 3 child elements in it execute the declare victory function )
// {
// 	declareVictory;
// }
//}


function declareVictory (){
	$("#winner").removeClass("invisible");
	$("body").css("background-color", "orange");
}
			
} //end init

