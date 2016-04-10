var app = angular.module('myApp',[]);

app.controller("WalkingController",function($scope,$timeout) {
	var right=[
	'You found a horse but saddle seat is missing :(...',
	'You found a hammer and nails....',
	'You found fruits trees but out of reach...:(',
	'You Met a old man, who told you to take left for next step what you will do now...?',
	'You were hungry and you ate poisonous berries and died',
	'You found a pond which is full of water..:)',
	'You came into snakes land and but somehow you got out....',
	'You found a map that is showing only right direction.',
	'You found a Dominoes...kidding mango tree and you ate a lot of mangoes..:)',
	'You found a basket full of food..:)',
	'You found a bed and you slept for hours',
	'You found a gold coin and left was written on one side..',
	'You stepped into mud pool and but you were saved by Bear Grylls episode you saw on discovery...:P',
	'You found a rope and tapes',
	'You died as a big rock fell from sky..'
	];
	var left=[
	'You found a bullock cart :)...',
	'You found an AXE....',
	'You found food...:)',
	'You Met a small girl, she told you that she is coming from right but her right or your right?? what you will do now...?',
	'You found a variety of animals playing n enjoying with their family',
	'You found a pond which is full of crocodiles and they ate you..:)',
	'You found a matchstick and wooden small logs....',
	'You found a paper in which it was written once enter can not go back....right????',
	'You found a board in which direction was pointed to up :(',
	'You found a cave where lots of food and wines was stored..:)',
	'You saw ur parents and your mother called come my child sit right next to me..which right she meant??....Think',
	'You stepped in and you fell in a dig where u died',
	'You found a mineral water bottle but water was not dere...:(',
	'You found a tribe and they gave you food and love...:)',
	'You found a treasure box..when you opened it, something was written dere...Left Destiny Right'
	];
	var success='Congratzzz!!!! You finally found the treasure...but the real treasure is life which you are living and the destiny of a person lies in their hand only.....Left or Right :P';
	var selected=[];
	$scope.dead=false;
	$scope.steps=[];
	$scope.find=function(){
		if($scope.way!="right"&&$scope.way!="left"){
			$scope.way=""
			alert("Enter right or left")
		}
		else{
			$scope.steps.push($scope.way);
			var flag=0;
			var curr;
			while(flag==0){
				curr=Math.floor(Math.random()*15);
				if(selected.length==0){
					flag=1;
					selected.push(curr);
				}
				else{
					for(i=0;i<selected.length;i++){
						if(selected[i]==curr)
							flag=2;
					}
					if(flag==2)
						flag=0;
					else{
						flag=1;
						selected.push(curr);
					}
				}	
			}
			
			if($scope.way=="right"){
				$scope.path=right[curr];
				if(curr==4||curr==14){
					$scope.dead=true;
					$timeout(function(){
						alert("Please Restart your journey......")	
					},2000);
				}

			}
			else{
				$scope.path=left[curr];
				if(curr==5||curr==11){
					$scope.dead=true;
					$timeout(function(){
						alert("Please Restart your journey......")	
					},2000);
				}
			}
			if(selected.length==15){
				$timeout(function(){
					$scope.path=success;
					$scope.dead=true;
				},2000);
			}
		}
	}
})
