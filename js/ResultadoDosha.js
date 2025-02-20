
// Obtener los valores de localStorage
const kaphaTotal = parseInt(localStorage.getItem('kaphaTotal'));
const vataTotal = parseInt(localStorage.getItem('vataTotal'));
const pittaTotal = parseInt(localStorage.getItem('PittaTotal'));

if(kaphaTotal == 0 && vataTotal == 0 && pittaTotal == 0){window.location.href = 'testdoshas.html';}

// Comparar los valores y determinar el mayor o si hay empate
if (kaphaTotal === vataTotal && vataTotal === pittaTotal) {
    document.getElementById('Title-text').textContent = "Tienes equilibrio entre los tres doshas Vata-Pitta-Kapha";
    document.getElementById('Result-text').textContent = "Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión.\n Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad.\n Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación.";    
  console.log("Todos los valores son iguales.");
} else if (kaphaTotal >= vataTotal && kaphaTotal >= pittaTotal) {
  if (kaphaTotal === vataTotal || kaphaTotal === pittaTotal) {
    if(kaphaTotal === vataTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Kapha-Vata";
        document.getElementById('Result-text').textContent = "Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión.\n Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad.";
    }else if(kaphaTotal === pittaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Kapha-Pitta";
        document.getElementById('Result-text').textContent = "Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión.\n Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación.";
    }
  } else {
    document.getElementById('Title-text').textContent = "Kapha predominante";
    document.getElementById('Result-text').textContent = "Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión.";    
    console.log("Kapha es el mayor.");
  }
} else if (vataTotal >= kaphaTotal && vataTotal >= pittaTotal) {
  if (vataTotal === kaphaTotal || vataTotal === pittaTotal) {
    if(vataTotal === kaphaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Kapha";
        document.getElementById('Result-text').textContent = "Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad.\n Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión.";
    }else if(vataTotal === pittaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Pitta";
        document.getElementById('Result-text').textContent = "Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad.\n Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación.";
    }
    console.log("Vata es el mayor, con empate con otro.");
  } else {
    document.getElementById('Title-text').textContent = "Vata predominante";
    document.getElementById('Result-text').textContent = "Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad.";
    console.log("Vata es el mayor.");
  }
} else if (pittaTotal >= kaphaTotal && pittaTotal >= vataTotal) {
  if (pittaTotal === kaphaTotal || pittaTotal === vataTotal) {

    if(pittaTotal === kaphaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Pitta-Kapha";
        document.getElementById('Result-text').textContent = "Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación. \n Eres calmado, afectuoso y estable, pero puedes ser propenso a la lentitud, el aumento de peso y la congestión."; 
    }else if(pittaTotal === vataTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Pitta-Vata";
        document.getElementById('Result-text').textContent = "Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación. \n Eres creativo, enérgico y adaptable, pero puedes ser propenso a la ansiedad, la irregularidad y la sequedad."; 
    }
    console.log("Pitta es el mayor, con empate con otro.");
  } else {
    document.getElementById('Title-text').textContent = "Pitta predominante";
    document.getElementById('Result-text').textContent = "Eres decidido, enfocado y apasionado, pero puedes ser propenso a la irritabilidad, la impaciencia y la inflamación.";
    console.log("Pitta es el mayor.");
  }
}

// Mostrar los resultados en el HTML
document.getElementById('kaphaResult').textContent = kaphaTotal || 'No se encontraron resultados';
document.getElementById('vataResult').textContent = vataTotal || 'No se encontraron resultados';
document.getElementById('pittaResult').textContent = pittaTotal || 'No se encontraron resultados';

// Configuración del gráfico pie
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Kapha', 'Vata', 'Pitta'], // Etiquetas para el gráfico
        datasets: [{
            label: 'Distribución de Resultados',
            data: [kaphaTotal || 0, vataTotal || 0, pittaTotal || 0], // Datos de los resultados
            backgroundColor: ['#4CAF50', '#FF9800', '#2196F3'], // Colores de las secciones
            borderColor: ['#388E3C', '#F57C00', '#1976D2'], // Colores de los bordes
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'left',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ": " + tooltipItem.raw;
                    }
                }
            }
        }
    }
});


localStorage.clear();