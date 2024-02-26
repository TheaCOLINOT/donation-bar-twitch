var totalDonation = 0;
var goals = [100,200,300,400,500,600]; // liste des palliers
var goalBuffer = 0;

function testBar(){
    let value = document.getElementById("test-value").value;
    updateBar(parseInt(value));
}

function updateBar(value) {
    totalDonation += value;
    const totalBar = document.getElementById("total-bar");
    const currentGoal = document.getElementById("goal-current");
    currentGoal.textContent = totalDonation+"€"
    if(totalDonation >= goals[goalBuffer]){
        goalBuffer++;
        updateGoal(goals[goalBuffer]);
    }
    totalBar.style.width = totalDonation / goals[goalBuffer] * 100 +"%"
}

function updateGoal(value){
    const GOAL_ELEM = document.getElementById("goal-total");
    GOAL_ELEM.textContent = value+"€"
}

window.onload = function() {
    updateGoal(goals[goalBuffer]);
};