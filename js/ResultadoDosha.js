
// Obtener los valores de localStorage
//const kaphaTotal = 8;
//const vataTotal = 9;
//const pittaTotal = 30;
const kaphaTotal = parseInt(localStorage.getItem('kaphaTotal'));
const vataTotal = parseInt(localStorage.getItem('vataTotal'));
const pittaTotal = parseInt(localStorage.getItem('PittaTotal'));

const activo = {
  display: "block"
};

const inactivo = {
  display: "none"
};



  // Calcular el total
  let total = vataTotal + pittaTotal + kaphaTotal;

  // Calcular porcentajes (evitar división por cero)
  let vataPorcentaje = total ? ((vataTotal / total) * 100).toFixed(1) : 0;
  let pittaPorcentaje = total ? ((pittaTotal / total) * 100).toFixed(1) : 0;
  let kaphaPorcentaje = total ? ((kaphaTotal / total) * 100).toFixed(1) : 0;

  // Mostrar resultados numéricos en la página
  document.getElementById("kaphaResultPorc").textContent = `(${kaphaPorcentaje}%)`;
  document.getElementById("vataResultPorc").textContent = `(${vataPorcentaje}%)`;
  document.getElementById("pittaResultPorc").textContent = `(${pittaPorcentaje}%)`;



let maxValor = Math.max(vataTotal, pittaTotal, kaphaTotal);

if (vataTotal === maxValor) {
    document.getElementById("btn-vata").style.display = "inline-block";
}
if (pittaTotal === maxValor) {
    document.getElementById("btn-pitta").style.display = "inline-block";
}
if (kaphaTotal === maxValor) {
    document.getElementById("btn-kapha").style.display = "inline-block";
}


if(kaphaTotal == 0 && vataTotal == 0 && pittaTotal == 0){window.location.href = 'testdoshas.html';}

// Función para actualizar el título y la descripción del resultado
function actualizarResultado(titulo, descripcion) {
  document.getElementById('Title-text').textContent = titulo;
  document.getElementById('Result-text').innerHTML = descripcion;
}

let imgName = "Vata"
// Objeto que asocia valores con imágenes
const imagenes = {
    "Vata": "Vata.jpg",
    "Pitta": "Pitta.jpg",
    "Kapha": "Kapha.jpg",
    "Vata-Kapha": "Vata-Kapha.jpg",
    "Pitta-Kapha": "Pitta-Kapha.jpg",
    "Vata-Pitta": "Vata-Pitta.jpg",
    "TriDosha": "TRIDOSHA.jpg"
};

