const resultDisplay = document.getElementById('result');

const resultAttackerAttack = document.getElementById('resultAttackerAttack');
const resultAttackerDefence = document.getElementById('resultAttackerDefence');
const resultAttackerInitiative = document.getElementById('resultAttackerInitiative');
const resultAttackerHP = document.getElementById('resultAttackerHP');

const resultDefenderAttack = document.getElementById('resultDefenderAttack');
const resultDefenderDefence = document.getElementById('resultDefenderDefence');
const resultDefenderInitiative = document.getElementById('resultDefenderInitiative');
const resultDefenderHP = document.getElementById('resultDefenderHP');

function roundedString(number) {
    return (Math.round(number * 100) / 100).toString();
}

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
    resultAttackerInitiative.innerHTML = roundedString(resultAttacker.initiative);
    resultAttackerHP.innerHTML = resultAttacker.hp.toString();

    resultDefenderAttack.innerHTML = resultDefender.attack.toString();
    resultDefenderDefence.innerHTML = resultDefender.defence.toString();
    resultDefenderInitiative.innerHTML = roundedString(resultDefender.initiative);
    resultDefenderHP.innerHTML = resultDefender.hp.toString();

    againButton.disabled = false;

    updateButtons();
}

fightButton.addEventListener('click', simulateCombat);

// Copies the output data to the input elements.
function again() {
    attackerAttackInput.value = resultAttacker.attack.toString();
    attackerDefenceInput.value = resultAttacker.defence.toString();
    attackerInitiativeInput.value = roundedString(resultAttacker.initiative);
    attackerHPInput.value = resultAttacker.hp.toString();

    defenderAttackInput.value = resultDefender.attack.toString();
    defenderDefenceInput.value = resultDefender.defence.toString();
    defenderInitiativeInput.value = roundedString(resultDefender.initiative);
    defenderHPInput.value = resultDefender.hp.toString();

    updateAttackerErrors();
    updateDefenderErrors();
}

function swap() {
    let attacker = new Unit(parseInt(attackerAttackInput.value),
        parseInt(attackerDefenceInput.value),
        parseFloat(attackerInitiativeInput.value),
        parseInt(attackerHPInput.value));
    let defender = new Unit(parseInt(defenderAttackInput.value),
        parseInt(defenderDefenceInput.value),
        parseFloat(defenderInitiativeInput.value),
        parseInt(defenderHPInput.value));

    attackerAttackInput.value = defender.attack.toString();
    attackerDefenceInput.value = defender.defence.toString();
    attackerInitiativeInput.value = roundedString(defender.initiative);
    attackerHPInput.value = defender.hp.toString();

    defenderAttackInput.value = attacker.attack.toString();
    defenderDefenceInput.value = attacker.defence.toString();
    defenderInitiativeInput.value = roundedString(attacker.initiative);
    defenderHPInput.value = attacker.hp.toString();
}

swapButton.addEventListener('click', swap)
againButton.addEventListener('click', again);