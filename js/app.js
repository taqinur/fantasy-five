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
    }
}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;
    playerArray.push(playerName);
    // console.log(playerArray);
    showPlayerList(playerArray);
}