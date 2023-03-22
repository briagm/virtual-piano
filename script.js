const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");

let allKeys = [],
audio = new Audio ("tunes/a.wav"); // by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio

  const clickedKey = document.querySelector(`[data-key=${key}]`); // getting clicked key element
  clickedKey.classList.add("active");
  setTimeout(() => { // remove active class after 150ms from he clicked key element
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key) // adding data-key value to the allKeys array
  // calling playTune function whith passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const pressedKey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
}

volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
