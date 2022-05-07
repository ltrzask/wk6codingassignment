//War Card game

//create a player class
class Player {
    constructor(name) {
    this.name = name;
    this.points = 0; //points start at 0
    this.hand = []; //array for the card that will be in the player's hand
    }
}

//create a class for the cards
class Card {
    constructor(face, value, suit) {
        this.face = face; //used face because cards have numbers and faces, I didn't really like rank
        this.value = value; //need to assign values to all cards, especially king, queen,jack and ace.
        this.suit = suit;    
    }
}

//Create a class for the deck
class Deck {
    constructor() {
        this.cardDeck= [];
    }
        //Create arrays for the card suits and for the number on the cards
    createDeck() {
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        //using a for loop to create each card in the deck
        for (let suit in suits) {
            for (let i = 0; i < faces.length; i++) {
                this.cardDeck.push(new Card(suits[suit], faces[i], values[i]));
            } 
            
        }  
    }
    //shuffle cards
    shuffle(cardDeck) {
        for (let i = this.cardDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.cardDeck[i];
            this.cardDeck[i] = this.cardDeck[j];
            this.cardDeck[j] = temp;    
            }
        }
        //deal cards with the pop method
    deal() {
        return this.cardDeck.pop()
    }
}

//create a class for the game
class Game {
    constructor() {
        this.players = [];
    }

    //Start the game
    startAWar() {
        alert('The one with the most points will be the victor!');
        this.players.push(new Player('Human')); //Human vs Robot, didn't want to ask for names. just wanted it to just start the game
        this.players.push(new Player('Robot'));

        let playGame = new Deck();
        playGame.createDeck();
        playGame.shuffle();
            //using a for loop to iterate through 26 cards to each player
        for (let i = 0; i < 26; i++) { //deal each player 26 cards
            this.players[0].hand = playGame.deal(); //Human will be players[0]
            this.players[1].hand = playGame.deal(); //Robots will be players[1]
            //if human had a higher value card, human will get a point
            if (this.players[0].hand.value > this.players[1].hand.value){ //counts the battles(rounds) each time
                console.log(`Battle ${i + 1}: 
                Human's ${this.players[0].hand.suit} of ${this.players[0].hand.face} 
                vs
                Robot's ${this.players[1].hand.suit} of ${this.players[1].hand.face}`);
                
                this.players[0].points += 1; //point goes to the human
                console.log(`${this.players[0].name} wins this battle!`)
        
            } else if(this.players[0].hand.value < this.players[1].hand.value) { //if robot has a higher value, robot will get a point
                console.log(
                `Battle ${i + 1}: 
                Human's ${this.players[0].hand.suit} of ${this.players[0].hand.face} 
                vs
                Robot's ${this.players[1].hand.suit} of ${this.players[1].hand.face}`);
                    
                    this.players[1].points += 1; //add point to the robot
                    console.log(`${this.players[1].name} wins this battle!`);
            } else {    //almost forgot to add the battle counter to the ties, they still count even if no one gets a point
                console.log(`Battle ${i + 1}:
                Tie! No one gets points because no one won the battle.`);//ties do not get points
            }
            
        }
        //using if statements to respond to who won
        if(this.players[0].points > this.players[1].points) {
            alert('Humanity prevails!')
            return console.log('Human is victorious with ' + this.players[0].points + ' points!');//will display how many point the winner had
        
        }else if(this.players[0].points < this.players[1].points) {
            alert('Skynet rules us all!')
            return console.log('Robot is victorious with ' + this.players[1].points + ' points!');
        
        }else{
            alert('No one wins in a tie!')
            return console.log('It was a tie, no one is victorious.'); //No one wins in an event of a tie
        }
    }
}
//made an instance of Game to start the game
let newGame = new Game();
newGame.startAWar();