const nextQuestion = (questions, question) => {
    let remainingQuestions = questions
    
    for (let i = 0; i < remainingQuestions.length; i++) {
        if (remainingQuestions[i] == question) {
            remainingQuestions.splice(i, 1)
        }
    }
    return remainingQuestions
}