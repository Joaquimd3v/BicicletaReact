// MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("seguro")) {
      this.actionProvider.handleSeguro();
    } else if (lowercase.includes("bicicleta")) {
      this.actionProvider.handleBicicleta();
    } else {
      this.actionProvider.handleDefault(message);
    }
  }
}

export default MessageParser;
