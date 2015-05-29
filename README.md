# Word Search Puzzle

Just another coding exercise... ;-)

## Discussion

There are several ways to approach this problem. In the end, I abandoned a promising strategy using the .indexOf() method and a some tricks with reversing strings and remapping matrices, in favor of a less sophisticed "brute-force" approach using several nested loops. Sadly, I'm not sure I saved any time by doing so, and I'm pretty sure the first way would have been more elegant and more performant. Oh well.

Also, I blew off the prescribed direction designations below in favor of a set based on cardinal directions (North, South, East, West, etc.). This was a conscious choice, as my way just made things easier in my head. It would be simple enough to map them back if there were a pressing need.

## Instructions as Given

Given a collection of letters which contain hidden words (in the file `WORDSEARCH.TXT`), find all of the words in the word list (in the file `WORDLIST.TXT`) within the puzzle.  Remember, the words may be hidden left to right, right to left, up, down or diagonally.

Create a console application which will search the puzzle for the words contained in the list.  
Your output should:

- note which word you found,
- where you found it
- and one of the following designations for the direction the word takes:

Designation | Description
------------|------------
LR          | Left to right
RL          | Right to left
U           | Up
D           | Down
DUL         | Diagonal up left
DUR         | Diagonal up right
DDL         | Diagonal down left
DDR         | Diagonal down right

Your deliverable for this exercise will be the console application, all supporting modules necessary to compile and run your solution, and a file containing the output from your run.  Your solution will be considered incomplete if it does not contain the output.

There is no "right" solution to this problem. We are simply trying to determine how you approach the problem and the quality of the output you deliver.  Solid, well performing code always wins out over clever code.
