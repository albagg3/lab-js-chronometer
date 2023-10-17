class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  
      this.intervalId = setInterval(()=>{
        this.currentTime++;
        if(printTimeCallback)
        {
          printTimeCallback();
        }
      },1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitStr = ""
    if(value < 10)
      twoDigitStr = "0" + value;
    else
      twoDigitStr = value.toString();
    return twoDigitStr
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
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let formatTime = `${minutes}:${seconds}`;
    return formatTime;
  }
}
