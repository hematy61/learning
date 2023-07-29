# Pub Sub Pattern

## What is Pub Sub Pattern?

The Pub-Sub pattern, short for Publish-Subscribe pattern, is a messaging pattern that involves the exchange of messages between components of a system. In this pattern, there are two types of components: publishers and subscribers.

Publishers are responsible for generating messages and sending them to a message broker or message queue. Subscribers, on the other hand, receive these messages from the message broker and process them in some way.

The main advantage of using the Pub-Sub pattern is that it decouples the components of a system, which allows for greater flexibility and scalability. Publishers and subscribers can be added or removed from the system without affecting the other components, as long as they adhere to the message format and communication protocol.

Another benefit of using the Pub-Sub pattern is that it enables asynchronous communication between components. Publishers do not have to wait for subscribers to process messages, and subscribers do not have to actively request messages from publishers.

## How does Pub Sub Pattern work?

The Pub-Sub pattern consists of three main components: publishers, subscribers, and a message broker. Publishers generate messages and send them to the message broker, which then distributes them to subscribers. Subscribers receive these messages from the message broker and process them in some way.

The message broker acts as a middleman between publishers and subscribers. It receives messages from publishers and stores them in a queue or topic. Subscribers can then subscribe to these queues or topics and receive messages from them.

The message broker can also act as a filter for messages. It can filter out messages that do not match the criteria specified by subscribers, or it can filter out messages that are not relevant to subscribers.

## When to use Pub Sub Pattern?

The Pub-Sub pattern is useful in situations where there are multiple components that need to communicate with each other in a loosely coupled manner. It is also useful when there are multiple subscribers that need to receive messages from a single publisher.

## Example of Pub Sub Pattern

A common example of the Pub-Sub pattern is a chat application. In this application, there are multiple users who want to communicate with each other. Each user is a subscriber, and the chat server is a publisher. The chat server receives messages from users and sends them to other users.

Another example of the Pub-Sub pattern is a stock trading application. In this application, there are multiple traders who want to receive updates about the stock market. Each trader is a subscriber, and the stock market is a publisher. The stock market sends updates to traders about the current state of the market.

## Advantages of Pub Sub Pattern

The Pub-Sub pattern has several advantages over other messaging patterns. One advantage is that it decouples the components of a system, which allows for greater flexibility and scalability. Another advantage is that it enables asynchronous communication between components.

## Disadvantages of Pub Sub Pattern

The Pub-Sub pattern also has some disadvantages. One disadvantage is that it can be difficult to debug and maintain. Another disadvantage is that it can be difficult to implement in some programming languages.

## Pub Sub Pattern vs Observer Pattern

The Pub-Sub pattern is similar to the Observer pattern, but there are some key differences between them. One difference is that the Pub-Sub pattern uses a message broker to distribute messages, while the Observer pattern does not. Another difference is that the Pub-Sub pattern allows for asynchronous communication between components, while the Observer pattern does not. Finally, the Pub-Sub pattern is more flexible than the Observer pattern.

An example in Javascript

```js {cmd="node"}
// PubSub module to handle subscription and notification
const PubSub = {
  events: {},
  subscribe: function (eventName, callback) {
    // Create empty array for the event name if it doesn't exist yet
    this.events[eventName] = this.events[eventName] || [];
    // Push the callback to the array
    this.events[eventName].push(callback);
  },
  publish: function (eventName, data) {
    // Return if the event name doesn't exist
    if (!this.events[eventName]) {
      return;
    }
    // Loop through the array of callbacks and invoke them with the data
    this.events[eventName].forEach((callback) => {
      callback(data);
    });
  },
};

// Example usage
// Subscribe to an event
PubSub.subscribe("userLoggedIn", (data) => {
  console.log("User logged in:", data);
});

// Publish an event
PubSub.publish("userLoggedIn", { name: "John Doe" });
PubSub.publish("userLoggedIn", { name: "John Smith" });
```

To use the Pub-Sub pattern, you would call subscribe to register a callback for a specific event name and call publish to trigger the callbacks associated with that event name and pass in any necessary data.

An example with ES6 classes

```js {cmd="node"}
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
```

Here is the example of Pub Sub Pattern in Python

```py {cmd="python"}
class PubSub:
    def __init__(self):
        self.events = {}

    def subscribe(self, event_name, callback):
        if event_name not in self.events:
            self.events[event_name] = []
        self.events[event_name].append(callback)

    def publish(self, event_name, data=None):
        if event_name not in self.events:
            return
        for callback in self.events[event_name]:
            callback(data)

# Example usage
# Create a PubSub object
pubsub = PubSub()

# Subscribe to an event
def handle_event(data):
    print(f'Received event data: {data}')
pubsub.subscribe('userLoggedIn', handle_event)

# Publish an event
pubsub.publish('userLoggedIn', {'name': 'John Doe'})
```
