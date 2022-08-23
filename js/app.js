const playerArray = [];


function showPlayerList(playerList){
    console.log(playerList);
    const orderedPlayerList = document.getElementById('player-list');
    orderedPlayerList.innerHTML = "";

    for (let i =0; i<playerList.length; i++){
        if(i<5){
            const selectedPlayerName = playerArray[i];

            const ol = document.createElement("ol");

            ol.innerHTML = `
            ${i+1}. ${selectedPlayerName}
            `;

            orderedPlayerList.appendChild(ol);
        }
        else{
            alert('Five players is already selected');
        }

        function playerExpenseTotal(){
            const costPerPlayers = parseFloat(document.getElementById('costPerPlayer').value);
            console.log(costPerPlayers);
            const numberOfPlayers = i+1; 
            const playerExpense = costPerPlayers * numberOfPlayers; //need change
            document.getElementById('player-expenses').innerText = playerExpense;
            return playerExpense;
        }

        document.getElementById('calculate-players-cost').addEventListener('click', function(){
            playerExpenseTotal();
        })

        document.getElementById('calculate-total').addEventListener('click', function(){
            const playercost = playerExpenseTotal();
            const manager = document.getElementById('cost-Manager').value;
            const coach = document.getElementById('cost-Coach').value;
            const totalCost = parseFloat(playercost) + parseFloat(manager) + parseFloat(coach);
            document.getElementById('total-expenses').innerText = totalCost;
        })
    }
}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    // console.log(playerArray);
    showPlayerList(playerArray);
}

