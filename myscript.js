$(document).ready(function() {

$("#tekst1").hide();
$("#tekst2").hide();
$("#tekst3").hide();

		$("#knop1").click( function() {
		var income = Number($("#inkomen").val());
		console.log(income);

		window.income = income;

		$("#tekst1").show();
		$("#demo").append(income);

		$("#stap1").css('display','none');
		$("#stap2").css('display','block');
		
	});

		$("#knop2").click( function() {
		var rent = Number($("#huur").val());
		console.log(rent);

		window.rent = rent;

		$("#stap2").css('display','none');
		$("#stap3").css('display','block');
		
	});

		$("#knop3").click( function() {
		var utility = Number($("#kosten").val());
		console.log(utility);

		window.utility = utility;

		$("#stap3").css('display','none');
		$("#stap4").css('display','block');
		
	});

		$("#knop4").click( function() {
		var food = Number($("#eten").val());
		console.log(food);

		window.food = food;
		
		var totalCosts = rent + utility + food;
		var left = income- totalCosts;
		var percentage = income / 100;
		var percentageSpent = totalCosts / percentage;
		percentageSpent = percentageSpent + "%";

		console.log(percentageSpent)
		$(".progress").width(percentageSpent);
		$("#percentage").append(percentageSpent + " spent");


		$("#stap4").css('display','none');
		$("#stap5").css('display','block');

		$("#tekst2").show();
		$("#tekst3").show();

		$("#kostenen").append(totalCosts)
		$("#over").append(left)



	});

		$("#reset").click( function() {
			location.reload()

/*		$("#stap5").css('display','none');
		$("#stap1").css('display','block');*/

	});
});