import '../styles/main.scss';
// import "../scripts/modules/cursor";
import '../scripts/modules/movieSeat';
import '../scripts/modules/timer';
import '../scripts/modules/formValidator';
import '../scripts/modules/github/githubApp';

import 'lazysizes';
// import Navigation from "../scripts/modules/navigation";
// const durationInput = document.querySelector('#duration-timer');
// const startButton = document.querySelector('#start-timer');
// const pauseButton = document.querySelector('#pause-timer');
// const circle = document.querySelector('circle');

// const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// circle.setAttribute('stroke-dasharray', perimeter);

// let duration;
// const timer = new Timer(durationInput, startButton, pauseButton, {
//   onStart(totalDuration) {
//     duration = totalDuration;
//     console.log(circle);
//   },
//   onTick(timeRemaining) {
//     circle.setAttribute(
//       'stroke-dashoffset',
//       (perimeter * timeRemaining) / duration - perimeter
//     );
//   },
//   onComplete() {
//     console.log('Timer is completed');
//   },
// });

if (module.hot) {
  module.hot.accept();
}
