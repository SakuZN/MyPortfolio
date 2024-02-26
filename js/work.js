/**
 * ===================================================================
 * work.js
 * Script used to automate the creation of the work section
 * -------------------------------------------------------------------
 */
let folioItems = [
    {
        titles: ["A, B, C JAM:", "C Game Jam"],
        types: ["C Based Game Development"],
        image: "images/portfolio/gamejam.jpg",
        imageModal: "images/portfolio/modals/m-gamejam.png",
        descTitle: "C Game Jam",
        description: "A Game Jam Hosted by the La Salle Computer Society. The game was made in C and took a week\n" +
            "to finish. The theme of the game jam was \"Elevator\". Thus, the game is named \"Hellevator\".\n" +
            "It tells a story of a man's journey to hell to find his lost love, encountering infamous\n" +
            "characters in history.",
        categories: "Game Development | C | Game Jam",
        link: "https://dhannn.itch.io/hellevator",
        alt: "GameJam",
        modalNum: "modal-01",
    },
    {
        titles: ["MazeBot"],
        types: ["Artificial Intelligience | Made in Java"],
        image: "images/portfolio/mazebot.jpg",
        imageModal: "images/portfolio/modals/m-mazebot.jpg",
        descTitle: "MazeBot",
        description: "Made for CSINTSY Course. The goal of the project is to create a maze solving robot using the concepts of Artificial Intelligence, which is a state space search using the A* algorithm.",
        categories: "Artificial Intelligience | Made in Java",
        link: "https://github.com/SakuZN/MCO1_MazeBot",
        alt: "MazeBot",
        modalNum: "modal-02",
    },
    {
        titles: ["Medical ChatBot"],
        types: ["Logic Based ChatBot about Medical Diagnosis"],
        image: "images/portfolio/chatbot.jpg",
        imageModal: "images/portfolio/modals/m-chatbot.jpg",
        descTitle: "Medical ChatBot",
        description: "Made for CSINTSY Course. The goal of the project is to create a chatbot that can diagnose a patient's illness based on the symptoms that the patient has. The chatbot is made using the concepts of Logic Programming, which is a backward chaining algorithm. The knowledge base is made using Prolog, while the ChatBot front-end is made using Java Swing.",
        categories: "Artificial Intelligence | Made in Java & Prolog",
        link: "https://github.com/SakuZN/MCO2_PROLOG",
        alt: "Medical ChatBot",
        modalNum: "modal-03",
    },
    {
        titles: ["Machine Learning"],
        types: ["Comparing Logistic Regression and Decision Tree Models"],
        image: "images/portfolio/machinelearning.jpg",
        imageModal: "images/portfolio/modals/m-machinelearning.jpg",
        descTitle: "Machine Learning",
        description: "Made for CSINTSY Course. The goal of the project is to compare the performance of Logistic Regression and Decision Tree models in classifying a dataset. The dataset used is the \"Student Employability\" dataset from Kaggle. The dataset was used to predict whether a student will be employed or not based on 8 independent features that are numerical and categorical.",
        categories: "Artificial Intelligence | Made in Python",
        link: "https://github.com/SakuZN/MCO3-Machine-Learning-Classification/tree/master",
        alt: "Machine Learning",
        modalNum: "modal-04",
    },
    {
        titles: ["MySQL Web Application"],
        types: ["Web Application made for CCINFOM"],
        image: "images/portfolio/assets.jpg",
        imageModal: "images/portfolio/modals/m-assets.jpg",
        descTitle: "MySQL Web Application",
        description: "This website was made for CCINFOM. It was my first exposure to database management systems and web development. The website was made using HTML, CSS, and Java. The database was made using MySQL. The website is a simple asset management system where the user can add, edit, and delete assets.",
        categories: "Web Development | MySQL, HTML, CSS, Java",
        link: "https://github.com/SakuZN/assets_HOA",
        alt: "MySQL",
        modalNum: "modal-05",
    },
    {
        titles: ["MyFarm Game"],
        types: ["Farming Game made in JavaFX"],
        image: "images/portfolio/farmgame.jpg",
        imageModal: "images/portfolio/modals/m-farmgame.jpg",
        descTitle: "MyFarm Game",
        description: "Farming Game made in JavaFX for CCPROG3 Course. The goal of the project is to create an endless farming game where the player can plant crops and harvest them for money. The game was made using JavaFX and SceneBuilder. This is where I understood the MVC pattern and the object-oriented programming concepts.",
        categories: "Game Development | Java",
        link: "https://github.com/SakuZN/FarmingGame_Java",
        alt: "Farm Game",
        modalNum: "modal-06",
    },
    {
        titles: ["Biography Page"],
        types: ["Simple Biography Page"],
        image: "images/portfolio/biography.jpg",
        imageModal: "images/portfolio/modals/m-biography.jpg",
        descTitle: "My Biography Page",
        description: "A simple biography page made for CCAPDEV. Although it's very plain and simplistic, I am proud of this one as this is my first exposure to web development. The website was made using HTML, CSS, and from scratch. It was also the first time I created a website that is hosted online using Github Pages.",
        categories: "Web Development | HTML & CSS",
        link: "https://sakuzn.github.io/MyFirstHTMLBiography/",
        alt: "biography",
        modalNum: "modal-07"
    },
    {
        titles: ["Dormable!"],
        types: ["A Web Application all about dorm reviews near DLSU Manila"],
        image: "images/portfolio/dormable.png",
        imageModal: "images/portfolio/modals/m-dormable.jpg",
        descTitle: "Dormable!",
        description: "Dormable is a web application that allows students to find their ideal roommate. It is built using the MEN stack ( MongoDB, Express, Node.js).",
        categories: "Web Development | HTML & CSS | Javascript | MongoDB | Express | Node.js",
        link: "https://dormable.fly.dev/",
        alt: "Dormable!",
        modalNum: "modal-08"
    },
    {
        titles: ["Markov Chain Simulation"],
        types: ["A Web Application to simulate Markov Chains"],
        image: "images/portfolio/markovchain.png",
        imageModal: "images/portfolio/modals/m-markovchain.jpg",
        descTitle: "Markov Chain Simulation",
        description: "This is a web application used to show and simulate Markov Chain, a type of Probabilistic Automata",
        categories: "Web Development | HTML & CSS | Javascript | Probabilistic Automata",
        link: "https://sakuzn.github.io/MarkovChainSimulation/",
        alt: "Markov Chain",
        modalNum: "modal-09"
    },
    {
        titles: ["Array"],
        types: ["A Web Application for New Programmers"],
        image: "images/portfolio/array.png",
        imageModal: "images/portfolio/modals/m-array.png",
        descTitle: "Array Web Application",
        description: "A startup project that aims to help new programmers learn the basics by providing a journaling platform with mentorship opportunities. " +
            "Built over 3 months using the Scrum SDLC methodology, this web application leverages React, Next.js, and Supabase for a dynamic and scalable user experience.",
        categories: "Web Development | Back-end Development | Scrum SDLC | React | Next.js | Supabase",
        link: "https://array-showcase.vercel.app/",
        alt: "Array",
        modalNum: "modal-10",
    },
]

