let affirmations;

//affirmation slider variables
let sliderRate, sliderPan, sliderVolume;

//music slider variables
let music_sliderRate, music_sliderPan, music_sliderVolume;

let newAffirmation;
let newMusic;

let affirmationsArray = ["1.mp3", "2.mp3", "3.mp3"];
let loadedAffirmations = [];

let musicArray = ["kalaido-hanging-lanterns.mp3", "joakim-karud-dreams.mp3", "sugiwa-almost-home.mp3"];
var loadedMusic = [];

function preload(){
  affirmationsArray.forEach((data) => {
    loadedAffirmations.push(loadSound("affirmations/" + data));
  });
  
  musicArray.forEach((music) => {
    loadedMusic.push(loadSound("./music/chill/" + music));
  });
}

function setup() {
  //createCanvas(400, 400);
  noCanvas();
  //frameRate(1/4);
  
  /*setInterval(function(){ 
    newAffirmation = affirmationsArray[Math.floor(Math.random()*affirmationsArray.length)];
    affirmations = loadSound('affirmations/' + newAffirmation, () => {
      affirmations.play();
      affirmations.rate(sliderRate.value());
      affirmations.pan(sliderPan.value());
      affirmations.setVolume(sliderVolume.value());
    
    });
  }, 3000); */
  
  createElement("h1", "The Law of Attraction Affirmations");
  
  //createElement("h2", "Music Rate");
  //music_sliderRate = createSlider(0.5, 2, 1, 0.01);
  createElement("p", "Music Pan");
  music_sliderPan = createSlider(-1, 1, 0, 0.5);
  createElement("p", "Music Volume");
  music_sliderVolume = createSlider(0.0, 2.0, 0.5, 0.01);
  
  //createElement("h2", "Affirmation Rate");
  //sliderRate = createSlider(0.5, 2, 1, 0.01);
  createElement("p", "Affirmation Pan");
  sliderPan = createSlider(-1, 1, 0, 0.5);
  createElement("p", "Affirmation Volume");
  sliderVolume = createSlider(0.0, 2.0, 1, 0.01);
  
  //loadedMusic[0].loop();
  //loadedMusic[0].setVolume(0.1);
  
  /*setInterval(function(){ 
    newAffirmation = loadedAffirmations[Math.floor(Math.random()*loadedAffirmations.length)];
    newAffirmation.play();
    newAffirmation.setVolume(sliderVolume.value());
  }, 3000); */

  nextMusic();
  nextAffirmation();
  
} // end of setup function



function draw() {
  //newMusic.rate(music_sliderRate.value());
  newMusic.pan(music_sliderPan.value());
  newMusic.setVolume(music_sliderVolume.value());
  
  //newAffirmation.rate(sliderRate.value());
  newAffirmation.pan(sliderPan.value());
  newAffirmation.setVolume(sliderVolume.value());
}

function nextMusic() {
    newMusic = loadedMusic[Math.floor(Math.random()*loadedMusic.length)];
    newMusic.play();
    newMusic.onended(nextMusic);
  }

function nextAffirmation() {
    newAffirmation = loadedAffirmations[Math.floor(Math.random()*loadedAffirmations.length)];
    newAffirmation.play();
    newAffirmation.onended(nextAffirmation);
}
