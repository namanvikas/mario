function preload() {
	world_start = loadSound("world_start.wav");
	mairo_jump=loadSound("jump.wav");
	mairo_coin=loadSound("coin.wav");
	mairo_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
  video.size(800,400);
  video.parent('game_console');

  poseNet=ml5.poseNet(video,modelloaded);
  poseNet.on('pose',gotposes);
}



function draw() {
	game()
}


function modelloaded(){
	console.log("model loaded");
  }
  function gotposes(results){
	if(results.length>0){
		console.log(results);
	  noseX=results[0].pose.nose.x;
	  noseY=results[0].pose.nose.y;
	}
  }
  
  
  

//https://editor.p5js.org/vikas.vipbags/sketches/naz1ljdjg



