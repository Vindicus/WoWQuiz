$(document).ready(function(){
var NextQ=0;
var TotalCorrect=0;
var QuestionSet=new Array();
QuestionSet=[{
    Question:"With the characters shown below, who is Thrall?",
    Description:"Thrall of Durotan (born 2 years ADP),was the Warchief of the restored orcish Horde and ruler of the red land of Durotar in Kalimdor.  Before the Cataclysm, Thrall gave temporary leadership to Garrosh Hellscream in order to lead the Earthen Ring\'s effort with Farseer Nobundo against the Twilight\'s Hammer cult and elemental imbalance afflicting Azeroth.",
    Options:["<img data-title='CL1' src='orc.gif'/>","<img data-title='CL2' src='orc2.gif'/>",
    "<img data-title='CL3' src='belf.gif'/>","<img data-title='CL4' src='lk.gif'/>"]
   
    },{
    Question:"With the pets shown below, Which one can a hunter tame?",
    Description:"To obtain a pet, the Hunter must use his/her [Tame Beast] skill, from a select family, who is exactly their level or lower. Upon starting the taming process, the Hunter's armor is decreased by 100% and they cannot perform any other actions. The taming process takes 20 seconds and does not increase with every hit, but it can be interrupted.",
    Options:["<img data-title='CL4' src='bird.gif'/>","<img data-title='CL2' src='flyer.gif'/>",
    "<img data-title='CL3' src='gorilla.gif'/>","<img data-title='CL1' src='cat.gif'/>"]
 
    },{
    Question:"With the characters show below, which race is part of the Horde faction?",
    Description:"The Horde is one of the two major political factions of the mortal races in Azeroth, its counterpart being the Alliance. The Horde, a faction led by off-worlders and composed of outsiders has survived these obstacles by making allies with few of the native races of Azeroth or even uneasy allies",
    Options:["<img data-title='CL2' src='human.gif'/>","<img data-title='CL1' src='belf2.gif'/>",
    "<img data-title='CL3' src='worgen.gif'/>","<img data-title='CL4' src='eagle.gif'/>"]
    },{
    Question:"Which prize/present can you obtain during the Christmas event?",
    Description:"The Feast of Winter Veil is a festive time of year during which players can sample delicious festive treats, playfully toss snowballs, and receive special holiday gifts! The Feast of Winter Veil is a reference to the end-of-year seasonal holiday of Christmas.",
    Options:["<img data-title='CL1' src='reindeer.gif'/>","<img data-title='CL2' src='robo.gif'/>",
    "<img data-title='CL3' src='scorpion.gif'/>","<img data-title='CL1' src='peddlefeet.gif'/>"]
    },{
    Question:"Oh gosh I hate dealing with a murloc, which one is it?",
    Description:"The murloc is a bipedal, amphibious humanoid race residing along coastlines, lakeshores, and riverbeds. Murlocs possess bulbous bodies, large mouths lined with rows of sharp fangs, and slime-coated skin. Individuals range in coloration from turquoise to darkish grey, while their heights vary from 3-1/2 feet to 6 feet",
    Options:["<img data-title='CL2' src='tree.gif'/>","<img data-title='CL3' src='ice.gif'/>",
    "<img data-title='CL1' src='frog.gif'/>","<img data-title='CL4' src='bird2.gif'/>"]
    }];
    function Checking(){
    	if($(".Clicked").data("title")=="CL1"){
    	TotalCorrect+=1;	
    	}else{
    		TotalCorrect+=0;
    	}
    	
    	}
function DisplayNextQ(){
	if(NextQ > QuestionSet.length-1){
	$("#QuizBox h2").text("Quiz Completed");
	$("#QuizBox p").text("You scored "+TotalCorrect+"/5 questions. (Click icon to try again.)");
	if(TotalCorrect==5){
		$("#QuizBox p").append("<p>NICE, you are truly a fan of WoW.");
	}
		if(TotalCorrect==0){
			$("#QuizBox p").append("<p>Ouch, you got a ZERO, I thought you were a fan of WoW, How could you score a 0");
		}
		NextQ=0;
			TotalCorrect=0;
		
	}else{
    $("#QuizBox h2").text(QuestionSet[NextQ].Question);
    $("#QuizBox p").text(QuestionSet[NextQ].Description);
    for(var fill=0; fill<=QuestionSet[NextQ].Options.length; fill++){
    	$(".Options").append(QuestionSet[NextQ].Options[fill]);
    }
    NextQ+=1;
   }
   

}
     $(".Options").on("click","img",function(){
	$(".Options img").removeClass("Clicked");
	$(this).addClass("Clicked");
	
});


$(".buttons img").click(function(){
	



Checking();
	$("#QuizBox").fadeOut("slow",function(){
	$(".Options img").remove();
	$(".buttons img").fadeOut("fast");
	DisplayNextQ();
	});
	$("#QuizBox").fadeIn("slow",function(){
		$(".buttons img").delay(200).fadeIn("slow");

	});


	});


	
});
