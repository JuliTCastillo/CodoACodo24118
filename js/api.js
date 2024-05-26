function GetProductos() {
    const apiUrl = 'https://api.sampleapis.com/coffee/hot';
    
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('productosTableBody');
        tableBody.innerHTML = '';  
        
        data.forEach((item, index) => {
          const row = document.createElement('tr');
          
          const imagenCell = document.createElement('td');
          const imagen = document.createElement('img');
          imagen.src =  '../imagen/photo-1494314671902-399b18174975.jpg';
          imagen.style.width = '50px';
          imagenCell.appendChild(imagen);
          row.appendChild(imagenCell);

      
    

          const idCell = document.createElement('td');
          idCell.textContent = item.id;
          row.appendChild(idCell);
          
          const nombreCell = document.createElement('td');
          nombreCell.textContent = item.title;
          row.appendChild(nombreCell);
          
          const descriptionCell = document.createElement('td');
          descriptionCell.textContent = item.description;
          row.appendChild(descriptionCell);
          

          const precios = [1500, 2000,2500,3000,700,2500,1500,3000,2500,1000];
          const precioCell = document.createElement('td');
          precioCell.textContent = precios[index] || 'N/A';  
          row.appendChild(precioCell);
          
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error al llamar a la API:', error);
      });
  }
  