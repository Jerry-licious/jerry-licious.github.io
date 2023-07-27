class Unit {
    constructor(attack, defence, initiative, hp) {
        this.attack = attack;
        this.defence = defence;
        this.initiative = initiative;
        this.hp = hp;
    }

    power() {
        return (this.attack + 1) * (this.defence) * this.initiative * this.hp;
    }

    clone() {
        return new Unit(this.attack, this.defence, this.initiative, this.hp);
    }

    damage(damage) {
        let newUnit = this.clone();
        newUnit.hp -= damage;
        return newUnit;
    }

    decreaseMorale(morale) {
        let newUnit = this.clone();
        newUnit.initiative -= morale;
        return newUnit;
    }
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function winProbability(bias) {
    return sigmoid(6 * (bias - 0.5));
}

function combat(attacker, defender) {
    let attackerPower = attacker.power();
    let defenderPower = defender.power();

    let bias = attackerPower / (attackerPower + defenderPower);
    let winRate = winProbability(bias);

    let outcome = Math.random() < winRate;

    // Attacker loses morale no matter what.
    attacker = attacker.decreaseMorale(0.1);

    let winner = outcome ? attacker : defender;
    let loser = outcome ? defender : attacker;

    winner = winner.damage(Math.floor((1 - bias) * loser.attack / (winner.defence + 1)));
    loser = loser.damage(Math.ceil(winner.attack / (loser.defence + 1)));

    return {
        outcome: outcome,
        attacker: outcome ? winner : loser,
        defender: outcome ? loser : winner,
    }
}
