export class MyTimer {
  interval = null;
  counter: number = 0;
  element: HTMLElement = null;

  constructor(e: HTMLElement) {
    this.element = e;
  }

  start() {
    this.counter = 0;
    this.element.innerHTML = `${this.counter}s`;
    this.interval = setInterval(() => {
      this.counter++;
      this.element.innerHTML = `${this.counter}s`;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
