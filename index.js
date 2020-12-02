//JavaScript - CLI Quiz


var readlineSync = require('readline-sync');
const chalk = require('chalk');
var username = readlineSync.question('Enter Your Name: ');

console.log(chalk.yellowBright('Harry Potter Quiz'));
console.log(chalk.magentaBright(`“It does not do well to dwell on dreams and forget to live"`))
console.log(chalk.greenBright('Write the correct option.'))
console.log('Points:  Correct: +3   Incorrect: -1')
console.log('');



var questions = [
   {question: `How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?`,A: 'He transfigures into a shark', B:
   'He eats gillyweed', C:'He kisses a mermaid',answer: 'b'},
   {question: `How many Weasley siblings are there?`,A: '10', B:
   '5', C:'7',answer: 'c'},
   {question: `What does the spell “Obliviate” do?`,A: 'Removes parts of someone’s memory', B:'Makes objects invisible', C:'Destroys objects',answer: 'a'},
   {question: `Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secret's?`,A: 'Dumbledore', B:
   'Draco Malfoy', C:'Dobby',answer: 'c'},
   {question: `Who has given Harry Potter the Invisibility cloak?`,A: 'Dobby', B:
   'Dumbledore', C:'Mad-eye Moody',answer: 'b'},

 ];
var score = 0;
var best = 12;

for(var i = 0;i<questions.length;i++){
  var n = i+1;
  console.log(chalk.inverse(n+'. '+questions[i].question));
  console.log('[a,b,c]');
  console.log(chalk.cyanBright('A: '+questions[i].A));
  console.log(chalk.cyanBright('B: '+questions[i].B));
  console.log(chalk.cyanBright('C: '+questions[i].C));
  console.log('');
  var answer = readlineSync.question('Answer: ');

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    console.log(chalk.bgGreen('Correct'));
    score = score + 3;
  }else{
    console.log(chalk.bgRed('Incorrect'));
    score = score -1;
  }
}
if(score > best){
    console.log(chalk.blueBright('Congratulations ! This is the best score !!\n'))
    best = score
  }
console.log(chalk.whiteBright(username )+chalk.red(' your final score is: '+ score));