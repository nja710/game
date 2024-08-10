function myalert()
{
    alert("YOU MUST BELIEVE IN YOURSELF!")
}


function play()
{
    var player1 = Math.ceil(Math.random() * 3);
    var player2 = Math.ceil(Math.random() * 3);
   

if (player1 == 1)
{
    document.getElementById("first player").innerHTML = "rock";  
}
else if (player1 == 2)
{
    document.getElementById("first player").innerHTML = "paper";
}
else
{
    document.getElementById("first player").innerHTML = "scissors";
}
if (player2 == 1)
    {
        document.getElementById("second player").innerHTML = "rock";    
    }
    else if (player2 == 2)
    {
        document.getElementById("second player").innerHTML = "paper";
    }
    else
    {
        document.getElementById("second player").innerHTML = "scissors";
    }


    if (player1==1 && player2==2)
{
    document.getElementById("finalres").innerHTML = "player 2 wins";
}
else if (player1==1 && player2==3)
{
document.getElementById("finalres").innerHTML = "player 1 wins";
}
else if (player1==2 && player2==1)
{
    document.getElementById("finalres").innerHTML = "player 1 wins";
}
else if (player1==3 && player2==1)
    {
        document.getElementById("finalres").innerHTML = "player 2 wins";
    }
    else if (player1==3 && player2==2)
        {
            document.getElementById("finalres").innerHTML = "player 1 wins";
        }
    else if (player1==2 && player2==3)
        {
            document.getElementById("finalres").innerHTML = "player 2 wins";
        }
        else if (player1==3 && player2==1)
            {
                document.getElementById("finalres").innerHTML = "player 2 wins";
            }
        else if (player1==2 && player2==2)
            {
                document.getElementById("finalres").innerHTML = "tie";
            }
            else if (player1==3 && player2==3)
                {
                    document.getElementById("finalres").innerHTML = "tie";
                }
                else if (player1==1 && player2==1)
                    {
                        document.getElementById("finalres").innerHTML = "tie";
                    }
}


