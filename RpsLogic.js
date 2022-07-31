//User is prompted to input rock, paper or scissors
            //Upon user input function for the computer's choice is invoked
            //Another function then compares user input with computer's choice and returns win or lose
            
            let userSelection;
            let computerSelection;
            let playerScore=0;
            let computerScore=0;
           
            function computerPlay(){
                let choiceNum=Math.floor(Math.random()*3)+1;

                if (choiceNum===1){
                    computerSelection='rock';
                } else if (choiceNum===2){
                    computerSelection='paper'; 
                } else {
                    computerSelection='scissors';
                }
            }
            
            
            
            function playRound(userSelection,computerSelection){
                userSelection.toLowerCase();
                if (userSelection==='rock'&& computerSelection==='rock' ||
                    userSelection==='paper'&& computerSelection==='paper' ||
                    userSelection==='scissors'&& computerSelection==='scissors'){
                    return 'It\'s a draw.'
                } else if (userSelection==='rock' && computerSelection==='paper'){
                    computerScore++;
                    return 'You Lose! Paper beats rock.'
                } else if (userSelection==='rock' && computerSelection==='scissors'){
                    playerScore++;
                    return 'You Win! Rock beats scissors.'
                } else if (userSelection==='paper' && computerSelection==='scissors'){
                    computerScore++;
                    return 'You Lose! Scissors beats paper.'
                } else if (userSelection==='paper' && computerSelection==='rock'){
                    playerScore++;
                    return 'You Win! Paper beats rock.'
                } else if (userSelection==='scissors' && computerSelection==='rock'){
                    computerScore++;
                    return 'You Lose! Rock beats scissors.'
                } else if (userSelection==='scissors' && computerSelection==='paper'){
                    playerScore++;
                    return 'You Win! Scissors beats paper.'
                } else {
                    return 'Incorrect input';
                }
            }
        
        const rock=document.getElementById('rock');
        const paper=document.getElementById('paper');
        const scissors=document.getElementById('scissors');