
var aa;
  var func1 = function(playerChoice) {
    console.log(playerChoice);
    return{
        playerChoice: playerChoice
    }
    
  }
    
    alert(aa.playerChoice);
 

  function chooseGame2(playerChoice2,playerChoice){

  


    
     const computerChoice = pickComputerChoice(playerChoice2);
    
     const chosenGame = `<div class="choices" style="margin-bottom: 20px;">You chose ${playerChoice} and ${playerChoice2}. The Computer chose ${computerChoice}. 
             Let's Play the Game!</div> 
 
             <button onclick="           
             playGame('Null','${playerChoice2}','${computerChoice}');    
             "class="null-button">Null</button>
                 <button onclick="           
             playGame('Just','${playerChoice2}','${computerChoice}');     
             " class="just-button">Just</button>
                 <button onclick="           
             playGame('Finger','${playerChoice2}','${computerChoice}');     
             " class="finger-button">Finger</button>
                 <button onclick="           
             playGame('Can','${playerChoice2}','${computerChoice}');     
             " class="can-button">Can</button>
                 <button onclick="           
             playGame('Count','${playerChoice2}','${computerChoice}');     
             " class="count-button">Count</button>
                 <button onclick="           
             playGame('Only','${playerChoice2}','${computerChoice}');     
             " class="only-button">Only</button>
 
                 <div class="js-play-game" style="margin-top: 20px;"></div>`
                 
   
      document.querySelector('.js-choose-game').innerHTML = chosenGame;
         
     
  }


function playGame(playerMove,playerChoice, computerChoice){
      const computerMove = pickComputerMove();

      let result=''

        if(playerMove==='Null'){
                if(computerMove==='Null'){
                    result = 'Tie'
                }
                else if(computerMove==='Just'){
                    if(playerChoice==='Just'){
                        result= 'you win'
                    }
                    else if(computerChoice==='Just'){
                        result='you lose'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                    if(playerChoice==='Finger'){
                        result= 'you win'
                    }
                    else if(computerChoice==='Finger'){
                        result='you lose'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Can'){
                    if(playerChoice==='Can'){
                        result= 'you win'
                    }
                    else if(computerChoice==='Can'){
                        result='you lose'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Count'){
                    if(playerChoice==='Count'){
                        result= 'you win'
                    }
                    else if(computerChoice==='Count'){
                        result='you lose'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Only'){
                    if(playerChoice==='Only'){
                        result= 'you win'
                    }
                    else if(computerChoice==='Only'){
                        result='you lose'
                    }
                    else{result='Tie'}
                }  
        }

        else if(playerMove==='Just'){
                if(computerMove==='Null'){
                        if(playerChoice==='Just'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Just'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Just'){
                        if(playerChoice==='Finger'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Finger'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                        if(playerChoice==='Can'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Can'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Can'){
                        if(playerChoice==='Count'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Count'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Count'){
                        if(playerChoice==='Only'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Only'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Only'){
                        if(playerChoice==='Just'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Just'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
            }

        else if(playerMove==='Finger'){
                    if(computerMove==='Null'){
                        if(playerChoice==='Finger'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Finger'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Just'){
                        if(playerChoice==='Can'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Can'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                        if(playerChoice==='Count'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Count'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Can'){
                        if(playerChoice==='Only'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Only'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Count'){
                        if(playerChoice==='Just'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Just'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Only'){
                        if(playerChoice==='Finger'){
                            result= 'you win'
                        }
                        else if(computerChoice==='Finger'){
                            result='you lose'
                        }
                        else{result='Tie'}
                }

         }
         else if(playerMove==='Can'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Can'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Can'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Count'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Count'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Only'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Only'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Just'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Just'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Finger'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Finger'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Can'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Can'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
         }

         else if(playerMove==='Count'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Count'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Count'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Only'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Only'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Just'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Just'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Finger'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Finger'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Can'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Can'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Count'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Count'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
         }

         else if(playerMove==='Only'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Only'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Only'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Just'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Just'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Finger'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Finger'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Can'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Can'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Count'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Count'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Only'){
                                result= 'you win'
                            }
                            else if(computerChoice==='Only'){
                                result='you lose'
                            }
                            else{result='Tie'}
                    }
                }

      const playGame =` You picked ${playerMove}. The Computer picked ${computerMove}.  ${result}`

       document.querySelector('.js-play-game').innerHTML = playGame;            
      
    }

function pickComputerMove(){

  const randomNumber =  Math.random();

  let computerMove='';

              if(randomNumber>=0 && randomNumber<1/6){
              computerMove = 'Null';  
              }
              else if(randomNumber>=1/6 && randomNumber<2/6){
                  computerMove ='Just';  
              }
              else if(randomNumber>=2/6 && randomNumber<3/6){
                  computerMove ='Finger';  
              }
              else if(randomNumber>=3/6 && randomNumber<4/6){
                  computerMove ='Can';  
              }
              else if(randomNumber>=4/6 && randomNumber<5/6){
                  computerMove ='Count';  
              }
              else if(randomNumber>=5/6 && randomNumber<1){
                  computerMove ='Only';  
              }
          
          return computerMove;        
  } 
  
function pickComputerChoice(playerChoice){

    const randomNumber =  Math.random();

    let computerChoice='';

            if(randomNumber>=0 && randomNumber<1/5){
                computerChoice = 'Just'; 
                if(playerChoice==='Just'){
                    return 'Finger'||'Can'||'Count'||'Only';
                } 
            }
            else if(randomNumber>=1/5 && randomNumber<2/5){
                computerChoice ='Finger';
                if(playerChoice==='Finger'){
                    return 'Just'||'Can'||'Count'||'Only';
                }   
            }
            else if(randomNumber>=2/5 && randomNumber<3/5){
                computerChoice ='Can'; 
                if(playerChoice==='Can'){
                    return 'Finger'||'Just'||'Count'||'Only';
                }  
            }
            else if(randomNumber>=3/5 && randomNumber<4/5){
                computerChoice ='Count';
                if(playerChoice==='Count'){
                    return 'Finger'||'Can'||'Just'||'Only';
                }   
            }
            else if(randomNumber>=4/5 && randomNumber<1){
                computerChoice ='Only';  
                if(playerChoice==='Only'){
                    return 'Finger'||'Can'||'Count'||'Just';
                } 
            }
             
   return computerChoice;

}