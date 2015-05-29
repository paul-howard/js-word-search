//  wordsearch/script.js
// -----------------------------------------------------------------------------
var fs = require('fs');

var words;
var grid;
var gridArray;
var output = [];

var searchDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

var rxSpaces      = /\b\s\b/g;
var rxLineEndings = /\r\n|\r|\n/;

// * PREP TEXT FILES
// -----------------------------------------------------------------------------
words = fs.readFileSync('WordList.txt', 'utf8');
words = words.trim().toUpperCase().replace(rxSpaces, '').split(rxLineEndings);

grid = fs.readFileSync('WordSearch.txt', 'utf8');
gridArray = grid.trim().split(rxLineEndings);

for (var i = 0 ; i < gridArray.length ; i++) {
  gridArray[i] = gridArray[i].split('');
}

// * WHAT I WANT FROM EACH AND EVERY ONE OF YOU IS A HARD-TARGET SEARCH OF
// * EVERY GAS STATION, RESIDENCE, WAREHOUSE, FARMHOUSE, HENHOUSE, OUTHOUSE
// * AND DOGHOUSE IN THIS AREA. YOUR FUGITIVES ARE WORDS. GO GET THEM.
// -----------------------------------------------------------------------------

// for each word...
for (var i = 0 ; i < words.length ; i++) {
  var searchWord = words[i];

  // ...loop through the grid rows...
  for (var j = 0 ; j < gridArray.length ; j++) {

    // ...and each letter in each row...
    for (var k = 0 ; k < gridArray[j].length ; k++) {

      // ...and if we match the first letter...
      if (searchWord.charAt(0) == gridArray[j][k]) {
        var startPosition = [j, k];

        // ...start looping through each direction...
        for (l = 0 ; l < searchDirections.length ; l++) {
          var searchDirection = searchDirections[l];

          // ...and if there's enough space on the grid in that direction...
          var endPosition;
          switch (searchDirection) {
            case 'N':
              endPosition = [j - (searchWord.length - 1), k];
              break;
            case 'NE':
              endPosition = [j - (searchWord.length - 1) , k + (searchWord.length - 1)];
              break;
            case 'E':
              endPosition = [j, k + (searchWord.length - 1)];
              break;
            case 'SE':
              endPosition = [j + (searchWord.length - 1), k + (searchWord.length - 1)];
              break;
            case 'S':
              endPosition = [j + (searchWord.length - 1), k];
              break;
            case 'SW':
              endPosition = [j + (searchWord.length - 1), k - (searchWord.length - 1)];
              break;
            case 'W':
              endPosition = [j, k - (searchWord.length - 1)];
              break;
            case 'NW':
              endPosition = [j - (searchWord.length - 1), k - (searchWord.length - 1)];
              break;
          }

          if (gridArray[endPosition[0]] !== undefined && gridArray[endPosition[0]][endPosition[1]] !== undefined) {
            var currentPosition = [j, k];
            var nextPosition;

            // ...start checking for matches on remaining letters...
            for (var m = 1 ; m < searchWord.length ; m++) {

              switch (searchDirection) {
                case 'N':
                  nextPosition = [currentPosition[0] - 1, currentPosition[1]];
                  break;
                case 'NE':
                  nextPosition = [currentPosition[0] - 1, currentPosition[1] + 1];
                  break;
                case 'E':
                  nextPosition = [currentPosition[0], currentPosition[1] + 1];
                  break;
                case 'SE':
                  nextPosition = [currentPosition[0] + 1, currentPosition[1] + 1];
                  break;
                case 'S':
                  nextPosition = [currentPosition[0] + 1, currentPosition[1]];
                  break;
                case 'SW':
                  nextPosition = [currentPosition[0] + 1, currentPosition[1] - 1];
                  break;
                case 'W':
                  nextPosition = [currentPosition[0], currentPosition[1] - 1];
                  break;
                case 'NW':
                  nextPosition = [currentPosition[0] - 1, currentPosition[1] - 1];
                  break;
              }

              if (searchWord.charAt(m) == gridArray[nextPosition[0]][nextPosition[1]]) {
                currentPosition = nextPosition;

                // ...and if we made it this far...
                if (nextPosition[0] == endPosition[0] && nextPosition[1] == endPosition[1]) {

                  // ...push the details to output! [startPosition, searchDirection, searchWord]
                  output.push([startPosition, searchDirection, searchWord]);
                  break;

                }
              } else {
                // character mismatch
                break;
              }
            }
          } else {
            // endPosition FAIL
          }
        }
      }
    }
  }
}

// FINAL OUTPUT:
console.log('\n');
console.log(output);
