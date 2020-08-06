// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    The difference between counter1 and counter2 is that in counter1 'count' is a private variable to the
 *    function. Where as in counter2 'count is a global variable and any other function can affect the value
 *    of count.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    count1 uses a closure as the function has everything it needs to succesffuly run itself inside the function. 
 *    count is also private to counterMaker() meaning that only count can only be changed inside of the function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    counter1 would be preferable if the lexical environment that is needed to run the counterMaker function is only
 *    needed and used within this function. 
 * 
 *    counter2 would be preferable if there are multiple functions using count in their lexical environment.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Taskœ 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    let score = Math.random() * 2;
    score = Math.round(score);
    return score;
}

  console.log(inning());
  console.log(inning());
  console.log(inning());
  console.log(inning());
  console.log(inning());
  console.log(inning());


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning,number){
  // callback is inning function 
  // number of innings (number)
  let homeTeam = []; // Home team score for pushing
  let awayTeam = []; // Away team score for pushing
  // creating object with keys Home and Away with the value of 0 
  let totalScore = {home:0,away:0};
  // need to generate a score per inning 
  for(let i=1; i <= number; i++){
    let homeScore = 0;
    let awayScore = 0;
    homeScore = inning();
    awayScore = inning();
    homeTeam.push(homeScore);
    awayTeam.push(awayScore);
  }
  let finalHome = homeTeam.reduce((totalHome,score)=> {
    return totalHome + score;
  },0)
  let finalAway =awayTeam.reduce((totalAway,score)=> {
    return totalAway + score;
  },0)
  totalScore.home = finalHome;
  totalScore.away = finalAway;

  return totalScore;
}

console.log(finalScore(inning,9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(inning){
  return {
    home:inning(),
    away:inning()
  }
}

function scoreboard(getInningScore,inning,number) {
  /* CODE HERE */
}


