const person = {
    name: 'Pavel',
    age: 22,
  };
  
  const reactivePerson = new Proxy(person, {
    // Intercept set operation
    set(target, key, value) {
      console.log(`Setting ${key} to ${value}`);
      target[key] = value;
  
      // Indicates if setting value was successful
      return true;
    },
    // Intercept get operation
    get(target, key) {
      console.log(`Getting ${key}`);
  
      return target[key];
    },
  });
  
  reactivePerson.name = 'Sergei'; // Setting name to Sergei
  console.log(reactivePerson.name); // Getting name: Sergei
  
  reactivePerson.age = 23; // Setting age to 23
  console.log(reactivePerson.age); // Getting age: 23