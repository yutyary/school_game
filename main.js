enchant();

window.onload = function() {
    var core = new Core(320, 320);
    core.preload('chara1.png');
    core.fps = 15;
    core.rootScene.backgroundColor = "blue";
    core.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = core.assets['chara1.png'];
        bear.x = 144;
        bear.y = 144;
	bear.frame = 1;

	bear.addEventListener('enterframe', function() {
	    if (core.input.left) {
		if(bear.x > 0) this.x -= 5;
	    }
	    if (core.input.right) {
		if(bear.x < 280) this.x += 5;
	    }
	    if (core.input.up) {
		if(this.y > 0) this.y -= 5;
	    }
	    if (core.input.down) {
		if(this.y < 280) this.y += 5;
	    }
	});

	var label = new Label();
	label.x = 275;
	label.y = 5;
	label.color = 'red';
	label.font = '14px "Arial"';
	label.text = '0';
	label.on('enterframe', function() {
	    label.text = (core.frame / core.fps).toFixed(2);
	});

	core.rootScene.addChild(bear);
	core.rootScene.addChild(label);
    }
    core.start();
};
