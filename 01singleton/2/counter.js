let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
};

const singletonCounter = Object.freeze(counter);
export default singletonCounter;
