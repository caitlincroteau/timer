//alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

//EXAMPLE:
// node timer1.js 10 3 5 15 9

// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds

//const delays = process.argv.slice(2);
//[10, 3, 5, 15, 9]

const timer = function() {
  const strDelays = process.argv.slice(2);
  const numDelays = strDelays.map(x => Number(x));

  for (let delay of numDelays) {
    if (typeof delay === "number" && delay > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay * 1000);
    }
  }
};

timer();

// EDGE CASES

// No numbers are provided:
//Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number:
//Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number:
//Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.