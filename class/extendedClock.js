class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template``
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

class extendedClock extends Clock{
    constructor({template})
    {
        super({template});
    }
    start(precision=1000){
        this.render();
        this.timer = setInterval(()=>this.render(),precision);
    }
    stop(){
        clearInterval(this.timer);
    }
  }
  function Name(params) {
     this.name = params;
  }
  let val =JSON.stringify(new Name("Sahil"));
  console.log(val);/*
  let clock = new extendedClock({template: 'h:m:s'});
  clock.start(10000);*/
