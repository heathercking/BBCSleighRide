class ActionProvider {
   constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }
  greet = () => {
    const greetingMessage1 = this.createChatBotMessage("Hello what is your name?")
    this.updateChatbotState(greetingMessage1)
  }

  nice = (name) => {
    const greetingMessage2 = this.createChatBotMessage(`Nice to meet you, ${name}, I see you are on the nice list. What do you want for Christmas?`)
    this.updateChatbotState(greetingMessage2)
  }
  goodChoice = (present) => {
    const message = this.createChatBotMessage(`Wow that is a great choice!`)
    this.updateChatbotState(message)
  }

  goodbye1 = () => {
    const message = this.createChatBotMessage(`Well it was nice meeting you and hope to see you soon`);
    this.updateChatbotState(message);
  }

  goodbye2 = () => {
    const message = this.createChatBotMessage(`Don't forget to leave me a mince pie and Rudolph a carrot when we come to give you your presents!`);
    this.updateChatbotState(message);
  }
  
  updateChatbotState(message) {
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;