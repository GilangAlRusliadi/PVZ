document.addEventListener("DOMContentLoaded", () => {
    const waveInput = document.getElementById("max-wave");
    const waveValue = document.getElementById("wave-value");
    const sceneInput = document.getElementById("scene");
    const sceneValue = document.getElementById("scene-value");
    const generateButton = document.getElementById("generate-config");
  
    // Update the displayed value when the range slider changes
    waveInput.addEventListener("input", () => {
      waveValue.textContent = `Value: ${waveInput.value}`;
    });
  
    sceneInput.addEventListener("input", () => {
      sceneValue.textContent = `Value: ${sceneInput.value}`;
    });
  
    // Generate and download JSON configuration
    generateButton.addEventListener("click", () => {
      const config = {
        isSaved: true,
        blockType: new Array(200).fill(0),
        disabledPlantType: [],
        appearedZombieType: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32, 31, 35, 36, 37, 38, 39, 40, 43, 33],
        theMaxWave: parseInt(waveInput.value, 10),
        startSun: parseInt(document.getElementById("total-sun").value, 10) || 500,  // Default to 500 if not filled
        isScaredyDream: document.getElementById("scaredy-dream").checked,
        isSeedRain: document.getElementById("seed-rain").checked,
        isIndestructible: document.getElementById("indestructible").checked,
        isColumn: document.getElementById("column").checked,
        enableTravelPlant: document.getElementById("travel-plant").checked,
        enableTravelBuff: document.getElementById("travel-buff").checked,
        isSuperRandom: document.getElementById("super-random").checked,
        zombieHealth: parseInt(document.getElementById("zombie-health").value, 10) || 0,  // Default to 0 if not filled
        sceneType: parseInt(sceneInput.value, 10),
        isConvey: false,
        advBuffs: [],
        ultiBuffs: [],
        debuffs: [],
      };
  
      // Create and download JSON file
      const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "CustomBlock.json";  // Changed file name
      link.click();
    });
  });
  