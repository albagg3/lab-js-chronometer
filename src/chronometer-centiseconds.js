class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if(printTimeCallback)
      {
        printTimeCallback();
      }
    },10)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime / 100) % 60;
    return seconds
  }

  getCentiseconds() {
    // ... your code goes here
    let centiSeconds = (this.currentTime % 600) % 100;
    return centiSeconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitStr = ""
    if(value < 10)
      twoDigitStr = "0" + value.toString();
    else
      twoDigitStr = value.toString();
    return twoDigitStr;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    // console.log(centiSeconds);
    let formatTime = `${minutes}:${seconds}${centiSeconds}`;
    return formatTime;
  }
}
