document.addEventListener("DOMContentLoaded", () => {
    const waveInput = document.getElementById("wave");
    const waveValue = document.getElementById("wave-value");
    const sceneInput = document.getElementById("scene");
    const sceneValue = document.getElementById("scene-value");
    const generateButton = document.getElementById("generate-config");
    const output = document.getElementById("output");
  
    // Update the displayed value when the range slider changes
    waveInput.addEventListener("input", () => {
      waveValue.textContent = waveInput.value;
    });
  
    sceneInput.addEventListener("input", () => {
      sceneValue.textContent = sceneInput.value;
    });
  
    // Generate JSON configuration
    generateButton.addEventListener("click", () => {
      const config = {
        isSaved: true,
        blockType: new Array(200).fill(0),
        disabledPlantType: [],
        appearedZombieType: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32, 31, 35, 36, 37, 38, 39, 40, 43, 33],
        theMaxWave: 50,
        startSun: parseInt(document.getElementById("total-sun").value, 10),
        isScaredyDream: false,
        isSeedRain: false,
        isIndestructible: true,
        isColumn: true,
        enableTravelPlant: true,
        enableTravelBuff: true,
        isSuperRandom: true,
        zombieHealth: parseInt(document.getElementById("zombie-health").value, 10),
        sceneType: parseInt(sceneInput.value, 10),
        isConvey: false,
        advBuffs: [],
        ultiBuffs: [],
        debuffs: [],
      };
  
      // Display JSON in the output
      output.textContent = JSON.stringify(config, null, 2);
    });
  });
  