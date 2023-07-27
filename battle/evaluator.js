const resultDisplay = document.getElementById('result');

const resultAttackerAttack = document.getElementById('resultAttackerAttack');
const resultAttackerDefence = document.getElementById('resultAttackerDefence');
const resultAttackerInitiative = document.getElementById('resultAttackerInitiative');
const resultAttackerHP = document.getElementById('resultAttackerHP');

const resultDefenderAttack = document.getElementById('resultDefenderAttack');
const resultDefenderDefence = document.getElementById('resultDefenderDefence');
const resultDefenderInitiative = document.getElementById('resultDefenderInitiative');
const resultDefenderHP = document.getElementById('resultDefenderHP');

const againButton = document.getElementById('againButton');

let resultAttacker = null;
let resultDefender = null;

function simulateCombat() {
    let attacker = new Unit(parseInt(attackerAttackInput.value),
        parseInt(attackerDefenceInput.value),
        parseFloat(attackerInitiativeInput.value),
        parseInt(attackerHPInput.value));
    let defender = new Unit(parseInt(defenderAttackInput.value),
        parseInt(defenderDefenceInput.value),
        parseFloat(defenderInitiativeInput.value),
        parseInt(defenderHPInput.value));

    let combatResult = combat(attacker, defender);
    let result = combatResult.outcome;
    resultAttacker = combatResult.attacker;
    resultDefender = combatResult.defender;

    resultDisplay.innerHTML = result ? 'Attacker won!' : 'Defender won!';

    // Update the elements.
    resultAttackerAttack.innerHTML = resultAttacker.attack.toString();
    resultAttackerDefence.innerHTML = resultAttacker.defence.toString();
    resultAttackerInitiative.innerHTML = (Math.round(resultAttacker.initiative * 100) / 100).toString();
    resultAttackerHP.innerHTML = resultAttacker.hp.toString();

    resultDefenderAttack.innerHTML = resultDefender.attack.toString();
    resultDefenderDefence.innerHTML = resultDefender.defence.toString();
    resultDefenderInitiative.innerHTML = (Math.round(resultDefender.initiative * 100) / 100).toString();
    resultDefenderHP.innerHTML = resultDefender.hp.toString();

    againButton.disabled = false;
}

fightButton.addEventListener('click', simulateCombat);

// Copies the output data to the input elements.
function again() {
    attackerAttackInput.value = resultAttacker.attack.toString();
    attackerDefenceInput.value = resultAttacker.defence.toString();
    attackerInitiativeInput.value = (Math.round(resultAttacker.initiative * 100) / 100).toString();
    attackerHPInput.value = resultAttacker.hp.toString();

    defenderAttackInput.value = resultDefender.attack.toString();
    defenderDefenceInput.value = resultDefender.defence.toString();
    defenderInitiativeInput.value = (Math.round(resultDefender.initiative * 100) / 100).toString();
    defenderHPInput.value = resultDefender.hp.toString();
}

againButton.addEventListener('click', again);