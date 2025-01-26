document.getElementById('edit-data-btn').addEventListener('click', () => {
    const fileInput = document.getElementById('upload-json');
    const file = fileInput.files[0];
    
    if (!file) {
      alert('Please upload a JSON file first!');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = () => {
      const data = JSON.parse(reader.result);
      const updatedData = JSON.stringify(
        JSON.parse(reader.result, (key, value) => value === false ? true : value),
        null,
        2
      );
  
      const blob = new Blob([updatedData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
  
      const downloadLink = document.getElementById('download-link');
      downloadLink.href = url;
      downloadLink.download = 'updated-data.json';
      downloadLink.style.display = 'block';
      downloadLink.textContent = 'Download Updated JSON';
    };
    reader.readAsText(file);
  });
  