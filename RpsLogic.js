//User is prompted to input rock, paper or scissors
            //Upon user input function for the computer's choice is invoked
            //Another function then compares user input with computer's choice and returns win or lose
            
            let userSelection;
            let computerSelection;
            let playerScore=0;
            let computerScore=0;
            let playerWins=[];
            let computerWins=[];
           
            function computerPlay(){
                let choiceNum=Math.floor(Math.random()*3)+1;

                if (choiceNum===1){
                   return computerSelection='rock';
                } else if (choiceNum===2){
                   return computerSelection='paper'; 
                } else {
                   return computerSelection='scissors';
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
                    computerWins.push(computerScore);
                    return 'You Lose! Paper beats rock.'
                } else if (userSelection==='rock' && computerSelection==='scissors'){
                    playerScore++;
                    playerWins.push(playerScore);
                    return 'You Win! Rock beats scissors.'
                } else if (userSelection==='paper' && computerSelection==='scissors'){
                    computerScore++;
                    computerWins.push(computerScore);
                    return 'You Lose! Scissors beats paper.'
                } else if (userSelection==='paper' && computerSelection==='rock'){
                    playerScore++;
                    playerWins.push(playerScore);
                    return 'You Win! Paper beats rock.'
                } else if (userSelection==='scissors' && computerSelection==='rock'){
                    computerScore++;
                    computerWins.push(computerScore);
                    return 'You Lose! Rock beats scissors.'
                } else if (userSelection==='scissors' && computerSelection==='paper'){
                    playerScore++;
                    playerWins.push(playerScore);
                    return 'You Win! Scissors beats paper.'
                } else {
                    return 'Incorrect input';
                }
            }

        
        const container=document.querySelector('div');
        const para1=document.getElementById('para1');
        const para2=document.getElementById('para2');

        function runningScore(playerWins,computerWins){
            for(const pWin of playerWins){
                return para2.textContent= `${pWin}`;
            };
            for(const cWin of computerWins){
                return para2.textcontent= `${cWin}`;
            };
    
     
        }

        const rock=document.getElementById('rock');
            rock.addEventListener('click',()=>{ para1.textContent=playRound('rock',computerPlay());
            para2.textContent=`Player Score:${playerScore}       Computer Score:${computerScore}`;
            });
        
        const paper=document.getElementById('paper');
            paper.addEventListener('click',()=> { para1.textContent=playRound('paper',computerPlay());
            para2.textContent=`Player Score:${playerScore}       Computer Score:${computerScore}`;});

        const scissors=document.getElementById('scissors');
            scissors.addEventListener('click',()=>{ para1.textContent=playRound('scissors',computerPlay())
            para2.textContent=`Player Score:${playerScore}       Computer Score:${computerScore}`;});



        