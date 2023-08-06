let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

// Object.freeze メソッドは、利用者側であるコードからシングルトンを変更できないようにします。
// 凍結したインスタンスのプロパティに対して追加や変更ができないため、誤ってシングルトンの値を上書きしてしまう危険性が低くなります。
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
