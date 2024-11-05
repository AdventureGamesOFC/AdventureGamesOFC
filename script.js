const playersStats = {
    "CaseOh Jr.": { Health: 3, "Max Health": 8, Morale: 20, Speed: 7, "Dodge Chance": 7, Stress: 2, Intelligence: 4, Rizz: 0, Aim: 1, Strength: '11 (8 dmg)' },
    "Atomic Child": { Health: 6, "Max Health": 7, Morale: 20, Speed: 9, "Dodge Chance": 5, Stress: 0, Intelligence: 13, Rizz: 1, Aim: 3, Strength: '3 (3 dmg)' },
    "Anime Kid": { Health: 6, "Max Health": 6, Morale: 20, Speed: 13, "Dodge Chance": 3, Stress: 0, Intelligence: 2, Rizz: 7, Aim: 13, Strength: '7 (3 dmg)' },
    "Nerd": { Health: 8, "Max Health": 8, Morale: 20, Speed: 15, "Dodge Chance": 3, Stress: 0, Intelligence: 21, Rizz: 5, Aim: 5, Strength: '4 (3 dmg)' }
};

document.getElementById('updateButton').addEventListener('click', () => {
    const player = document.getElementById('playerSelect').value;
    const stat = document.getElementById('statSelect').value;
    const newValue = document.getElementById('newValue').value;

    if (newValue === '') {
        alert('Please enter a new value.');
        return;
    }

    playersStats[player][stat] = newValue;

    document.getElementById('output').innerText = `${player}'s ${stat} has been updated to ${newValue}.`;
});
