const baseURL = "http://localhost:5000/api/";

export const getQuestions = () => {
    return(
        fetch(baseURL + "/questions")
        .then(res => res.json())
    )
}