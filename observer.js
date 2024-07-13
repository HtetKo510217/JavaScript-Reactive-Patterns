class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove an observer from the list
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);

        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    // Notify all observers about changes
    notify() {
        this.observers.forEach((observer) => {
            observer.update();
        });
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    // Update method called when notified
    update() {
        console.log(`${this.name} received an update.`);
    }
}

const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// Add observers to the subject
subject.addObserver(observer1);
subject.addObserver(observer2);

// Notify observers about changes
subject.notify();

// console logs are:
// Observer 1 received an update.
// Observer 2 received an update.