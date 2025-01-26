const plantTypes = {
    1033: "Double Sun Flower",
    1103: "Kaktus Magnet",
    1016: "Cerry Chomper",
    1026: "Mushroom Love",
    1109: "Snipper Pea",
    1055: "Torch Cerberus",
    1046: "Mushroom Rudal",
    1017: "Gatling Pedas",
    1052: "Hell Torch",
    1005: "Cherry Pea",
    1054: "Jambu Pedas",
    1104: "Star Magnet",
    249: "Star Samurai",
    1128: "Payung Kol",
    1115: "Payung Jagung",
    1131: "Payung Semangka",
    1126: "Salad Catapult",
    1039: "Tall Nut Es",
    1073: "Tall Nut Cabe",
    1013: "Godzilla",
    1112: "Pot Kol",
    1114: "Pot Jagung",
    1125: "Pot Semangka",
    1133: "Pot Pisang",
    1075: "Spike Cabe",
    1074: "Spike Es",
    1098: "Pumpkin Anti Ledak",
    1099: "Pumpkin Anti Gali",
    1088: "Pumpkin Kaktus",
  };
  
  const checkboxContainer = document.getElementById("checkbox-container");
  
  // Generate checkboxes dynamically
  Object.entries(plantTypes).forEach(([id, name]) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
  
    checkbox.type = "checkbox";
    checkbox.value = id;
  
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${name}`));
    checkboxContainer.appendChild(label);
  
    // Add a line break after each checkbox
    checkboxContainer.appendChild(document.createElement("br"));
  });
  
  // Generate JSON file
  document.getElementById("generateButton").addEventListener("click", () => {
    const selectedPlants = [];
    const checkboxes = checkboxContainer.querySelectorAll("input[type='checkbox']:checked");
  
    checkboxes.forEach((checkbox, index) => {
      selectedPlants.push({
        thePlantRow: Math.floor(index / 8), // Example: row and column logic
        thePlantColumn: index % 8,
        thePlantType: Number(checkbox.value),
        growStage: 2,
        waterLevel: 100,
        love: 0,
        nextTime: Math.floor(Date.now() / 1000),
        needTool: 2,
      });
    });
  
    const gardenData = {
      plantData: selectedPlants,
    };
  
    const blob = new Blob([JSON.stringify(gardenData, null, 4)], { type: "application/json" });
    const link = document.createElement("a");
  
    link.href = URL.createObjectURL(blob);
    link.download = "GardenData.json";
    link.click();
  });
  