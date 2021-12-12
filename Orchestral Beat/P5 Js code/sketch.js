const InstrumentOneServiceUUID = "2ea20e27-d06d-4039-a242-d28685015a7f";
const InstrumentTwoServiceUUID = "2ea20e27-d06d-4039-a242-d28685015a7f";
const InstrumentThreeServiceUUID = "2ea20e27-d06d-4039-a242-d28685015a7f";
let femalevol = true;
let InstrumentOneCharecteristic;
let InstrumentTwoCharecteristic;
let InstrumentThreeCharecteristic;
let instoneval = 0;
let insttwoval = 0;
let instthreeval = 0;
let InstrumentOneRssi = 0;
let InstrumentTwoRssi = 0;
let InstrumentThreeRssi = 0;
let viconoff , viconon, piconoff, piconon, miconoff, miconon, diconoff,diconon;
let InstrumentOne, InstrumentTwo, InstrumentThree;
let instOne, instTwo, instThree;
let FemaleVoice;
let Spaceship;
let Electrostat;
let midibeat;

function update(){
    if(OneisConnected){
      image(instOne, 0, 0);
      image(piconon,instOne.width/3.8,instOne.height/2,windowWidth/7,windowWidth/7);
  } else {
      instOne.filter(GRAY);
      image(instOne, 0, 0);
      image(piconoff,instOne.width/3.8,instOne.height/2,windowWidth/7,windowWidth/7);
  } if(TwoisConnected){
      image(instTwo,0+width/3,0);
      image(diconon,0+width/2.32,instOne.height/2,windowWidth/7,windowWidth/7);
  } else {
      instTwo.filter(GRAY);
      image(instTwo,0+width/3,0);
      image(diconoff,0+width/2.32,instOne.height/2,windowWidth/7,windowWidth/7);
  } if(ThreeisConnected){
      image(instThree,2*width/3,0);
      image(miconon,0+width/2.6*2,instOne.height/2,windowWidth/7,windowWidth/7);
  } else {
      instThree.filter(GRAY);
      image(instThree,2*width/3,0);
      image(miconoff,0+width/2.6*2,instOne.height/2,windowWidth/7,windowWidth/7);
  }
}

function instonevalue(){
  if(OneisConnected){
     Spaceship.loop();
  } else{
     Spaceship.stop();
     return;
  }
}

function insttwovalue(){
  if(TwoisConnected){
     midibeat.loop();
  } else{
     midibeat.stop();
     return;
  }
}

function instthreevalue(){
  if(ThreeisConnected){
     Electrostat.loop();
  } else{
     Electrostat.stop();
     return;
  }
}

function mouseClicked(){
  if(femalevol){
     FemaleVoice.setVolume(0.4);
     FemaleVoice.playMode('restart');
     FemaleVoice.loop();
     
  } else{
     FemaleVoice.stop();
      
  }
}

function preload(){
  FemaleVoice = loadSound('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2F1.mp3?v=1638887167042');
  Spaceship = loadSound('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2F4.mp3?v=1638887167099');
  Electrostat = loadSound('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2F2.mp3?v=1638887167114');
  midibeat = loadSound('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2F3.mp3?v=1638887167075');
  viconoff = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fsinging%20offline.png?v=1638867186887');
  viconon = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fsinging%20online.png?v=1638867188206');
  piconoff = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fpiano%20offline.png?v=1638867186695');
  piconon = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fpiano%20online.png?v=1638867187195');
  miconoff = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fbeat%20offline.png?v=1638867186588');
  miconon = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fbeat%20online.png?v=1638867186412');
  diconoff = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fdrum%20offline.png?v=1638867187667');
  diconon = loadImage('https://cdn.glitch.me/13345e32-3def-42b3-9dc3-130a943a529f%2Fdrum%20online.png?v=1638867188646');

}

function setup() {
  
  InstrumentOne = new p5ble();
  InstrumentTwo = new p5ble();
  InstrumentThree = new p5ble();
  
  createCanvas(windowWidth, windowHeight);
  instOne = createGraphics(windowWidth/3,height);
  instTwo = createGraphics(windowWidth/3,height);
  instThree = createGraphics(windowWidth/3,height);
  
}

function draw() {
  noStroke();
  
  //First Instrument
  instOne.fill('#144552');
  instOne.noStroke();
  instOne.rect(0,0,instOne.width,instOne.height);

  //Second Instrument
  instTwo.fill('#212F45');
  instTwo.noStroke();
  instTwo.rect(0,0,instTwo.width,instTwo.height);

  //Third Instrument
  instThree.fill('#312244');
  instThree.noStroke();
  instThree.rect(0,0,instThree.width,instThree.height);
   
  instoneval = map(InstrumentOneRssi,200,230,0,1);
  if(instoneval>=0 && instoneval<=2){
    Spaceship.setVolume(instoneval);
  }
  insttwoval = map(InstrumentTwoRssi,200,230,0,1);
  if(insttwoval>=0 && insttwoval<=2){
    midibeat.setVolume(insttwoval);
  }
  instthreeval = map(InstrumentThreeRssi,200,230,0,1);
  if(instthreeval>=0 && instthreeval<=2){
    Electrostat.setVolume(instthreeval);
  }
  update();
}