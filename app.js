document.addEventListener('DOMContentLoaded', createGameBoard);

const cardArray = [
    {name: "condemn", image: "condemn.png"},
    {name: "condemn", image: "condemn.png"},
    {name: "condemn", image: "condemn.png"},
    {name: "condemn", image: "condemn.png"},
    {name: "flurry", image: "flurry.png"},
    {name: "flurry", image: "flurry.png"},
    {name: "flurry", image: "flurry.png"},
    {name: "flurry", image: "flurry.png"},
    {name: "kindling", image: "kindling.png"},
    {name: "kindling", image: "kindling.png"},
    {name: "kindling", image: "kindling.png"},
    {name: "kindling", image: "kindling.png"},
    {name: "pride", image: "pride.png"},  
    {name: "pride", image: "pride.png"},  
    {name: "pride", image: "pride.png"},  
    {name: "pride", image: "pride.png"}, 
    {name: "sunwell", image: "sunwell.png"},   
    {name: "sunwell", image: "sunwell.png"}, 
    {name: "sunwell", image: "sunwell.png"},   
    {name: "sunwell", image: "sunwell.png"}, 
    {name: "tavish", image: "tavish.png"},
    {name: "tavish", image: "tavish.png"}, 
    {name: "tavish", image: "tavish.png"},
    {name: "tavish", image: "tavish.png"}
];
function createGameBoard(){
    let gameboard  = document.getElementById('gameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = "grid";

    for (let i = 0; i < 24; i++) {
        let item = document.createElement('div');
        item.className = 'item';
        let card = document.createElement('img');
        card.setAttribute('src', 'card_back.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    
    gameboard.appendChild(gridContainer)
    cardArray.sort(() => 0.5 - Math.random())
}

let cardChoosen = []
let cardChoosenId = []
let score = 0

function flipCard(){
    let cardId = this.getAttribute('id')
    this.setAttribute('src', cardArray[cardId].image);
    cardChoosen.push(cardArray[cardId]);
    cardChoosenId.push(cardId);
    if(cardChoosen.length === 2){
        document.getElementById("gameConsole").textContent = "Checking..."
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch(){
    const cards = document.querySelectorAll('img');
    let selectedCardOne = cardChoosenId[0];
    let selectedCardTwo = cardChoosenId[1];

    let consoleMessage = "";

    if(cardChoosen[0].name === cardChoosen[1].name){
        cards[selectedCardOne].setAttribute('src', 'white.png');
        cards[selectedCardTwo].setAttribute('src', 'white.png');
        score = score + 1;
        consoleMessage = "You found match!!";
          
    }else{
        cards[selectedCardOne].setAttribute('src', 'card_back.png');
        cards[selectedCardTwo].setAttribute('src', 'card_back.png');
        consoleMessage = "Sorry, try again...";
    }
    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = consoleMessage

    cardChoosen =  []
    cardChoosenId = []

    if(score === cardArray.length / 2){
        document.getElementById('gameConsole').textContent = "Congratulations! You found then all"
    }
}