// Lógica de comparación y asignación de resultados
if (kaphaTotal === vataTotal && vataTotal === pittaTotal) {
  actualizarResultado(
      "Tu naturaleza es balanceada: TRIDOSHA",
      "<p>Tu resultado es Tridosha, tienes un equilibrio casi perfecto entre Vata, Pitta y Kapha. Eres una persona armoniosa, con una gran capacidad de adaptación y una mente equilibrada. Sin embargo, es importante mantener este equilibrio a través de una dieta balanceada y una rutina estable. La adaptación y el mantenimiento del equilibrio son tus mayores desafíos.</p> <p>Para mantener tu equilibrio natural, es recomendable seguir una dieta variada y practicar actividades que promuevan la salud física y mental. Actividades como el yoga, la meditación y el contacto con la naturaleza son ideales. ¡Descubre cómo mantener tu equilibrio natural y vivir una vida plena y saludable!</p>"
  );
  imgName = "TriDosha";
} else {
  let mayorDoshas = [];
  let mayorValor = Math.max(kaphaTotal, vataTotal, pittaTotal);

  if (vataTotal === mayorValor) mayorDoshas.push("Vata");
  if (pittaTotal === mayorValor) mayorDoshas.push("Pitta");
  if (kaphaTotal === mayorValor) mayorDoshas.push("Kapha");

  if (mayorDoshas.length === 2) {
      // Caso BIDOSHA
        let combinacion = mayorDoshas.join("-");
        imgName = mayorDoshas.join("-");
        let mensajes = {
            "Vata-Kapha": {
                titulo: "Tu naturaleza es una mezcla de...",
                descripcion: "<p>Tu resultado es Vata-Kapha, <strong>combinas la creatividad y movilidad de Vata con la estabilidad y calma de Kapha.</strong> Eres una persona única, con una gran imaginación y una resistencia física notable. Sin embargo, puedes ser propenso a la ansiedad, la lentitud y la retención de líquidos. <strong>El frío y la inercia son tus mayores desafíos.</strong></p> <p>Para mantener el equilibrio, es importante seguir una dieta nutritiva y cálida, y evitar el exceso de frío. Actividades como el yoga, el ejercicio ligero y la socialización son ideales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía creativa y estable!</p>"
            },
            "Pitta-Kapha": {
                titulo: "Tu naturaleza es una mezcla de...",
                descripcion: "<p>Tu resultado es Pitta-Kapha,<strong> combinas la intensidad y enfoque de Pitta con la estabilidad y resistencia de Kapha</strong>. Eres una persona fuerte, con una gran capacidad de trabajo y una mente clara. Sin embargo, puedes ser propenso a la inflamación, la retención de líquidos y la complacencia. <strong>El exceso de calor y la inercia son tus mayores desafíos.</strong></p> <p>Para mantener el equilibrio, es importante mantener una dieta fresca y ligera, y evitar el exceso de calor. Actividades como el ejercicio moderado, la natación y la exploración de nuevos retos son ideales. <strong>¡Descubre cómo equilibrar tus doshas y mantener tu energía en armonía!</strong></p>"
            },
            "Vata-Pitta": {
                titulo: "Tu naturaleza es una mezcla de...",
                descripcion: "<p>Tu resultado es Vata-Pitta, <strong>combinas la creatividad y movilidad de Vata con la intensidad y enfoque de Pitta.</strong> Eres una persona dinámica, con una mente rápida y una gran capacidad para liderar. Sin embargo, puedes ser propenso a la ansiedad, la irritabilidad y el agotamiento. El estrés y el exceso de actividad son tus mayores desafíos.</p> <p>Para mantener el equilibrio, es importante seguir una dieta balanceada y evitar el exceso de estrés. Actividades como la meditación, el yoga y la planificación de tiempos de descanso son esenciales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía única!</p>"
            }
      };
      actualizarResultado(mensajes[combinacion].titulo, mensajes[combinacion].descripcion);
      
    } else {
      // Caso de un dosha predominante
      let mensajesPredominantes = {
          "Kapha": {
              titulo: "Tu doshas predominante es...",
              descripcion: "<p>Tu energía es estable, calmada y nutritiva. Las personas Kapha suelen tener una <strong>constitución robusta, piel suave y una gran resistencia física.</strong> Son pacientes, compasivas y tienen una gran capacidad para cuidar de los demás. Sin embargo, cuando están desequilibrados, pueden experimentar lentitud, aumento de peso y retención de líquidos. <strong>La inercia y la complacencia son sus mayores desafíos.</strong></p> <p>Para mantener el equilibrio, es recomendable <strong>mantenerse activo y consumir alimentos ligeros y estimulantes.</strong> Actividades como el ejercicio vigoroso, la danza y la exploración de nuevas experiencias son ideales. <strong>¡Descubre cómo activar tu energía Kapha y mantenerte en movimiento!</strong></p>"
          },
          "Vata": {
              titulo: "Tu doshas predominante es...",
              descripcion: "<p>Tu energía es ligera, creativa y llena de movimiento. Las personas con predominancia Vata suelen ser <strong>delgadas, con una mente rápida y una gran imaginación.</strong> Son innovadoras y les encanta explorar nuevas ideas. Sin embargo, cuando están desequilibrados, pueden experimentar ansiedad, sequedad en la piel y digestiones irregulares. <strong>La inestabilidad y el estrés son sus mayores desafíos.</strong></p> <p>Para mantener el equilibrio, es recomendable seguir <strong>rutinas estables y consumir alimentos cálidos y nutritivos.</strong> Evitar el exceso de frío y el estrés es clave. Actividades como el yoga suave, la meditación y masajes con aceites tibios pueden ser muy beneficiosas. <strong>¡Descubre cómo equilibrar tu Vata y aprovechar al máximo tu energía creativa!</strong></p>"
          },
          "Pitta": {
              titulo: "Tu doshas predominante es...",
              descripcion: "<p>Tu naturaleza es intensa, enfocada y apasionada. <strong>Las personas Pitta suelen tener una constitución media, piel sensible al sol y una digestión fuerte.</strong> Son líderes natos, con una mente clara y una gran capacidad para resolver problemas. Sin embargo, cuando están desequilibrados, pueden ser propensos a la irritabilidad, la inflamación y el sobrecalentamiento. <strong>El exceso de calor y la competitividad son sus mayores desafíos.</strong></p> <p>Para mantener el equilibrio, es importante <strong>evitar el exceso de calor</strong> y consumir alimentos refrescantes. Actividades como nadar, caminar en la naturaleza y practicar la paciencia son ideales. <strong>¡Aprende a canalizar tu energía Pitta de manera positiva y alcanza tu máximo potencial!</strong></p>"
          }
      };

      let dosha = mayorDoshas[0];
      imgName = mayorDoshas[0];
      actualizarResultado(mensajesPredominantes[dosha].titulo, mensajesPredominantes[dosha].descripcion);
  }
}

let imgElement = document.getElementById("imagenDinamica");

// Cambia la imagen si el valor existe en el objeto
if (imagenes[imgName]) {
    imgElement.src = "img/" + imagenes[imgName];
} else {
    imgElement.src = "imagen-default.jpg"; 
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
            backgroundColor: ['#4CAF50', '#2196F3','#FF9800'], // Colores de las secciones
            borderColor: ['#388E3C', '#1976D2','#F57C00'], // Colores de los bordes
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                      let index = tooltipItem.dataIndex;
                      let porcentajes = [kaphaPorcentaje, vataPorcentaje, pittaPorcentaje];
                      return `${tooltipItem.label}: ${tooltipItem.raw} (${porcentajes[index]}%)`;
                    }
                }
            }
        }
    }
});


localStorage.clear();