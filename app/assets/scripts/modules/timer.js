/*
Event Listener on start button 'click'
full border around the timer
start counting down the timer
Each time the timer counts down, update the border 
update the text on coundown
reset border if timer  =0 
reset timer
*/
const durationInput = document.querySelector('#duration-timer');
const startButton = document.querySelector('#start-timer');
const pauseButton = document.querySelector('#pause-timer');

class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.duration;
    this.circle = document.querySelector('circle');
    this.perimeter = this.circle.getAttribute('r') * 2 * Math.PI;
    // if (callbacks) {
    //   this.onStart = callbacks.onStart;
    //   this.onTick = callbacks.onTick;
    //   this.onComplete = callbacks.onComplete;
    // }
    this.events();
    // this.startButton.addEventListener('click', this.start);
  }
  events() {
    this.circle.setAttribute('stroke-dasharray', this.perimeter);

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }
  start = () => {
    // if (this.onStart) {
    //   this.onStart(this.timeRemaining);
    // }
    this.duration = this.timeRemaining;
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    if (this.timeRemaining <= 0 && this.timeRemaining < 1) {
      return this.pause();
      // if (this.onComplete) {
      //   this.onComplete();
      // }
    }
    this.circle.setAttribute(
      'stroke-dashoffset',
      (this.perimeter * this.timeRemaining) / this.duration - this.perimeter
    );
    this.timeRemaining = parseFloat(this.durationInput.value);
    this.timeRemaining -= 0.05;
    this.durationInput.value = this.timeRemaining.toFixed(2);
    // if (this.onTick) {
    //   this.onTick(this.timeRemaining);
    // }
  };

  // get timeRemaining() {
  //   return parseFloat(this.durationInput.value);
  // }
  // get timeRemaining(time) {
  //   this.durationInput.value =time
  // }
}

const timer = new Timer(durationInput, startButton, pauseButton);
