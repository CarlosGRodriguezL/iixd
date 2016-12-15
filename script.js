
$(document).ready(function(){
	$("#submit").click(function(){
		$("#success").removeClass("hide");
	});
	
	$("#ISBN").keyup(function(){
		if(this.value){
			$(".books").removeClass("hide");
			$(".scripts").addClass("hide");
		}else{
			$(".books").addClass("hide");
			$(".books").addClass("hide");
			$("#ISBN").val ("");
			$("#Author").val ("");
			$("#titel").val ("");
			$("#Studienrichtung").val ("");
			$("#Fächer").val ("");
		}
	});
	$("#titel").keyup(function(){
		if(this.value){
			$(".scripts").removeClass("hide");
			$(".books").addClass("hide");
		}else{
			$(".scripts").addClass("hide");
			$(".books").addClass("hide");
			$("#ISBN").val ("");
			$("#Author").val ("");
			$("#Studienrichtung").val ("");
			$("#Fächer").val ("");
		}
	});
	
	$(".list-group-item").click(function(){
		$(".list-group-item").removeClass("active");
		$(this).addClass("active");
		if($(this).closest(".books").length>0){
			$("#ISBN").val ("10....");
			$("#Author").val ("Hans Peter");
			$("#titel").val ("Informatik Grundlagen ...");
			$("#Studienrichtung").val ("Informatik");
			$("#Fächer").val ("PK, OOP, IIXD,...");
		}else{
			$("#ISBN").val ("");
			$("#Author").val ("Jörg Maier");
			$("#titel").val ("Informatik Basics Script ...");
			$("#Studienrichtung").val ("Informatik");
			$("#Fächer").val ("PK, OOP, IIXD,...");
		}
		
	});
});