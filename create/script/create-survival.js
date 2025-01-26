// File: scripts/create-survival.js

// Fungsi untuk memuat data tanaman dari plant-data.json
async function loadPlantData() {
    const response = await fetch('plant-data.json');
    const plantData = await response.json();
    return plantData;
  }
  
  // Fungsi untuk membuat checkbox dari data tanaman
  async function generateCheckboxes() {
    const plantData = await loadPlantData();
    const container = document.getElementById('checkbox-container');
    
    for (let id in plantData) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.name = 'plant';
      input.value = id;
      label.appendChild(input);
      label.appendChild(document.createTextNode(plantData[id]));
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    }
  }
  
  // Fungsi untuk menangani submit form
  document.getElementById('survival-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const selectedPlants = [];
    const checkboxes = document.querySelectorAll('input[name="plant"]:checked');
  
    checkboxes.forEach(checkbox => {
      selectedPlants.push(checkbox.value);
    });
  
    const survivalData = {
      level: 11,
      plants: selectedPlants
    };
  
    // Simpan data ke dalam file JSON (simulasi untuk browser, tidak dapat langsung menulis file di browser)
    const blob = new Blob([JSON.stringify(survivalData)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'level11.json';
    link.click();
  });
  
  // Memuat checkbox pada halaman
  generateCheckboxes();
  