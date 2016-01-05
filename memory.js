angular.module('memoryApp', [])
  .controller('MemoryBoardController', function() {

    var animals = ['cow', 'horse', 'owl', 'dog,', 'cat']

    var memoryBoard = this;
    memoryBoard.cards = [
      {text:'cow', flipped:false, solved: false},
      {text:'cow', flipped:false, solved: false},
      {text:'horse', flipped:false, solved: false},
      {text:'horse', flipped:false, solved: false},
      {text:'owl', flipped:false, solved: false},
      {text:'owl', flipped:false, solved: false},
      {text:'dog', flipped:false, solved: false},
      {text:'dog', flipped:false, solved: false},
      {text:'cat', flipped:false, solved: false},
      {text:'cat', flipped:false, solved: false},
      {text:'chicken', flipped:false, solved: false},
      {text:'chicken', flipped:false, solved: false},
      {text:'fish', flipped:false, solved: false},
      {text:'fish', flipped:false, solved: false},
      {text:'pig', flipped:false, solved: false},
      {text:'pig', flipped:false, solved: false}];

    memoryBoard.newGame = function(){
      memoryBoard.board =[];
      for (i=0; i<4; i++){
        var row = [];
        for (j=0; j<4; j++){
          row.push(memoryBoard.cards.pop())
        }
        memoryBoard.board.push(row);
      }
      console.log('I was called');
     // return board;
    }

   // memoryBoard.board = memoryBoard.newGame();
 
    memoryBoard.numCardsSelected = 0;   

    memoryBoard.compare = function() {
      /* need to compare whether or not the two chosen cards match */
      var pair_to_compare = [];
      angular.forEach(memoryBoard.cards, function(card) {
        if(card.flipped && !card.solved){
          pair_to_compare.push(card);
        }      
      });
      if(pair_to_compare[0]['text'] === pair_to_compare[1]['text']){
        pair_to_compare[0]['solved'] = true; 
        pair_to_compare[1]['solved'] = true; 
      }
      memoryBoard.reset();
    };

    memoryBoard.reset = function() {
      angular.forEach(memoryBoard.cards, function(card) {
        if (!card.solved){
          card.flipped = false;
        }
      });
      memoryBoard.numCardsSelected = 0;
    };

    memoryBoard.selectCard = function(card){
      if(card.flipped === true){
        return; // no action taken if card has already been flipped
      }
      if(memoryBoard.numCardsSelected < 2){
        card.flipped = true;
      }
      memoryBoard.numCardsSelected += 1;     
    };

    var init = function(){
      memoryBoard.newGame();
    };

    // init();
    // angular.element(document).ready(init);

  });