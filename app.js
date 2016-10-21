$(document).ready(function() {
  var deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";
	$.getJSON(deckAPI, function(res) {
		var deckId = res.deck_id;
		console.log(deckId)
		console.log(res);
	});// end .getJson
}); // end ready