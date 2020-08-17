export default class TypeGreeting {
  constructor(element, greetings, wait) {
    this.element = element;
    this.greetings = greetings;
    this.partialGreeting = "";
    this.greetingIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.backspacing = false;
  }

  type() {
    const current = this.greetingIndex % this.greetings.length;
    const fullGreeting = this.greetings[current];
    const defaultTypeSpeed = 150;
  
    if (this.backspacing) {
      this.partialGreeting = fullGreeting.substring(0, this.partialGreeting.length - 1);
    } else {
      this.partialGreeting = fullGreeting.substring(0, this.partialGreeting.length + 1);
    }
  
    this.element.innerHTML = `<span class="typed-greeting">${this.partialGreeting}_</span>`;
    
    let typeSpeed = defaultTypeSpeed;
  
    if (this.backspacing) {
      typeSpeed /= 2;
  
      if (this.partialGreeting === "") {
        this.backspacing = false;
        this.greetingIndex++;
        this.typeSpeed = defaultTypeSpeed;
      }
    } else {
      if (this.partialGreeting === fullGreeting) {
        typeSpeed = this.wait; // pause before backspacing
        this.backspacing = true;
      }
    }
  
    setTimeout(() => this.type(), typeSpeed);
  }
}
