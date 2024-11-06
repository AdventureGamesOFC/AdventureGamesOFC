// Loot tables data
const lootTables = {
  ClockTown: {
    guaranteed: ["Healing Potion", "Silver Shield"],
    nonGuaranteed: [
      { item: "Bomb", chance: 0.5 },
      { item: "Arrow", chance: 0.3 },
      { item: "Magic Ring", chance: 0.2 }
    ]
  },
  TerminaField: {
    guaranteed: ["Healing Herb", "Green Rupee"],
    nonGuaranteed: [
      { item: "Bomb", chance: 0.4 },
      { item: "Bombchu", chance: 0.6 },
      { item: "Fairy", chance: 0.1 }
    ]
  },
  MonsterLoot: {
    guaranteed: ["Monster Claw", "Beast Bone"],
    nonGuaranteed: [
      { item: "Health Potion", chance: 0.3 },
      { item: "Stamina Elixir", chance: 0.2 },
      { item: "Treasure Chest Key", chance: 0.1 }
    ]
  }
};

// Function to generate loot based on the selected loot table
function generateLoot(tableName) {
  const lootTable = lootTables[tableName];
  const lootResult = document.getElementById('lootResult');
  lootResult.innerHTML = ''; // Clear previous loot

  if (!lootTable) {
    lootResult.innerHTML = 'Loot table not found!';
    return;
  }

  // Generate guaranteed loot
  lootTable.guaranteed.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lootItem';
    div.textContent = item;
    lootResult.appendChild(div);
  });

  // Generate non-guaranteed loot with chance
  lootTable.nonGuaranteed.forEach(drop => {
    if (Math.random() < drop.chance) {
      const div = document.createElement('div');
      div.className = 'lootItem';
      div.textContent = drop.item;
      lootResult.appendChild(div);
    }
  });

  // Apply cursed medal mode effect if checked
  if (document.getElementById('cursedMedal').checked) {
    addCursedModeLoot();
  }
}

// Cursed Medal Mode - modifies loot drops
function addCursedModeLoot() {
  const lootResult = document.getElementById('lootResult');
  const cursedLoot = ["Cursed Skull", "Demonic Talisman", "Evil Relic"];
  cursedLoot.forEach(item => {
    const div = document.createElement('div');
    div.className = 'lootItem cursedItem';
    div.textContent = item;
    lootResult.appendChild(div);
  });
}

// Toggle Cursed Medal Mode (adds cursed loot)
function toggleCursedMode() {
  const currentLootTable = document.querySelector('button[onclick*="generateLoot"]').textContent.split(' ')[0];
  generateLoot(currentLootTable); // Re-generate loot with or without cursed mode
}
