function matchThumbnailToDisplay(DOMelement) {
	var thumbnailId = DOMelement.id;
	var matchingId = thumbnailId.substr(thumbnailId.length - 1);
	$(".project-display").addClass("hide");
	$("#display-container").find($("#display-" + matchingId)).removeClass("hide");
}

$(function() {
	$("#to-projects").on("click", function(){
		$("#projects").removeClass("hide");
		$("#main").addClass("hide");
		$("#to-projects").addClass("clicked");
		$("#to-home").removeClass("clicked");
	});

	$("#to-home").on("click", function(){
		$("#projects").addClass("hide");
		$("#main").removeClass("hide");
		$("#to-projects").removeClass("clicked");
	});

	$(".project-thumbnail").on("click", function(){
		matchThumbnailToDisplay(this);
	});

	$("#main h1").addClass("load");
});
