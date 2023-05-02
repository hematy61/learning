class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  publish(eventName, data) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach((callback) => {
      callback(data);
    });
  }
}

// Example usage
const pubsub = new PubSub();

// Subscribe to an event
pubsub.subscribe("userLoggedIn", (data) => {
  console.log("User logged in:", data);
});

// Publish an event
pubsub.publish("userLoggedIn", { name: "John Doe" });
