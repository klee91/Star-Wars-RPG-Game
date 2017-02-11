// var luke= {
// 	hp : 80,
// 	str: randomAttack,
// 	counter: randomCounter,
// };
// var vader = {
// 	hp : ,
// 	str: randomAttack,
// 	counter: ,
// };
// var kyloRen = {
// 	hp : ,
// 	str: ,
// 	counter: ,
// };
// var rey = {
// 	hp : ,
// 	str: ,
// 	counter: ,
// };
var hpOptions = [120 , 100, 150, 180];
var attackOptions=[5,8,12,18];
var counterOptions=[3,6,13,20];
var randomHp = 0;
var randomAttack = 0;
var randomCounter = 0;


function deleteRandomHp() {
	hpOptions.splice(hpOptions.indexOf(randomHp),1);
}

function getRandomHp() {
	randomHp = hpOptions[Math.floor(Math.random() * hpOptions.length)];
	deleteRandomHp();
	return randomHp;
}

function deleteRandomAttack() {
	attackOptions.splice(attackOptions.indexOf(randomAttack),1);
}

function getRandomAttack() {
	randomAttack = attackOptions[Math.floor(Math.random() * attackOptions.length)];
	deleteRandomAttack();
	return randomAttack;
}

function deleteRandomCounter() {
	counterOptions.splice(counterOptions.indexOf(randomCounter),1);
}

function getRandomCounter() {
	randomCounter = counterOptions[Math.floor(Math.random() * counterOptions.length)];
	deleteRandomCounter();
	return randomCounter;
}

$(document).ready(function() {
	//assign health and attack strength to each character (random)
	$( ".button" ).each(function() {
  		
  		var healthDisplay = $("<div>")
		healthDisplay.addClass("health")
		$(healthDisplay).attr("health-points" , getRandomHp());
		$(healthDisplay).html($(healthDisplay).attr("health-points"));
		$(this).append(healthDisplay);

		var attackDisplay = $("<div>")
		attackDisplay.addClass("attack")
		$(attackDisplay).attr("attack-points" , getRandomAttack());
		// $(attackDisplay).html($(attackDisplay).attr("attack-points"));
		$(this).append(attackDisplay);

	});
	
//reset function 
	// function reset() {

	// };
	
//attack button function: increases attack power by the base attack power (i.e. 6,12,18,24,30,etc.)
//random attack accumulates, random counter stays the same. randomAttack decreases mainenemy HP. randomCounter decreases hero HP. 
	$('.attackBtn').on("click", function() {
		var heroStr = $('#hero').find('.attack').attr("attack-points");
		var enemyStr = $('.main-enemy').find('counter').attr("counter-points");
		var heroHP = $('#hero').find('.health').attr("health-points");
		var enemyHP = $('.main-enemy').find('.health').attr("health-points");
		enemyHP - heroStr;
		heroHP - enemyStr;
		$('#defender').html("You attacked for " + heroStr + "points.");
		$('#defender').html("Enemy attacked for " + enemyStr + "points.")
		heroStr += heroStr * 2;
	});

//on click function for initial character selection
	$('.luke').on('click', function(e) {
		var clickedOn = $(e.target);
    	if (clickedOn.parents().is('#characterSelection')){
      		$('.luke').appendTo('#hero');
			$('.vader').attr("id","enemy").appendTo('#enemies');
			$('.kyloRen').attr("id","enemy").appendTo('#enemies');
			$('.rey').attr("id","enemy").appendTo('#enemies');
    	}
    	//enemy chosen goes to defender position (filters in allowing only 1 enemy at a time)
    	if (clickedOn.parents().is('#enemies') && $('#defender').find('#enemy').length!=1) {
			$('.luke').addClass("main-enemy").appendTo('#defender');
			//assign counter attack stat only when enemy character is a defender. counter attack power never changes
			var counterDisplay = $("<div>")
			counterDisplay.addClass("counter")
			$(".luke").find('.main-enemy').attr("counter-points" , getRandomCounter());
			// $(counterDisplay).html($(counterDisplay).attr("counterAttack"));
			$(this).append(counterDisplay);
		}
	});

	$('.vader').on('click', function(e) {
		var clickedOn = $(e.target);
    	if (clickedOn.parents().is('#characterSelection')){
			$('.vader').appendTo('#hero');
			$('.luke').attr("id","enemy").appendTo("#enemies");
			$('.kyloRen').attr("id","enemy").appendTo("#enemies");
			$('.rey').attr("id","enemy").appendTo("#enemies");
		}
		if (clickedOn.parents().is('#enemies') && $('#defender').find('#enemy').length!=1) {
			$('.vader').addClass("main-enemy").appendTo('#defender');
			var counterDisplay = $("<div>")
			counterDisplay.addClass("counter")
			$(".vader").find('.main-enemy').attr("counter-points" , getRandomCounter());
			// $(counterDisplay).html($(counterDisplay).attr("counterAttack"));
			$(this).append(counterDisplay);
		}
	});

	$('.kyloRen').on("click", function(e) {
		var clickedOn = $(e.target);
    	if (clickedOn.parents().is('#characterSelection')){
			$('.kyloRen').appendTo('#hero');
			$('.luke').attr("id","enemy").appendTo("#enemies");
			$('.vader').attr("id","enemy").appendTo("#enemies");
			$('.rey').attr("id","enemy").appendTo("#enemies");
		}
		if (clickedOn.parents().is('#enemies') && $('#defender').find('#enemy').length!=1) {
			$('.kyloRen').addClass("main-enemy").appendTo('#defender');
			var counterDisplay = $("<div>")
			counterDisplay.addClass("counter")
			$(".kyloRen").find('.main-enemy').attr("counter-points" , getRandomCounter());
			// $(counterDisplay).html($(counterDisplay).attr("counterAttack"));
			$(this).append(counterDisplay);
		}
	});

	$('.rey').on("click", function(e) {
		var clickedOn = $(e.target);
    	if (clickedOn.parents().is('#characterSelection')){
			$('.rey').appendTo('#hero');
			$('.luke').attr("id","enemy").appendTo("#enemies");
			$('.vader').attr("id","enemy").appendTo("#enemies");
			$('.kyloRen').attr("id","enemy").appendTo("#enemies");
		}
		if (clickedOn.parents().is('#enemies') && $('#defender').find('#enemy').length!=1) {
			$('.rey').addClass("main-enemy").appendTo('#defender');
			var counterDisplay = $("<div>")
			counterDisplay.addClass("counter")
			$(".rey").find('.main-enemy').attr("counter-points" , getRandomCounter());
			// $(counterDisplay).html($(counterDisplay).attr("counterAttack"));
			$(this).append(counterDisplay);
		}
	});


});


