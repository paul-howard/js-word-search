//  wordsearch/script.js
// -----------------------------------------------------------------------------
var fs = require('fs');

var grid;
var newGrid;
var wordsReadable;
var wordsRemaining;
var searchDirections;
var output = [];

var rxSpaces      = /\b\s\b/g;
var rxLineEndings = /\r\n|\r|\n/;

// * PREP TEXT FILES
// -----------------------------------------------------------------------------
grid = fs.readFileSync('WordSearch.txt', 'utf8');
grid = grid.trim().split(rxLineEndings);

wordsReadable  = fs.readFileSync('WordList.txt', 'utf8');
wordsRemaining = wordsReadable.trim().toUpperCase().replace(rxSpaces, '').split(rxLineEndings);
wordsReadable  = wordsReadable.trim().split(rxLineEndings);

// * WHAT I WANT FROM EACH AND EVERY ONE OF YOU IS A HARD-TARGET SEARCH OF
// * EVERY GAS STATION, RESIDENCE, WAREHOUSE, FARMHOUSE, HENHOUSE, OUTHOUSE
// * AND DOGHOUSE IN THIS AREA. YOUR FUGITIVES ARE WORDS. GO GET THEM.
// -----------------------------------------------------------------------------

// LR
// --
searchDirection = 'LR';
for (var i = 0 ; i < wordsRemaining.length ; i++) {
  for (var j = 0 ; j < grid.length ; j++) {
    if (grid[j].indexOf(wordsRemaining[i]) >= 0) {
      var x = grid[j].indexOf(wordsRemaining[i]) + 1;
      var y = j + 1;
      output.push([[x, y], searchDirection, wordsRemaining[i]]);
      wordsRemaining.splice(wordsRemaining[i], 1);
      console.log(wordsRemaining.length + ' words left');
    }
  }
}

// RL
// --
searchDirection = 'RL';
// just reverse the words & make x the last char instead of the first
for (var i = 0 ; i < wordsRemaining.length ; i++) {
  for (var j = 0 ; j < grid.length ; j++) {
    var searchWord = wordsRemaining[i].split('').reverse().join('');
    if (grid[j].indexOf(searchWord) >= 0) {
      var x = grid[j].indexOf(searchWord) + searchWord.length;
      var y = j + 1;
      output.push([[x, y], searchDirection, wordsRemaining[i]]);
      wordsRemaining.splice(wordsRemaining[i], 1);
      console.log(wordsRemaining.length + ' words left');
    }
  }
}

// D
// _
searchDirection = 'D';

function remapGridToD(grid) {
  var _newGrid = [];
  for (var i = 0 ; i < grid[0].length ; i++) {
    var row = '';
    for (var j = 0 ; j < grid.length ; j++) {
      row = row + grid[j].charAt(i);
    }

    _newGrid.push(row);
  }

  return _newGrid;
}

newGrid = remapGridToD(grid);

for (var i = 0 ; i < wordsRemaining.length ; i++) {
  for (var j = 0 ; j < newGrid.length ; j++) {
    var searchWord = wordsRemaining[i];
    if (newGrid[j].indexOf(searchWord) >= 0) {
      var x = j + 1;
      var y = newGrid[j].indexOf(searchWord) + 1;
      output.push([[x, y], searchDirection, wordsRemaining[i]]);
      wordsRemaining.splice(wordsRemaining[i], 1);
      console.log(wordsRemaining.length + ' words left');
    }
  }
}

// U
// _
searchDirection = 'U';

for (var i = 0 ; i < wordsRemaining.length ; i++) {
  for (var j = 0 ; j < newGrid.length ; j++) {
    var searchWord = wordsRemaining[i].split('').reverse().join('');
    if (newGrid[j].indexOf(searchWord) >= 0) {
      var x = j + 1;
      var y = newGrid[j].indexOf(searchWord) + searchWord.length;
      output.push([[x, y], searchDirection, wordsRemaining[i]]);
      wordsRemaining.splice(wordsRemaining[i], 1);
      console.log(wordsRemaining.length + ' words left');
    }
  }
}

// DUR
// ---
function remapGridToDur(grid){
  var _newGrid = [];
  for (var i = 0 ; i < grid.length ; i++) {
    var row = '';
    var j = i;
    while (j <= 0) {
      row = row + grid[]
      j--;
    }
  }
  for (var i = 0 ; i < grid[0].length ; i++) {
    var row = '';
    for (var j = 0 ; j < grid.length ; j++) {
      row = row + grid[j].charAt(i);
    }

    _newGrid.push(row);
  }

  return _newGrid;
};
newGrid = remapGridToDur(grid);

// VOILA!
console.log('\n');
console.log(output);
