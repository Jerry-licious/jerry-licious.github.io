const attackerAttackInput = document.getElementById('attackerAttack');
const attackerDefenceInput = document.getElementById('attackerDefence');
const attackerInitiativeInput = document.getElementById('attackerInitiative');
const attackerHPInput = document.getElementById('attackerHP');
const attackerErrorDisplay = document.getElementById('attackerErrors');

const defenderAttackInput = document.getElementById('defenderAttack');
const defenderDefenceInput = document.getElementById('defenderDefence');
const defenderInitiativeInput = document.getElementById('defenderInitiative');
const defenderHPInput = document.getElementById('defenderHP');
const defenderErrorDisplay = document.getElementById('defenderErrors');

const fightButton = document.getElementById('fightButton');

let attackerErrors = [];
let defenderErrors = [];

function getErrors(attackInput, defenceInput, initiativeInput, hpInput) {
    let errors = [];
    if (!attackInput) {
        errors.push('Missing attack value.');
    }
    if (!defenceInput) {
        errors.push('Missing defence value.');
    }
    if (initiativeInput) {
        let initiative = parseFloat(initiativeInput);
        if (initiative < 0 || initiative > 1) {
            errors.push('Initiative must be between 0 and 1.');
        }
    } else {
        errors.push('Missing initiative value.');
    }
    if (hpInput) {
        let initiative = parseFloat(hpInput);
        if (initiative < 0 || initiative > 10) {
            errors.push('HP must be between 0 and 10.');
        }
    } else {
        errors.push('Missing HP value.');
    }

    return errors;
}

function displayErrors(element, errors) {
    element.innerHTML = '';
    for (let error of errors) {
        element.append(document.createTextNode(error));
        element.append(document.createElement('br'));
    }
}

function updateFightButton() {
    fightButton.disabled = attackerErrors.length !== 0 || defenderErrors.length !== 0;
}

function updateAttackerErrors() {
    attackerErrors = getErrors(
        attackerAttackInput.value, attackerDefenceInput.value,
        attackerInitiativeInput.value, attackerHPInput.value);
    displayErrors(attackerErrorDisplay, attackerErrors);
    updateFightButton();
}

attackerAttackInput.addEventListener('input', updateAttackerErrors);
attackerDefenceInput.addEventListener('input', updateAttackerErrors);
attackerInitiativeInput.addEventListener('input', updateAttackerErrors);
attackerHPInput.addEventListener('input', updateAttackerErrors);

function updateDefenderErrors() {
    defenderErrors = getErrors(
        defenderAttackInput.value, defenderDefenceInput.value,
        defenderInitiativeInput.value, defenderHPInput.value);
    displayErrors(defenderErrorDisplay, defenderErrors);
    updateFightButton();
}

defenderAttackInput.addEventListener('input', updateDefenderErrors);
defenderDefenceInput.addEventListener('input', updateDefenderErrors);
defenderInitiativeInput.addEventListener('input', updateDefenderErrors);
defenderHPInput.addEventListener('input', updateDefenderErrors);

updateAttackerErrors();
updateDefenderErrors();