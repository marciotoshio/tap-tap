var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameCanvas', { preload: preload, create: create, update: update });

var explosion;

function preload() {
  game.load.image('bg-wood', 'assets/images/bg-wood.jpg');
  game.load.image('bg-stone', 'assets/images/bg-stone.jpg');
  game.load.image('bg-cracks', 'assets/images/bg-cracks.jpg');
  game.load.image('explosion', 'assets/images/explosion.png');
}

function create() {
  game.add.sprite(0, 0, 'bg-wood');
  explosion = game.add.sprite(0, 0, 'explosion');
  explosion.kill();
  game.input.onDown.add(clickHandle, this);
}

function update() {
}

function clickHandle(pointer) {
  createExplosion(pointer);
}

function createExplosion(pointer) {
  explosion.revive();
  explosion.anchor.setTo(.5, .5);
  explosion.x = pointer.x;
  explosion.y = pointer.y;
  explosion.alpha = 1;
  explosion.scale.setTo(.1,.1);
  var time = 500;
  game.add.tween(explosion.scale).to({x:.6,y:.6}, time, Phaser.Easing.Exponential.Out, true);
  game.add.tween(explosion).to({alpha:0}, time, Phaser.Easing.Linear.In, true);
}