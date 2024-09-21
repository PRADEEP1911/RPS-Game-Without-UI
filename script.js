const game = confirm("Can We Play a RPS Game..?");
if(game){
    const ar = ["rock","paper","scissor"];
    const fine = confirm("You Have to Choose Rock,Paper or Scisser..!!");
    if(fine){
        
        let pc = prompt("Enter Your Choice -Rock,Paper,Scissors");
        pc = pc ?? 0;
        if(ar.includes(pc.toLowerCase().trim())){
            const ct = ar[computerturn()];
        
            if(pc == ct){
                alert(`Computer is ${ct} , Player is ${pc} , "The Match is Draw"`);
            }
            else if(pc == 'rock' && ct =='scissors'){
                alert(`Computer is ${ct} , Player is ${pc} , __Player won__`);
            }
            else if(pc == 'scissors' && ct == 'paper'){
                alert(`Computer is ${ct} , Player is ${pc} , __player won__`);
            }
            else if(pc == 'paper' && ct == 'rock'){
                alert(`Computer is ${ct} , Player is ${pc} , __player won__`);
            }
            else{
                alert(`Computer is ${ct} , Player is ${pc} , __computer won__`);
            }

            const again = confirm("Do you need to play Again??");
            again? location.reload() : alert("ok , See YOU!!");
        
        }
        else{
            alert("thanks..See you later....")
        }

        
        
    }
    else{
        alert("I Think You've Changed Mind _See next Time")
    }
}
else{
    alert("Thank You!! We Will Play Next Time....")
}


function computerturn(){
    const ind = Math.floor(Math.random()*3);
    return ind;
}