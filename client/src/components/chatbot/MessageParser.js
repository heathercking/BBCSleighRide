import useSound from 'use-sound';
import ring from '../../assets/sounds/santa-message.mp3'



class MessageParser {


  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    const that = this;

    
    if (lowerCaseMessage.includes("hello") || this.state.messages.length == 1) {
      this.actionProvider.greet()
    }
    else if (this.state.messages.length == 3) {
      this.actionProvider.nice(message)
    }
    else if (this.state.messages.length == 5) {
      this.actionProvider.goodChoice(message)
      setTimeout(function() {
        that.actionProvider.goodbye1(message)
      }, 1500);
      setTimeout(function() {
        that.actionProvider.goodbye2(message)
      }, 3000);
    }
  }} 


export default MessageParser;