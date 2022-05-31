module.exports = {
  idleTimeout: 32,
  maxBackpressure: 1024,
  maxPayloadLength: 512,
  /* other events (upgrade, open, ping, pong, close) */
  open: (ws) => {
    console.log(ws);
  },
  message: (ws, message) => {
    console.log(ws, message);
  },
};
