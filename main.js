let playerSheet;
let player;
let worldSheet;
let slimePurle
function preload(){
    playerSheet = loadImage('asset/sprites/knight.png');
    worldSheet = loadImage('asset/sprites/world_tileset.png');
    slimeSheet = loadImage('asset/sprites/slime_purple.png');
}


function setup(){
    new Canvas(300,200,'pixelated x4');
    world.gravity.y=9.81;
    player = new Sprite(62, 24, 16, 16);
    player.rotationLock = true
    player.jumpertime = 0;
    player.spriteSheet = playerSheet;
    slimePurle = new Sprite(100,-10,13,13);
    slimePurle.rotationLock = true;
    player.anis.offset.y = -3;
    player.lives = 3;
    player.score = 0;
    
    slimePurle.spriteSheet = slimeSheet;
    slimePurle.addAnis({
        stand:{w: 24, h: 24, row: 1, frames: 4, frameDelay:6},
        hurt: {w: 24, h: 24, row: 5, frames: 4, frameDelay:6}
    })
    slimePurle.changeAni('stand');
    slimePurle.debug = true;
    
    player.addAnis({
        stand:{w: 32, h: 32, row: 0, frames: 4, frameDelay:8},
        run: {w: 32, h: 32, row: 2, frames: 16, },
        roll: {w: 32, h: 32, row: 5, frames: 8, frameDelay:4},
        hurt: {w: 32, h: 32, row: 6, frames: 4, frameDelay:8},
        dead: {w: 32, h: 32, row: 7, frames: 4, frameDelay:16},
        death: {w: 32, h: 32, row: 7, col:3, frames: 1, },
        
	

    })
    player.changeAni('stand');
    grass = new Group();
    grass.collider = 'static';
    grass.spriteSheet = worldSheet;
    grass.addAni({w:16, h:16,row:0, col:0});
    grass.tile = 'g';
    player.changeAni('stand');
    lader = new Group();
    lader.collider = 'none';
    lader.spriteSheet = worldSheet;
    lader.addAni({w:16, h:16,row:4, col:9});
    lader.tile = 'l';
    water = new Group();
    water.collider = 'none';
    water.spriteSheet = worldSheet;
    water.addAni({w:16, h:16,row:10, col:4});
    water.tile = 'w';
    leftbridge = new Group();
    leftbridge.collider = 'static';
    leftbridge.spriteSheet = worldSheet;
    leftbridge.addAni({w:16, h:16,row:0, col:10,});
    leftbridge.tile = '<';
    middeleBridge = new Group();
    middeleBridge.collider = 'static';
    middeleBridge.spriteSheet = worldSheet;
    middeleBridge.addAni({w:16, h:16,row:0, col:11,});
    middeleBridge.tile = '_';
    rightbridge = new Group();
    rightbridge.collider = 'static';
    rightbridge.spriteSheet = worldSheet;
    rightbridge.addAni({w:16, h:16,row:0, col:12});
    rightbridge.tile = '>';
    dirt = new Group();
    dirt.collider = 'static';
    dirt.spriteSheet = worldSheet;
    dirt.addAni({w:16, h:16,row:1, col:0});
    dirt.tile = 'd';
    rock = new Group();
    rock.collider = 'static';
    rock.spriteSheet = worldSheet;
    rock.addAni({w:16, h:16,row:0, col:5});
    rock.tile = 'r';
    vague = new Group();
    vague.collider = 'none';
    vague.spriteSheet = worldSheet;
    vague.addAni({w:16, h:16,row:10, col:6});
    vague.tile = 'v';
    snow = new Group();
    snow.collider = 'satic';
    snow.spriteSheet = worldSheet;
    snow.addAni({w:16, h:16,row:0, col:7});
    snow.tile = 's';
    neige = new Group();
    neige.collider = 'satic';
    neige.spriteSheet = worldSheet;
    neige.addAni({w:16, h:16,row:2, col:6});
    neige.tile = 'n';
    
    tiles = new Tiles([
        '............................gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg................................................................................................................................',
        '............................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrddddddddddddddgg......................................................................................................ssss.......................',
        '............................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrddggg................................................................................................sssnnnnsss.......................',
        '............................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdddggg..........................................................................................sssnnnnnnnnnnssss................',
        '............................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdddgg....................................................................................ssssnnnnnnnnnnnnnnnnnssss.........',
       '............................rrrrrrrrrrrrrrrrrrrrrrrrrrrrr......................................................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrddddd................................................................................ssssnnnnnnnnnnnnnnnnnnnnnnnnnnss......',
       '............................rrrrrrrrrrrrrrrrrrrrr..........................................................................................................................................................................gggggggggg........................................ssssnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnsss.....',
       '..................................rrrrrr.......................................rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.........................................................................................................ggggddddddddddgg..................................ssssnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnssss',
       'gg.......................................................rrrrrrrrrrrrrrrr...rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr.......................................rrrrrrrrrrrrrrrrrrrr.....................ggdddddddddddddgggg.............................ssssnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
        'g..........lgggg............gggggdddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr...........ggddddddddddddddddddddgg...........sssssssssssssssnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
        'g..........lddddggggg<_>ggggdddddddddddddddddddddddddrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrgggggggddddddddddddddddddggggggggggggggsssnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
        'g..........l............dddd..........',
        'dgggggggggggwwwwwwwwwwwwwddd',
        'dddddddddddddddwwwwwwwwddd',
        'ddddddddddddddddwwwwwwdddd',
        'ddddddddddddddddddwwwddddd',
        'dddddddddddddddddddddddddd',
        '',
        
        
    ],0, 0, 16, 16);
}


function draw(){
    background('skyblue')
    camera.x = player.x;
    camera.y = player.y;
    if(kb.pressing('right')){
        player.changeAni('run');
        player.x+=2;
        player.mirror.x = false;
    }
    if(kb.pressing('left')){
        player.mirror.x = true;
        player.x-=2;
        player.changeAni('run');
    }
    if(kb.presses('up')){

        player.vel.y = -3
    }
    else{

    }
    slimePurle.moveTowards(player, 0.10);
    slimePurle.speed= 2;
    
    if (kb.pressed('r'))player.changeAni('run');
    else player.changeAni('stand');
    if(kb.presses('r')) player.changeAni(['roll','stand']);
    if(kb.presses('h')) player.changeAni(['hurt', 'stand']);
    if(kb.presses('d')) player.changeAni(['dead','death']);
    text('Vies: ' + player.lives, 10, 20);
    text('Score: ' + player.score, 10, 10);
    if (player.collides(slimePurle)) {
	
	    player.lives -= 1;
	}
    if (player.lives ===0 ){
        player.changeAni('dead');
    }
    if (player.collides(lader)) {
	
        player.vel.y = 5
	}

}
function gameOver(){
    tile.remove ();
}
