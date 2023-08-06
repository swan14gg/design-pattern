const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (obj[prop] === undefined) {
      console.log(`Hmm.. this property doesn't seem to exist`);
    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
    return obj[prop];
  },
  set: (obj, prop, value) => {
    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);
    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;
    }
    return true;
  },
});

export default personProxy;
