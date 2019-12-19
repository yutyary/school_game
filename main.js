enchant();

window.onload = function() {
    var core = new Core(320, 320);
    core.preload('chara1.png');
    core.score = 0;
    core.fps = 15;
    core.rootScene.backgroundColor = "blue";
    core.onload = function() {
	var GameOverFlag = 0;
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 144;
        bear.y = 144;
	bear.frame = 1;
	
	var enemy1 = new Sprite(32, 32);
	var enemy1alive = 1;
        enemy1.image = core.assets['chara1.png'];
        enemy1.x = 80;
        enemy1.y = 80;
	enemy1.frame = 5;
	core.rootScene.addChild(enemy1);
	
	var enemy2 = new Sprite(32, 32);
	var enemy2alive = 1;
        enemy2.image = core.assets['chara1.png'];
        enemy2.x = 180;
        enemy2.y = 180;;
	enemy2.frame = 5;
	core.rootScene.addChild(enemy2);
	
	var enemy3 = new Sprite(32, 32);
	var enemy3alive = 1;
        enemy3.image = core.assets['chara1.png'];
        enemy3.x = 240;
        enemy3.y = 240;
	enemy3.frame = 5;
	core.rootScene.addChild(enemy3);
	
	var hunter1 = new Sprite(32, 32);
        hunter1.image = core.assets['chara1.png'];
        hunter1.x = 120;
        hunter1.y = 120;
	hunter1.frame = 10;
	core.rootScene.addChild(hunter1);
	
	var hunter2 = new Sprite(32, 32);
        hunter2.image = core.assets['chara1.png'];
        hunter2.x = 220;
        hunter2.y = 220;
	hunter2.frame = 10;
	core.rootScene.addChild(hunter2);
	
	var hunter3 = new Sprite(32, 32);
        hunter3.image = core.assets['chara1.png'];
        hunter3.x = 280;
        hunter3.y = 280;
	hunter3.frame = 10;
	core.rootScene.addChild(hunter3);

	bear.addEventListener('enterframe', function() {
	    if (core.input.left) { if(bear.x > 0) this.x -= 5; }
	    if (core.input.right) { if(bear.x < 288) this.x += 5; }
	    if (core.input.up) { if(this.y > 0) this.y -= 5; }
	    if (core.input.down) { if(this.y < 288) this.y += 5; }

	    if (bear.within(enemy1, 16) && enemy1alive == 1) {
		enemy1alive = 0;
		core.score += 1;
		core.rootScene.removeChild(enemy1);
	    }
	    if (bear.within(enemy2, 16) && enemy2alive == 1) {
		enemy2alive = 0;
		core.score += 1;
		core.rootScene.removeChild(enemy2);
	    }
	    if (bear.within(enemy3, 16) && enemy3alive == 1) {
		enemy3alive = 0;
		core.score += 1;
		core.rootScene.removeChild(enemy3);
	    }
	    if (bear.within(hunter1, 16)) GameOverFlag = 1;
	    if (bear.within(hunter2, 16)) GameOverFlag = 1;
	    if (bear.within(hunter3, 16)) GameOverFlag = 1;
	    
	    var gameOverScene = new Scene();
	    gameOverScene.backgroundColor = 'black';
	    if(core.frame / core.fps > 10 || GameOverFlag == 1) {
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
