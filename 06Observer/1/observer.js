class Observerable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer.notify(message));
  }
}

class Observer {
  notify(message) {
    console.log(`Observer received message: ${message}`);
  }
}

export { Observerable, Observer };
