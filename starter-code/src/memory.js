
let MemoryGame = function (cards) {
    // All the cards (24)
    this.cards = cards;
    // the length of the array is 2 and it contains 2 cards
    this.pickedCards = [];
    // the goal is to get to 12 guessed pairs
    this.pairsGuessed = 0;
    // this number updates every 2 cards clicked
    this.pairsClicked = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    //calling lodash method for shuffle and passing parameter cards array
    this.cards = _.shuffle(cardsArr);
    console.log("shuffled array: ", this.cards);
};



MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
    this.pairsClicked ++;
    $("#pairs_clicked").text(this.pairsClicked);

    if (firstCard === secondCard) {
        //counts the pairs
        // $(".back").addClass("blocked");
        $(".just-clicked").addClass("blocked-for-real");
        this.pairsGuessed ++;
        // updated the span id with current number
        $("#pairs_guessed").text(this.pairsGuessed);
        $(".just-clicked").removeClass("just-clicked");
        // $(".back").removeClass("blocked");
        // console.log("Match");
    } else {
        $(".back").addClass("blocked");
        setTimeout(function(){
            $(".just-clicked").css("background", "#456783");
            $(".back").removeClass("blocked");
            $(".just-clicked").removeClass("just-clicked");
        }, 1000);
        ;
    }
    //every 2 cards resets the length of the array 
    this.pickedCards = [];
    this.finished();
};


MemoryGame.prototype.finished = function () {
    if (this.pairsGuessed === 12) {
        alert("Congrats you won!");
    }
};