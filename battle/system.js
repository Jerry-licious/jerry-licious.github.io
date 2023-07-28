class Unit {
    constructor(attack, defence, initiative, hp) {
        this.attack = attack;
        this.defence = defence;
        this.initiative = initiative;
        this.hp = hp;
    }

    power() {
        // Distribution-factor
        return ((this.attack + 1) * (this.defence + 1)
                // Tier-factor
                + Math.pow((this.attack + this.defence), 2))
            // State-factor
            * this.initiative * this.hp;
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
    return sigmoid(3.5 * (bias - 0.5));
}

function damage(attack, defence) {
    return Math.max(0.5, attack * (1 - Math.log(defence + 1) / Math.log(attack + 3)));
}

function combat(attacker, defender) {
    let attackerPower = attacker.power();
    let defenderPower = defender.power();

    let bias = attackerPower / (attackerPower + defenderPower);
    let winrate = winProbability(bias)

    let outcome = Math.random() < winrate;

    // Attacker loses morale no matter what.
    attacker = attacker.decreaseMorale(0.07);

    let winner = outcome ? attacker : defender;
    let loser = outcome ? defender : attacker;

    // If attacker wins
    if (outcome) {
        winner = winner.damage(Math.floor(damage(loser.attack * 0.3, winner.defence)));
        loser = loser.damage(Math.ceil(damage(winner.attack, loser.defence)));
    } else {
        winner = winner.damage(Math.floor(damage(loser.attack / 3 * 0.3, winner.defence)));
        loser = loser.damage(Math.ceil(damage(winner.attack / 3, loser.defence)));
    }

    return {
        outcome: outcome,
        attacker: outcome ? winner : loser,
        defender: outcome ? loser : winner,
    }
}
