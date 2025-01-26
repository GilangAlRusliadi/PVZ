// File: scripts/create-garden.js

fetch('../plants.json')
  .then(response => response.json())
  .then(plantGroups => {
    const container = document.getElementById('checkbox-container'); // Menggunakan ID baru

    for (const group in plantGroups) {
      const groupDiv = document.createElement('div');
      groupDiv.classList.add('group');

      const groupTitle = document.createElement('h3');
      groupTitle.textContent = group;
      groupDiv.appendChild(groupTitle);

      const plantData = plantGroups[group];
      
      for (let id in plantData) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'plant';
        input.value = id;
        label.appendChild(input);
        label.appendChild(document.createTextNode(plantData[id]));
        groupDiv.appendChild(label);
      }

      container.appendChild(groupDiv);
    }

    document.getElementById('garden-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const selectedPlants = [];
      const checkboxes = document.querySelectorAll('input[name="plant"]:checked');

      checkboxes.forEach(checkbox => {
        selectedPlants.push(checkbox.value);
      });

      const gardenData = { plants: selectedPlants };

      const blob = new Blob([JSON.stringify(gardenData)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'GardenData.json';
      link.click();
    });
  })
  .catch(error => console.error('Error loading plants data:', error));
