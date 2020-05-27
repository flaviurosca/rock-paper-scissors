function play() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const comp = choices[Math.floor(Math.random()*choices.length)];
  const user = choices[Math.floor(Math.random()*choices.length)];
  
  function determineWinner(user, comp) {
    if (user === comp) {
      return "It's a tie!";
    } else if (user === 'Rock') {
        if (comp === 'Paper') {
          return 'Computer wins!';
        } else {
          return 'User wins!';
        }
    } else if (user === 'Paper') {
        if (comp === 'Scissors') {
          return 'Computer wins!';
        } else {
          return 'User wins!';
        }
    } else if (user === 'Scissors') {
        if (comp === 'Rock') {
          return 'Computer wins!';
        } else {
          return 'User wins!';
        }
    }
  } 
  console.log('Computer choice: ' + comp);
  console.log('User choice: ' + user);
  console.log(determineWinner(user, comp));
}
play();
