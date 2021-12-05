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
        meal: "Lots of meat… and a traditional South African dessert called Malva Pudding",
        decorations: "A Christmas tree (not a real one!)",
        didyouknow: "Santa Claus is also known as Sinterklaas (St Nicholas)"
    },
    {
        name: "United States of America",
        continent: "North America",
        song: "TBD",
        greeting: "Happy Holidays",
        celebrated: "25th December",
        meal: "Turkey and mashed potatoes",
        decorations: "Christmas lights, and sometimes even model Santa Claus, snowmen and reindeer",
        didyouknow: "Santa was not always red, he wore green before Coca Cola"
    },
    {
        name: "Ausralia",
        continent: "Australasia",
        song: "TBD",
        greeting: "Merry Christmas",
        celebrated: "25th December",
        meal: "BBQ, cold meats, and Christmas pudding",
        decorations: "Christmas Trees and Christmas lights. Neighbors sometimes have little competitions for the best light display.",
        didyouknow: "It’s summer in Australia at Christmas, so many Australians spend Christmas on the beach!"
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
        incorrect: ["Feliz navidad", "Salut"]
    },
    {
        question: "What is one of the most popular Christmas foods in Kenya?",
        correct: "Nyama Choma",
        incorrect: ["Christmas Pudding", "Fish"]

    },
    {
        question: "How do you say Merry Christmas in Afrikaans?",
        correct: "Geseënde Kersfees",
        incorrect: ["Joyeux Noël", "Frohe Weihnachten"]
    }

]);
