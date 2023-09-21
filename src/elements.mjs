const elements = {
    "Normal": {
        "superEffective": [],
        "resistedBy": ["Rock", "Steel"],
        "immune": ["Ghost"]
    },
    "Fire": {
        "superEffective": ["Grass", "Bug", "Ice", "Steel"],
        "resistedBy": ["Fire", "Water", "Rock", "Dragon"],
        "immune": []
    },
    "Water": {
        "superEffective": ["Fire", "Ground", "Rock"],
        "resistedBy": ["Water", "Grass", "Electric"],
        "immune": []
    },
    "Electric": {
        "superEffective": ["Water", "Flying"],
        "resistedBy": ["Electric"],
        "immune": ["Ground"]
    },
    "Grass": {
        "superEffective": ["Water", "Ground", "Rock"],
        "resistedBy": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"],
        "immune": []
    },
    "Ice": {
        "superEffective": ["Grass", "Ground", "Flying", "Dragon"],
        "resistedBy": ["Fire", "Water", "Ice", "Steel"],
        "immune": []
    },
    "Fighting": {
        "superEffective": ["Normal", "Ice", "Rock", "Dark", "Steel"],
        "resistedBy": ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
        "immune": ["Ghost"]
    },
    "Poison": {
        "superEffective": ["Grass", "Fairy"],
        "resistedBy": ["Poison", "Ground", "Rock", "Ghost"],
        "immune": []
    },
    "Ground": {
        "superEffective": ["Fire", "Electric", "Poison", "Rock", "Steel"],
        "resistedBy": ["Grass", "Ice", "Water"],
        "immune": ["Flying"]
    },
    "Flying": {
        "superEffective": ["Grass", "Fighting", "Bug"],
        "resistedBy": ["Electric", "Rock", "Steel"],
        "immune": []
    },
    "Psychic": {
        "superEffective": ["Fighting", "Poison"],
        "resistedBy": ["Psychic", "Steel"],
        "immune": ["Dark"]
    },
    "Bug": {
        "superEffective": ["Grass", "Psychic", "Dark"],
        "resistedBy": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"],
        "immune": []
    },
    "Rock": {
        "superEffective": ["Fire", "Ice", "Flying", "Bug"],
        "resistedBy": ["Fighting", "Ground", "Steel"],
        "immune": []
    },
    "Ghost": {
        "superEffective": ["Psychic", "Ghost"],
        "resistedBy": ["Dark"],
        "immune": ["Normal"]
    },
    "Dragon": {
        "superEffective": ["Dragon"],
        "resistedBy": ["Steel"],
        "immune": ["Fairy"]
    },
    "Dark": {
        "superEffective": ["Psychic", "Ghost"],
        "resistedBy": ["Fighting", "Dark", "Fairy"],
        "immune": []
    },
    "Steel": {
        "superEffective": ["Ice", "Rock", "Fairy"],
        "resistedBy": ["Fire", "Water", "Electric", "Steel"],
        "immune": []
    },
    "Fairy": {
        "superEffective": ["Fighting", "Dragon", "Dark"],
        "resistedBy": ["Fire", "Poison", "Steel"],
        "immune": []
    }
}

export function captureType(attacker, defender) {
    if (defender) {
        if (elements[attacker].superEffective.includes(defender)) return 'superEffective'
        else if (elements[attacker].resistedBy.includes(defender)) return 'resisted'
        else if (elements[attacker].immune.includes(defender)) return 'immune'
        else return 'regular'
    } else {
        return null
    }
}
