/*
Event Listener on start button 'click'
full border around the timer
start counting down the timer
Each time the timer counts down, update the border 
update the text on coundown
reset border if timer  =0 
reset timer
*/

class Timer {
  constructor(durationInput, startButton, pauseButton, stopButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.stopButton = stopButton;
    this.duration;
    this.circle = document.querySelector('.dial circle');
    this.perimeter = this.circle.getAttribute('r') * 2 * Math.PI;
    this.circle.setAttribute('stroke-dasharray', this.perimeter);
    // if (callbacks) {
    //   this.onStart = callbacks.onStart;
    //   this.onTick = callbacks.onTick;
    //   this.onComplete = callbacks.onComplete;
    // }
    this.events();
    // this.startButton.addEventListener('click', this.start);
  }
  events() {
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
    // this.pauseButton.addEventListener('click', this.stop);
  }
  start = () => {
    // if (this.onStart) {
    //   this.onStart(this.timeRemaining);
    // }
    this.duration = this.timeRemaining;
    this.interval = setInterval(this.tick, 50);
    this.tick();
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
    const durationCalc =
      (this.perimeter * this.timeRemaining) / this.duration - this.perimeter;
    this.circle.setAttribute('stroke-dashoffset', durationCalc);
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
const durationInput = document.querySelector('#duration-timer');
const startButton = document.querySelector('#start-timer');
const pauseButton = document.querySelector('#pause-timer');
const stopButton = document.querySelector('#stop-timer');

const timer = new Timer(durationInput, startButton, pauseButton, stopButton);
