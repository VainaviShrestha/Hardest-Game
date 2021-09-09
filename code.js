var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["874764d5-afcc-46de-bbce-b8b2e2ae1430","14a9bd9c-2158-4e78-8cab-78a3c0a4f6f0"],"propsByKey":{"874764d5-afcc-46de-bbce-b8b2e2ae1430":{"name":"thief","sourceUrl":"assets/api/v1/animation-library/gamelab/n8bOZIda_fIfEief4IOi2AunJKUrNsWn/category_retro/retrocreature_06.png","frameSize":{"x":365,"y":365},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8bOZIda_fIfEief4IOi2AunJKUrNsWn","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":365},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8bOZIda_fIfEief4IOi2AunJKUrNsWn/category_retro/retrocreature_06.png"},"14a9bd9c-2158-4e78-8cab-78a3c0a4f6f0":{"name":"thief2","sourceUrl":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png","frameSize":{"x":161,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":161,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jdIdcxg7BWRjFZ5PLbgJwr4.OcMu5k9m/category_fantasy/monster_15.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Create Lasers

var laser1 = createSprite(100, 300,250,5);
laser1.shapeColor="red";
laser1.velocityX=7;
laser1.velocityY=0;


var laser2 = createSprite(300, 100,220,5);
laser2.shapeColor="red";
laser2.velocityX=-5;
laser2.velocityY=0;

var laser3 = createSprite(300, 200,220,5);
laser3.shapeColor="red";
laser3.velocityX=3;
laser3.velocityY=0;

//shape(390,0,380,10,390,20,400,10);


// Create Destination
var shape=createSprite(390,10,20,20);


//Create Thief
var thief=createSprite(200, 350,20,20);
thief.shapeColor="black";
thief.setAnimation('thief2');
thief.scale='.1';







 
 

function draw() {
  
  background("white");
  //shape(390,0,380,10,390,20,400,10);
  
  

// Create edges to bounceoff, velocity and the movement keys
createEdgeSprites();
thief.bounceOff(edges);

  if(keyDown("UP_ARROW")){
  thief.velocityX=0;
  thief.velocityY=-3;
}

if(keyDown("DOWN_ARROW")){
  thief.velocityX=0;
  thief.velocityY=+3;
}

if(keyDown("LEFT_ARROW")){
  thief.velocityX=-3;
  thief.velocityY=0;
}

if(keyDown("RIGHT_ARROW")){
  thief.velocityX=+3;
  thief.velocityY=0;
}



  


laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser3.bounceOff(edges);




//Create End Note or Loose Note

if (thief.isTouching(shape)){
  stroke(10);
  fill(0);
  textSize(20);
  text ("Natwarlal Succeed - You Win the Game", 25,150);
  thief.setVelocity(0,0);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
}




 if(laser1.isTouching(thief)||laser2.isTouching(thief)||laser3.isTouching(thief)){
  stroke(0);
  fill("black");
  textSize(24);
  text("You Lose, Thief is caught",75,150);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
  thief.setVelocity(0,0);
}


 
  

drawSprites();

  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
