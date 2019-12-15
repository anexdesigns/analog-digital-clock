let timeOn = true

const toggleMode = document.querySelector('.toggle-mode');
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');

const toggleClock = document.querySelector('.toggle-clock');
const digitalIcon = document.querySelector('.digital-black');
const analogIcon = document.querySelector('.analog-black');
const analogClock = document.getElementById('clock-container');
const digitalClock = document.getElementById('digital-clock');

const showcaseOverlay = document.getElementById('showcase-container');



// Deletes Digital Clock and Analog Icon
function toAnalogClock() {
      analogClock.style.display = 'block';
      digitalIcon.style.display = 'block';
      digitalClock.style.display = 'none';
      analogIcon.style.display = 'none';
}

// Deletes Analog Clock and Digital Icon
function toDigitalClock() {
      analogClock.style.display = 'none';
      digitalIcon.style.display = 'none';
      digitalClock.style.display = 'block';
      analogIcon.style.display = 'block';
}

function LightMode() {
      darkMode.style.display = 'block';
      lightMode.style.display = 'none';
      digitalClock.style.color = '#333333'
      showcaseOverlay.style.backgroundColor = 'rgba(' + [0, 0, 0, .1].join(',') + ')';
      analogClock.style.backgroundColor = 'rgba(' + [255, 255, 255, 1].join(',') + ')';
      digitalIcon.style.filter = 'invert(0%) sepia(30%) saturate(6201%) hue-rotate(121deg) brightness(84%) contrast(106%)';
      analogIcon.style.filter = 'invert(0%) sepia(30%) saturate(6201%) hue-rotate(121deg) brightness(84%) contrast(106%)';
}

function DarkMode() {
      darkMode.style.display = 'none';
      lightMode.style.display = 'block';
      digitalClock.style.color = '#ffffff'
      showcaseOverlay.style.backgroundColor = 'rgba(' + [0, 0, 0, .8].join(',') + ')';
      analogClock.style.backgroundColor = 'rgba(' + [255, 255, 255, .4].join(',') + ')';
      digitalIcon.style.filter = 'invert(82%) sepia(0%) saturate(198%) hue-rotate(218deg) brightness(84%) contrast(93%)';
      analogIcon.style.filter = 'invert(82%) sepia(0%) saturate(198%) hue-rotate(218deg) brightness(84%) contrast(93%)';
}

toggleClock.addEventListener('click', () => {
      if (analogClock.style.display === 'none') {
            toAnalogClock();
      } else {
            toDigitalClock();
      }
      console.log("digital clicked")
})

toggleMode.addEventListener('click', () => {
      if (darkMode.style.display === 'none') {
            LightMode();
      } else {
            DarkMode();
      }
      console.log("mode clicked")
})


function updateClock() {

      // new Date() returns date object of current time
      const date = new Date();
      const digitalTime = new Date().toLocaleTimeString();

      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      // Takes current Hour, Minute, Second and converts them to degrees needed for rotation
      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      document.querySelector('.__hour').style.transform = `rotate(${hour}deg)`
      document.querySelector('.__minute').style.transform = `rotate(${minute}deg)`
      document.querySelector('.__second').style.transform = `rotate(${second}deg)`
      document.getElementById('digital-clock').innerHTML = digitalTime;
}

// Every Second, update the clock's time
const increment = 1000;
setInterval(() => {
      updateClock();
}, increment);

