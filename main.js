enchant();

window.onload = function() {
    var core = new Core(320, 320);
    core.preload('chara1.png');
    core.score = 9;
    core.fps = 15;
    core.rootScene.backgroundColor = "blue";
    core.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 144;
        bear.y = 144;
	bear.frame = 1;

	bear.addEventListener('enterframe', function() {
	    if (core.input.left) { if(bear.x > 0) this.x -= 5; }
	    if (core.input.right) { if(bear.x < 288) this.x += 5; }
	    if (core.input.up) { if(this.y > 0) this.y -= 5; }
	    if (core.input.down) { if(this.y < 288) this.y += 5; }

	    var gameOverScene = new Scene();
	    gameOverScene.backgroundColor = 'black';
	    if(core.frame / core.fps > 10) {
		core.pushScene(gameOverScene);
		core.stop();
		var GameOver= new Label();
		GameOver.x = 100;
		GameOver.y = 140;
		GameOver.color = 'red';
		GameOver.font = '20px "Arial"';
		GameOver.text = 'GAME OVER';
		gameOverScene.addChild(GameOver);
	    }
	});

	var label = new Label();
	label.x = 240;
	label.y = 20;
	label.color = 'red';
	label.font = '14px "Arial"';
	label.text = 'TIME:' + '0';
	label.on('enterframe', function() {
	    label.text = 'TIME:' + (10 - core.frame / core.fps).toFixed(2);
	});

	var score = new Label();
	score.x = 240;
	score.y = 5;
	score.color = 'red';
	score.font = '14px "Arial"';
	score.text = 'SCORE:' + '0';
	score.on('enterframe', function() {
	    score.text = 'SCORE:' + core.score;
	});

	var GameOver= new Label();
	GameOver.x = 100;
	GameOver.y = 140;
	GameOver.color = 'red';
	GameOver.font = '30px "Arial"';
	GameOver.text = 'GAME OVER';

	core.rootScene.addChild(bear);
	core.rootScene.addChild(label);
	core.rootScene.addChild(score);
    }
    core.start();
};
