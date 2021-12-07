use sleigh_ride;

db.dropDatabase();

db.countries.insertMany([
    {
        name: "France",
        continent: "Europe",
        song: "TBD",
        greeting: "'Joyeux Noël' (French)",
        celebrated: "24th December",
        meal: "Roast turkey with chestnuts or roast goose, oysters, foie gras, lobster, venison and cheeses. Followed by a chocolate cake log called a bûche de Noël",
        decorations: "Christmas trees, lights, and advent wreaths (called ‘Couronnes de l'Avent’)",
        didyouknow: "In some parts of France, they celebrate by eating 13 different desserts!... all made from different types of fruits, nuts and pastries."
    },
    {
        name: "South Africa",
        continent: "Africa",
        song: "TBD",
        greeting: "'Geseënde Kersfees' (Afrikaans)",
        celebrated: "25th December",
        meal: "Lots of meat… and a traditional South African dessert called Malva Pudding",
        decorations: "A Christmas tree (not a real one!)",
        didyouknow: "Santa Claus is also known as Sinterklaas (St Nicholas)"
    },
    {
        name: "Kenya",
        continent: "Africa",
        song: "TBD",
        greeting: "'Heri ya Krismasi' (Swahili)",
        celebrated: "25th December (although many people celebrate all through the night on Christmas Eve!)",
        meal: "One of the most popular Christmas foods in Kenya is the ‘nyama choma’, which is similar to a BBQ",
        decorations: "Colourful ribbons, flowers and balloons… and a beautifully decorate Cypress tree",
        didyouknow: "There are at least 68 languages spoken in Kenya. Wow."
    },
    {
        name: "United States of America",
        continent: "North America",
        song: "TBD",
        greeting: "'Happy Holidays' (English)",
        celebrated: "25th December",
        meal: "Turkey and mashed potatoes",
        decorations: "Christmas lights, and sometimes even model Santa Claus, snowmen and reindeer",
        didyouknow: "Santa was not always red, he wore green before Coca Cola"
    },
    {
        name: "Australia",
        continent: "Australasia",
        song: "TBD",
        greeting: "'Merry Christmas' (English)",
        celebrated: "25th December",
        meal: "BBQ, cold meats, and Christmas pudding",
        decorations: "Christmas Trees and Christmas lights. Neighbors sometimes have little competitions for the best light display.",
        didyouknow: "It’s summer in Australia at Christmas, so many Australians spend Christmas on the beach!"
    },
    {
        name: "Nicaragua",
        continent: "South America",
        song: "TBD",
        greeting: "'Feliz Navidad' (Spanish)",
        celebrated: "24th December",
        meal: "stuffed chicken,  something called nacatamal, rice, and freshly baked bread",
        decorations: "Nicaraguan christians hold parades, tributes, and jubilant celebrations in the streets to give thanks to Jesus and the Christmas story",
        didyouknow:  "Christains sing at people’s homes asking to stay. People sing songs denying them entry. Finally, someone lets them stay, as happened in the nativity story."
    },
    {
        name: "Argentina",
        continent: "South America",
        song: "TBD",
        greeting: "'Feliz Navidad' (Spanish)",
        celebrated: "24th December",
        meal: "Roast pig, and veal in mayonaise, followed by mince pies.",
        decorations: "Wreaths of green, gold, red and white flowers. Red and white garlands are hung on the doors of houses",
        didyouknow: "Some children in Argentina have to wait until the 6th of january for the three wise men to bring them presents."
    },
    {
        name: "Japan",
        continent: "Asia",
        song: "TBD",
        greeting: "'Merikurisumasu' (Japanese)",
        celebrated: "25th December",
        meal: "Kentucky Fried Chicken",
        decorations: "The streets of Japan are often decorated with candy canes, lights and trees.",
        didyouknow: "Christmas in Japan is a fun and romantic holiday, and people often go to Tokyo Disneyland around this time."
    }
]);

db.jokes.insertMany([
    {
        joke: "What do you get when you cross a Christmas tree with an apple?",
        punchline: "A pineapple!"
    },
    {   joke: "Why was the snowman looking through the carrots?",
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
