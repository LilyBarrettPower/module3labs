class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}
const myClock = new DigitalClock("my clock:");
myClock.start();

// a - create a new class that inherits this and adds the parameter precision
class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    // prefix is the "myClock"
    // sets precision to 1000ms as default
    super(prefix); // super calls the parent class constructor
    this.precision = precision;
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

const myNewClock = new PrecisionClock("my clock", 500); // created with a precision of 500ms
myNewClock.start();

// b - create an alarm clock that inherits from digital clock and add a wakup time
class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    // add the wakeupTime parameter and set the default to 07:00
    super(prefix);
    this.wakeupTime = wakeupTime; // create the wakeupTime
  }
  start() {
    this.display();
    this.timer = setInterval(() => {
      const currentTime = new Date(); // create the current date and time
      const currentHours = currentTime.getHours(); // get the hours of the current time
      const currentMinutes = currentTime.getMinutes(); // get the minutes of the current time
      const currentTimeString = `${currentHours}:${currentMinutes}`; // convert the time to a string so it can be compared to wakeupTime

      if (currentTimeString === this.wakeupTime) {
        // compare the current time to the wakeupTime
        console.log("WAKE UP!!!!!!!"); // if they are the same, log teh wake up message
        this.stop(); // stop the clock running if theyre equal
      } else {
        this.display(); // if theyre not equal continue running the clock
      }
    }, 1000); // set the interval to 1 second so the wakeupTime is not missed
  }
}
const myAlarmClock = new AlarmClock("My Alarm Clock:", "15:36"); // set the wakeupTime
myAlarmClock.start(); // start the alarm clock
