class PubSub {
    constructor() {
      this.subscribers = {};
    }
  
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
  
      this.subscribers[event].push(callback);
    }
  
    // Publish a message to all subscribers of a specific event
    publish(event, data) {
      if (this.subscribers[event]) {
        this.subscribers[event].forEach((callback) => {
          callback(data);
        });
      }
    }
  }
  
  const pubsub = new PubSub();
  
  pubsub.subscribe('news', (message) => {
    console.log(`Subscriber 1 received news: ${message}`);
  });
  
  pubsub.subscribe('news', (message) => {
    console.log(`Subscriber 2 received news: ${message}`);
  });
  
  // Publish a message to the 'news' event
  pubsub.publish('news', 'Latest headlines: ...');
  
  // console logs are:
  // Subscriber 1 received news: Latest headlines: ...
  // Subscriber 2 received news: Latest headlines: ...