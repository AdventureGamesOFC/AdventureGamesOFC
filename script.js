// Chest loot tables for different areas
const chestLootTables = {
  "Clock Town Chest": [
    "Small Key", "Health Potion", "Gold Coin", "Silver Ring", "Bombs", "Map of Clock Town"
  ],
  "Termina Field Chest": [
    "Iron Sword", "Health Potion", "Mystic Gem", "Green Tunic", "Shield", "Bombs"
  ],
  "Dungeon Chest": [
    "Master Sword", "Golden Key", "Rare Gem", "Flame Shield", "Health Potion", "Cursed Skull"
  ]
};

// Monster loot tables (with guaranteed and optional non-guaranteed loot)
const monsterLootTables = {
  Goblin: {
    guaranteed: ["Iron Sword", "Health Potion"],
    nonGuaranteed: [
      { item: "Gold Coin", chance: 0.5 },
      { item: "Silver Ring", chance: 0.3 },
      { item: "Leather Armor", chance: 0.2 }
    ],
    cursedLoot: {
      guaranteed: ["Cursed Skull", "Demonic Talisman"],
      nonGuaranteed: [
        { item: "Poisoned Gem", chance: 0.4 },
        { item: "Soul Shard", chance: 0.3 }
      ]
    }
  },
  Dragon: {
    guaranteed: ["Dragon Scale", "Fire Potion"],
    nonGuaranteed: [
      { item: "Gold Bar", chance: 0.6 },
      { item: "Flame Sword", chance: 0.4 }
    ],
    cursedLoot: {
      guaranteed: ["Cursed Dragon Tooth", "Demonic Firestone"],
      nonGuaranteed: [
        { item: "Dragon Bone", chance: 0.5 },
        { item: "Cursed Dragon Scale", chance: 0.3 }
      ]
    }
  },
  Zombie: {
    guaranteed: ["Zombie Flesh", "Rusty Sword"],
    nonGuaranteed: [
      { item: "Health Potion", chance: 0.3 },
      { item: "Old Key", chance: 0.2 },
      { item: "Torn Cloak", chance: 0.1 }
    ],
    cursedLoot: {
      guaranteed: ["Zombie King’s Crown", "Haunted Flesh"],
      nonGuaranteed: [
        { item: "Cursed Bone", chance: 0.4 },
        { item: "Zombie Arm", chance: 0.3 }
      ]
    }
  },
  Spider: {
    guaranteed: ["Spider Venom", "Small Web"],
    nonGuaranteed: [
      { item: "Poisonous Fang", chance: 0.5 },
      { item: "Silk Cloth", chance: 0.4 }
    ],
    cursedLoot: {
      guaranteed: ["Cursed Spider Fang", "Demonic Webbing"],
      nonGuaranteed: [
        { item: "Poisonous Shard", chance: 0.4 },
        { item: "Cursed Relic", chance: 0.2 }
      ]
    }
  }
};

// Generate chest loot based on the selected chest
function generateChestLoot(chestName) {
  const lootTable = chestLootTables[chestName];
  const chestLootResult = document.getElementById('chestLootResult');
  chestLootResult.innerHTML = ''; // Clear previous loot

  if (!lootTable) {
    chestLootResult.innerHTML = 'Loot table not found!';
    return;
  }

  const randomIndex = Math.floor(Math.random() * lootTable.length);
  const loot = lootTable[randomIndex];

  chestLootResult.innerHTML = `<div class="lootItem">${loot}</div>`;
}

// Generate monster loot for the selected monster (with optional cursed mode)
function generateMonsterLoot(monsterName) {
  const lootTable = monsterLootTables[monsterName];
  const monsterLootResult = document.getElementById('monsterLootResult');
  monsterLootResult.innerHTML = ''; // Clear previous loot

  if (!lootTable) {
    monsterLootResult.innerHTML = 'Loot table not found!';
    return;
  }

  // Generate guaranteed loot
  lootTable.guaranteed.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lootItem';
    div.textContent = item;
    monsterLootResult.appendChild(div);
  });

  // Generate non-guaranteed loot with chance
  lootTable.nonGuaranteed.forEach(drop => {
    if (Math.random() < drop.chance) {
      const div = document.createElement('div');
      div.className = 'lootItem';
      div.textContent = drop.item;
      monsterLootResult.appendChild(div);
    }
  });

  // If Cursed Medal Mode is checked, add cursed loot
  if (document.getElementById('cursedMedal').checked) {
    addCursedLoot(lootTable.cursedLoot);
  }
}

// Add cursed loot to the result if Cursed Medal Mode is active
function addCursedLoot(cursedLoot) {
  const monsterLootResult = document.getElementById('monsterLootResult');

  // Add guaranteed cursed items
  cursedLoot.guaranteed.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lootItem cursedItem';
    div.textContent = item;
    monsterLootResult.appendChild(div);
  });

  // Add non-guaranteed cursed loot with chance
  cursedLoot.nonGuaranteed.forEach(drop => {
    if (Math.random() < drop.chance) {
      const div = document.createElement('div');
      div.className = 'lootItem cursedItem';
      div.textContent = drop.item;
      monsterLootResult.appendChild(div);
    }
  });
}

// Toggle the cursed medal mode (updates loot display when changed)
function toggleCursedMode() {
  const selectedMonster = document.querySelector('button[onclick*="generateMonsterLoot"]').textContent;
  generateMonsterLoot(selectedMonster); // Regenerate loot with or without cursed mode
}