// Function to create folio items
function createFolioItem(folioItem) {
    //Create the parent div element
    let parentContainer = document.createElement("div");
    //Add the class "bgrid folio-item" to the parent div
    parentContainer.classList.add("bgrid", "folio-item");

    //Add innerHTML to the parent div
    parentContainer.innerHTML = `
        <div class="item-wrap">
            <img src="${folioItem.image}" alt="${folioItem.alt}">
            <a href="#${folioItem.modalNum}" class="overlay">
            <div class="folio-item-table">
                <div class="folio-item-cell">
                    ${folioItem.titles.map(title => `<h3 class="folio-title">${title}</h3>`).join('')}
                <span class="folio-types">${folioItem.types}</span>
                </div>
            </div>
            </a>
        </div>
    `;
    //Return the parent div
    return parentContainer;
}

function createModalPopup(folioItem) {
    //Create the parent div element
    let parentContainer = document.createElement("div");
    //Add the class "popup-modal mfp-hide" to the parent div
    parentContainer.classList.add("popup-modal", "slider", "mfp-hide");
    //Add id to the parent div
    parentContainer.id = folioItem.modalNum;
    //Add innerHTML to the parent div
    parentContainer.innerHTML = `
        <div class="media">
            <img src="${folioItem.imageModal}" alt="${folioItem.alt}">
        </div>
        <div class="description-box">
            <h4>${folioItem.descTitle}</h4>
            <p>${folioItem.description}</p>
            <div class="categories">${folioItem.categories}</div>
        </div>
        <div class="link-box">
            <a href="${folioItem.link}" target="_blank">Details</a>
            <a href="#" class="popup-modal-dismiss">Close</a>
        </div>
    `;
    //Return the parent div
    return parentContainer;
}