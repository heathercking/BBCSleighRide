use sleigh_ride;

db.dropDatabase();

db.countries.insertMany([
    {
        name: "France",
        continent: "Europe",
        song: "TBD",
        greeting: "Joyeux Noël (‘Happy Christmas’ in French)",
        celebrated: "24th December",
        meal: "Roast turkey with chestnuts or roast goose, oysters, foie gras, lobster, venison and cheeses. Followed by a chocolate cake log called a bûche de Noël",
        decorations: "Christmas trees, lights, and advent wreaths (called ‘Couronnes de l'Avent’)",
        didyouknow: "In some parts of France, they celebrate by eating 13 different desserts!... all made from different types of fruits, nuts and pastries."
    },
    {
        name: "South Africa",
        continent: "Africa",
        song: "TBD",
        greeting: "Geseënde Kersfees (‘Merry Christmas’ in Afrikaans)",
        celebrated: "25th December",
        meal: "Lots of meat… and a traditional South African dessert called Malva Pudding.",
        decorations: "A Christmas tree (not a real one!)",
        didyouknow: "Santa Claus is also known as Sinterklaas (St Nicholas)"
    }
]);

db.jokes.insertMany([
    {
        joke1: "What do you get when you cross a Christmas tree with an apple?",
        punchline: "A pineapple!"
    },
    {   joke2: "Why was the snowman looking through the carrots?",
        punchline: "He was picking his nose!"
    }
]);

db.quiz.insertMany([
    {
        question: "How do you say ‘Happy Christmas’ in French?",
        correct: "Joyeux Noël",
        options: ["Feliz navidad", "Salut", "Joyeux Noël"]
    },
    {
        question: "What is one of the most popular Christmas foods in Kenya?",
        correct: "Nyama Choma",
        options: ["Christmas Pudding", "Fish", "Nyama Choma"]

    },
    {
        question: "How do you say Merry Christmas in Afrikaans?",
        correct: "Geseënde Kersfees",
        options: ["Joyeux Noël", "Frohe Weihnachten", "Geseënde Kersfees"]
    }

]);
