class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    console.log(this.state.messages.length)
    if (lowerCaseMessage.includes("hello") || this.state.messages.length == 1) {
      this.actionProvider.greet()
    }
    else if (this.state.messages.length == 3) {
      this.actionProvider.nice(message)
    }
    else if (this.state.messages.length == 5) {
      this.actionProvider.goodChoice(message)
      this.actionProvider.goodbye1(message)
      this.actionProvider.goodbye2(message)
    }
  }} 


export default MessageParser;