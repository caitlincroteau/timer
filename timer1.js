//alarm clock / timer which will beep after a specified amount of time has passed.
//The user can specify an unlimited number of alarms using command line arguments

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


//EXAMPLE:
// node timer1.js 10 3 5 15 9

// This will make it beep at:
// 3 seconds
// 5 seconds
// 9 seconds
// 10 seconds
// 15 seconds