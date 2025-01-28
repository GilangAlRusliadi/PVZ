document.addEventListener("DOMContentLoaded", () => {
    // Pre-check the checkboxes
    document.getElementById("scaredy-dream").checked = true;
    document.getElementById("seed-rain").checked = true;
    document.getElementById("indestructible").checked = true;
    document.getElementById("column").checked = true;
    document.getElementById("travel-plant").checked = true;
    document.getElementById("travel-buff").checked = true;
    document.getElementById("super-random").checked = true;
  
    const waveInput = document.getElementById("max-wave");
    const waveValue = document.getElementById("wave-value");
    const sceneInput = document.getElementById("scene");
    const generateButton = document.getElementById("generate-config");
  
    // Update the displayed value when the range slider changes
    waveInput.addEventListener("input", () => {
      waveValue.textContent = `Value: ${waveInput.value}`;
    });
  
    // Generate and download JSON configuration
    generateButton.addEventListener("click", () => {
      const config = {
        isSaved: true,
        blockType: new Array(200).fill(0),
        disabledPlantType: [],
        appearedZombieType: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32, 31, 35, 36, 37, 38, 39, 40, 43, 33],
        theMaxWave: parseInt(waveInput.value, 10),
        startSun: parseInt(document.getElementById("total-sun").value, 10) || 500,
        isScaredyDream: document.getElementById("scaredy-dream").checked,
        isSeedRain: document.getElementById("seed-rain").checked,
        isIndestructible: document.getElementById("indestructible").checked,
        isColumn: document.getElementById("column").checked,
        enableTravelPlant: document.getElementById("travel-plant").checked,
        enableTravelBuff: document.getElementById("travel-buff").checked,
        isSuperRandom: document.getElementById("super-random").checked,
        zombieHealth: parseInt(document.getElementById("zombie-health").value, 10) || 0,
        sceneType: parseInt(sceneInput.value, 10), // Convert selected option to integer
        isConvey: false,
        advBuffs: [],
        ultiBuffs: [],
        debuffs: [],
      };
  
      // Create and download JSON file
      const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "CustomBlock.json";
      link.click();
    });
  });
  