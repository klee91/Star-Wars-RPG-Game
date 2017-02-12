
var hpOptions = [120 , 100, 150, 180];
var attackOptions=[5,8,12,18];
var counterOptions=[3,6,13,20];
var randomHp = 0;
var randomAttack = 0;
var randomCounter = 0;

//take out HP option from array after being assigned
function deleteRandomHp() {
	hpOptions.splice(hpOptions.indexOf(randomHp),1);
}

//assign random HP
function getRandomHp() {
	randomHp = hpOptions[Math.floor(Math.random() * hpOptions.length)];
	deleteRandomHp();
	return randomHp;
}

//take out attack option
function deleteRandomAttack() {
	attackOptions.splice(attackOptions.indexOf(randomAttack),1);
}

//assign random attack
function getRandomAttack() {
	randomAttack = attackOptions[Math.floor(Math.random() * attackOptions.length)];
	deleteRandomAttack();
	return randomAttack;
}

//take out counter attack option
function deleteRandomCounter() {
	counterOptions.splice(counterOptions.indexOf(randomCounter),1);
}

//assign random counter attack
function getRandomCounter() {
	randomCounter = counterOptions[Math.floor(Math.random() * counterOptions.length)];
	deleteRandomCounter();
	return randomCounter;
}

$(document).ready(function() {
	//assign health and attack strength to each character (random)
	$( ".button" ).each(function() {
  		//HP
  		var healthDisplay = $("<div>")
		healthDisplay.addClass("health")
		$(healthDisplay).attr("health-points" , getRandomHp());
		$(healthDisplay).html($(healthDisplay).attr("health-points"));
		$(this).append(healthDisplay);
		//ATTACK
		var attackDisplay = $("<div>")
		attackDisplay.addClass("attack")
		$(attackDisplay).attr("attack-points" , getRandomAttack());
		// $(attackDisplay).html($(attackDisplay).attr("attack-points"));
		$(this).append(attackDisplay);

	});
	
//reset function 
	// function reset() {
			//location.reload();
	// };
	
//attack button function: increases attack power by the base attack power (i.e. 6,12,18,24,30,etc.)
//random attack accumulates, random counter stays the same. randomAttack decreases mainenemy HP. randomCounter decreases hero HP. 
	$('.attackBtn').on('click', function() {
		var heroStr = $('#hero').find('.attack').attr("attack-points");
		var enemyStr = $('.main-enemy').find('.counter').attr("counter-points");
		var heroHP = $('#hero').find('.health').attr("health-points");
		var enemyHP = $('.main-enemy').find('.health').attr("health-points");
		heroNewHP = (enemyHP - heroStr);
		enemyNewHP = (heroHP - enemyStr);
		$('#brawl').html("You attacked for " + heroStr + " points. <br> Enemy attacked for " + enemyStr + " points.");
		$('#hero').find('.health').html(heroNewHP);
		$('.main-enemy').find('.health').html(enemyNewHP);
		heroStr *= 2;

		if(heroNewHP == 0) {
			alert("Your Hero Lost...")
		} else if(enemyNewHP == 0) {
			alert("You have beaten the enemy!")
		}
	});

//on click functions for initial character selection
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
			$(counterDisplay).attr("counter-points" , getRandomCounter());
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
			$(counterDisplay).attr("counter-points" , getRandomCounter());
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
			$(counterDisplay).attr("counter-points" , getRandomCounter());
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
			$(counterDisplay).attr("counter-points" , getRandomCounter());
			$(this).append(counterDisplay);
		}
	});


});


