import EventModule from "./events";

let instance = null;

// Factory method
const createInstance = () => {
  if (!instance) {
    const newInstance = new WebSocket(process.env.REACT_APP_WEBSOCKET_ENDPOINT);

    newInstance.onmessage = function (message) {
      const { event, payload } = JSON.parse(message.data);

      EventModule.publish(`websocket-${event}`, payload);
    };

    newInstance.onclose = function () {
      instance = null;
    };

    instance = newInstance;
  }
};

// Check if the instance has been initialized
setInterval(() => {
  if (!instance) {
    createInstance();
  }
}, 1000);

export default {
  // Send a message to websocket server
  send(event, payload) {
    instance?.send(JSON.stringify({ event, payload }))
  },

  // Resets the connection
  close() {
    if (instance) {
      instance.close();
    }
  },
};