
$(document).ready(function(){
	$("#submit").click(function(){
		$("#success").removeClass("hide");
	});
	
	$("#ISBN").keyup(function(){
		if(this.value){
			$(".books").removeClass("hide");
		}else{
			$(".books").addClass("hide");
		}
	});
	$("#titel").keyup(function(){
		if(this.value){
			$(".scripts").removeClass("hide");
		}else{
			$(".scripts").addClass("hide");
		}
	});
	
	$(".list-group-item").click(function(){
		$(".list-group-item").removeClass("active");
		$(this).addClass("active");
		$("#ISBN").val ("10....");
		$("#Author").val ("Hans Peter");
		$("#titel").val ("Informatik ...");
		$("#Studienrichtung").val ("Informatik");
		$("#Fächer").val ("PK, OOP, IIXD,...");
	});
});