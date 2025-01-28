generateButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents default behavior (like form submission)
    
    const config = {
      isSaved: true,
      blockType: new Array(200).fill(0),
      disabledPlantType: [],
      appearedZombieType: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 28, 30, 32, 31, 35, 36, 37, 38, 39, 40, 43, 33],
      theMaxWave: parseInt(waveInput.value, 10),
      startSun: parseInt(document.getElementById("total-sun").value, 10),
      isScaredyDream: document.getElementById("scaredy-dream").value === "true",
      isSeedRain: document.getElementById("seed-rain").value === "true",
      isIndestructible: document.getElementById("indestructible").value === "true",
      isColumn: document.getElementById("column").value === "true",
      enableTravelPlant: document.getElementById("travel-plant").value === "true",
      enableTravelBuff: document.getElementById("travel-buff").value === "true",
      isSuperRandom: document.getElementById("super-random").value === "true",
      zombieHealth: parseInt(document.getElementById("zombie-health").value, 10),
      sceneType: parseInt(sceneInput.value, 10),
      isConvey: false,
      advBuffs: [],
      ultiBuffs: [],
      debuffs: [],
    };
  
    // Display JSON in the output
    // output.textContent = JSON.stringify(config, null, 2);
  
    // Create and download JSON file
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "CustomBlock.json";
    link.click();
  });
  