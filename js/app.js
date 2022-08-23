const playerArray = [];


function showPlayerList(playerList){
    console.log(playerList);
    const orderedPlayerList = document.getElementById('player-list');
    orderedPlayerList.innerHTML = "";

    for (let i =0; i<playerList.length; i++){
        // Maximum 5 players can be added
        if(i<5){
            const selectedPlayerName = playerArray[i];

            const ol = document.createElement("ol");

            ol.innerHTML = `
            ${i+1}. ${selectedPlayerName}
            `;

            orderedPlayerList.appendChild(ol);

        // player Expense calculation
        function playerExpenseTotal(){
            const costPerPlayerString = document.getElementById('costPerPlayer').value;
            const costPerPlayers = parseFloat(costPerPlayerString);
            const numberOfPlayers = i+1; 
            const playerExpense = costPerPlayers * numberOfPlayers;
            if(isNaN(playerExpense)){
                alert('Please input a value in the box');
            }
            else{
                document.getElementById('player-expenses').innerText = playerExpense;
                return playerExpense;
            }
        }

        document.getElementById('calculate-players-cost').addEventListener('click', function(){
            playerExpenseTotal();
        })

        // Total Expense Calculation
        document.getElementById('calculate-total').addEventListener('click', function(){
            const playercost = playerExpenseTotal();
            const manager = document.getElementById('cost-Manager').value;
            const coach = document.getElementById('cost-Coach').value;
            const totalCost = parseFloat(playercost) + parseFloat(manager) + parseFloat(coach);
            if(isNaN(totalCost)){
                alert('Please input a value in each box');
            }
            else{
                document.getElementById('total-expenses').innerText = totalCost;
            }
        })
        }

        // Alert for click when 5 players are already added
        else{
            alert('Five players is already selected');
        }
    }
}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    element.disabled = true;
    playerArray.push(playerName);
    // console.log(playerArray);
    showPlayerList(playerArray);
}

