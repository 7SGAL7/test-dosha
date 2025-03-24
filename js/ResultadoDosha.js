
// Obtener los valores de localStorage
const kaphaTotal = parseInt(localStorage.getItem('kaphaTotal'));
const vataTotal = parseInt(localStorage.getItem('vataTotal'));
const pittaTotal = parseInt(localStorage.getItem('PittaTotal'));

const activo = {
  display: "block"
};

const inactivo = {
  display: "none"
};

let fuego = document.getElementById('fuego');
let agua = document.getElementById('agua');
let tierra = document.getElementById('tierra');
let ether = document.getElementById('ether');
let viento = document.getElementById('viento');

let fuegooff = document.getElementById('fuegooff');
let aguaoff = document.getElementById('aguaoff');
let tierraoff = document.getElementById('tierraoff');
let etheroff = document.getElementById('etheroff');
let vientooff = document.getElementById('vientooff');

    // Calcular el total
    let total = vataTotal + pittaTotal + kaphaTotal;

    // Calcular porcentajes (evitar división por cero)
    let vataPorcentaje = total ? ((vata / total) * 100).toFixed(1) : 0;
    let pittaPorcentaje = total ? ((pitta / total) * 100).toFixed(1) : 0;
    let kaphaPorcentaje = total ? ((kapha / total) * 100).toFixed(1) : 0;

    // Mostrar resultados numéricos en la página
    document.getElementById("kaphaResult").textContent = `${kapha} (${kaphaPorcentaje}%)`;
    document.getElementById("vataResult").textContent = `${vata} (${vataPorcentaje}%)`;
    document.getElementById("pittaResult").textContent = `${pitta} (${pittaPorcentaje}%)`;



let maxValor = Math.max(vataTotal, pittaTotal, kaphaTotal);

if (vata === maxValor) {
    doshasEmpatados.push("Vata");
    document.getElementById("btn-vata").style.display = "inline-block";
    document.getElementById("viento").style.display = "inline-block";
    document.getElementById("vientooff").style.display = "none";
}
if (pitta === maxValor) {
    doshasEmpatados.push("Pitta");
    document.getElementById("btn-pitta").style.display = "inline-block";
    document.getElementById("fuego").style.display = "inline-block";
    document.getElementById("fuegooff").style.display = "none";
}
if (kapha === maxValor) {
    doshasEmpatados.push("Kapha");
    document.getElementById("btn-kapha").style.display = "inline-block";
    document.getElementById("agua").style.display = "inline-block";
    document.getElementById("aguaoff").style.display = "none";
}


if(kaphaTotal == 0 && vataTotal == 0 && pittaTotal == 0){window.location.href = 'testdoshas.html';}

// Comparar los valores y determinar el mayor o si hay empate
if (kaphaTotal === vataTotal && vataTotal === pittaTotal) {
    document.getElementById('Title-text').textContent = "Tienes equilibrio entre los doshas TRIDOSHA (EQUILIBRADO)";
    document.getElementById('Result-text').textContent = "Si tu resultado es Tridosha, tienes un equilibrio casi perfecto entre Vata, Pitta y Kapha. Eres una persona armoniosa, con una gran capacidad de adaptación y una mente equilibrada. Sin embargo, es importante mantener este equilibrio a través de una dieta balanceada y una rutina estable. La adaptación y el mantenimiento del equilibrio son tus mayores desafíos. Para mantener tu equilibrio natural, es recomendable seguir una dieta variada y practicar actividades que promuevan la salud física y mental. Actividades como el yoga, la meditación y el contacto con la naturaleza son ideales. ¡Descubre cómo mantener tu equilibrio natural y vivir una vida plena y saludable!";    

    tierra.style.display = activo.display;
    agua.style.display = activo.display;
    fuego.style.display = activo.display;
    viento.style.display = activo.display;
    ether.style.display = activo.display;
    tierraoff.style.display = inactivo.display;
    aguaoff.style.display = inactivo.display;
    fuegooff.style.display = inactivo.display;
    vientooff.style.display = inactivo.display;
    etheroff.style.display = inactivo.display;


} else if (kaphaTotal >= vataTotal && kaphaTotal >= pittaTotal) {
  if (kaphaTotal === vataTotal || kaphaTotal === pittaTotal) {
    if(kaphaTotal === vataTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Kapha (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Vata-Kapha, combinas la creatividad y movilidad de Vata con la estabilidad y calma de Kapha. Eres una persona única, con una gran imaginación y una resistencia física notable. Sin embargo, puedes ser propenso a la ansiedad, la lentitud y la retención de líquidos. El frío y la inercia son tus mayores desafíos. Para mantener el equilibrio, es importante seguir una dieta nutritiva y cálida, y evitar el exceso de frío. Actividades como el yoga, el ejercicio ligero y la socialización son ideales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía creativa y estable!";

        //Kapha
        tierra.style.display = activo.display;
        agua.style.display = activo.display;
        tierraoff.style.display = inactivo.display;
        aguaoff.style.display = inactivo.display;

        //Vata
        agua.style.display = activo.display;
        fuego.style.display = activo.display;
        aguaoff.style.display = inactivo.display;
        fuegooff.style.display = inactivo.display;
    }else if(kaphaTotal === pittaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Pitta-Kapha (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Pitta-Kapha, combinas la intensidad y enfoque de Pitta con la estabilidad y resistencia de Kapha. Eres una persona fuerte, con una gran capacidad de trabajo y una mente clara. Sin embargo, puedes ser propenso a la inflamación, la retención de líquidos y la complacencia. El exceso de calor y la inercia son tus mayores desafíos. Para mantener el equilibrio, es importante mantener una dieta fresca y ligera, y evitar el exceso de calor. Actividades como el ejercicio moderado, la natación y la exploración de nuevos retos son ideales. ¡Descubre cómo equilibrar tus doshas y mantener tu energía en armonía!";
        //Kapha
        tierra.style.display = activo.display;
        agua.style.display = activo.display;
        tierraoff.style.display = inactivo.display;
        aguaoff.style.display = inactivo.display;

        //Pitta
        viento.style.display = activo.display;
        ether.style.display = activo.display;
        vientooff.style.display = inactivo.display;
        etheroff.style.display = inactivo.display;
    }
  } else {
    document.getElementById('Title-text').textContent = "Kapha predominante";
    document.getElementById('Result-text').textContent = "Si tu resultado es Kapha predominante, tu energía es estable, calmada y nutritiva. Las personas Kapha suelen tener una constitución robusta, piel suave y una gran resistencia física. Son pacientes, compasivas y tienen una gran capacidad para cuidar de los demás. Sin embargo, cuando están desequilibrados, pueden experimentar lentitud, aumento de peso y retención de líquidos. La inercia y la complacencia son sus mayores desafíos. Para mantener el equilibrio, es recomendable mantenerse activo y consumir alimentos ligeros y estimulantes. Actividades como el ejercicio vigoroso, la danza y la exploración de nuevas experiencias son ideales. ¡Descubre cómo activar tu energía Kapha y mantenerte en movimiento!";   
    tierra.style.display = activo.display;
    agua.style.display = activo.display;
    tierraoff.style.display = inactivo.display;
    aguaoff.style.display = inactivo.display;
  }
} else if (vataTotal >= kaphaTotal && vataTotal >= pittaTotal) {
  if (vataTotal === kaphaTotal || vataTotal === pittaTotal) {
    if(vataTotal === kaphaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Kapha (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Vata-Kapha, combinas la creatividad y movilidad de Vata con la estabilidad y calma de Kapha. Eres una persona única, con una gran imaginación y una resistencia física notable. Sin embargo, puedes ser propenso a la ansiedad, la lentitud y la retención de líquidos. El frío y la inercia son tus mayores desafíos. Para mantener el equilibrio, es importante seguir una dieta nutritiva y cálida, y evitar el exceso de frío. Actividades como el yoga, el ejercicio ligero y la socialización son ideales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía creativa y estable!";
        //Vata
        agua.style.display = activo.display;
        fuego.style.display = activo.display;
        aguaoff.style.display = inactivo.display;
        fuegooff.style.display = inactivo.display;
        //Kapha
        tierra.style.display = activo.display;
        agua.style.display = activo.display;
        tierraoff.style.display = inactivo.display;
        aguaoff.style.display = inactivo.display;
    }else if(vataTotal === pittaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Pitta (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Vata-Pitta, combinas la creatividad y movilidad de Vata con la intensidad y enfoque de Pitta. Eres una persona dinámica, con una mente rápida y una gran capacidad para liderar. Sin embargo, puedes ser propenso a la ansiedad, la irritabilidad y el agotamiento. El estrés y el exceso de actividad son tus mayores desafíos. Para mantener el equilibrio, es importante seguir una dieta balanceada y evitar el exceso de estrés. Actividades como la meditación, el yoga y la planificación de tiempos de descanso son esenciales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía única!";
        //Vata
        agua.style.display = activo.display;
        fuego.style.display = activo.display;
        aguaoff.style.display = inactivo.display;
        fuegooff.style.display = inactivo.display;
        //Pitta
        viento.style.display = activo.display;
        ether.style.display = activo.display;
        vientooff.style.display = inactivo.display;
        etheroff.style.display = inactivo.display;
    }
  } else {
    document.getElementById('Title-text').textContent = "Vata predominante";
    document.getElementById('Result-text').textContent = "Si tu resultado es Vata predominante, tu energía es ligera, creativa y llena de movimiento. Las personas con predominancia Vata suelen ser delgadas, con una mente rápida y una gran imaginación. Son innovadoras y les encanta explorar nuevas ideas. Sin embargo, cuando están desequilibrados, pueden experimentar ansiedad, sequedad en la piel y digestiones irregulares. La inestabilidad y el estrés son sus mayores desafíos. Para mantener el equilibrio, es recomendable seguir rutinas estables y consumir alimentos cálidos y nutritivos. Evitar el exceso de frío y el estrés es clave. Actividades como el yoga suave, la meditación y masajes con aceites tibios pueden ser muy beneficiosas. ¡Descubre cómo equilibrar tu Vata y aprovechar al máximo tu energía creativa!";
    //Vata
    agua.style.display = activo.display;
    fuego.style.display = activo.display;
    aguaoff.style.display = inactivo.display;
    fuegooff.style.display = inactivo.display;
  }
} else if (pittaTotal >= kaphaTotal && pittaTotal >= vataTotal) {
  if (pittaTotal === kaphaTotal || pittaTotal === vataTotal) {

    if(pittaTotal === kaphaTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Pitta-Kapha (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Pitta-Kapha, combinas la intensidad y enfoque de Pitta con la estabilidad y resistencia de Kapha. Eres una persona fuerte, con una gran capacidad de trabajo y una mente clara. Sin embargo, puedes ser propenso a la inflamación, la retención de líquidos y la complacencia. El exceso de calor y la inercia son tus mayores desafíos. Para mantener el equilibrio, es importante mantener una dieta fresca y ligera, y evitar el exceso de calor. Actividades como el ejercicio moderado, la natación y la exploración de nuevos retos son ideales. ¡Descubre cómo equilibrar tus doshas y mantener tu energía en armonía!"; 
        //Kapha
        tierra.style.display = activo.display;
        agua.style.display = activo.display;
        tierraoff.style.display = inactivo.display;
        aguaoff.style.display = inactivo.display;
        //Pitta
        viento.style.display = activo.display;
        ether.style.display = activo.display;
        vientooff.style.display = inactivo.display;
        etheroff.style.display = inactivo.display;
    }else if(pittaTotal === vataTotal){
        document.getElementById('Title-text').textContent = "Tienes una constitución dual Vata-Pitta (BIDOSHA)";
        document.getElementById('Result-text').textContent = "Si tu resultado es Vata-Pitta, combinas la creatividad y movilidad de Vata con la intensidad y enfoque de Pitta. Eres una persona dinámica, con una mente rápida y una gran capacidad para liderar. Sin embargo, puedes ser propenso a la ansiedad, la irritabilidad y el agotamiento. El estrés y el exceso de actividad son tus mayores desafíos. Para mantener el equilibrio, es importante seguir una dieta balanceada y evitar el exceso de estrés. Actividades como la meditación, el yoga y la planificación de tiempos de descanso son esenciales. ¡Aprende a equilibrar tus doshas y aprovechar tu energía única!"; 
        //Vata
        agua.style.display = activo.display;
        fuego.style.display = activo.display;
        aguaoff.style.display = inactivo.display;
        fuegooff.style.display = inactivo.display;
        //Pitta
        viento.style.display = activo.display;
        ether.style.display = activo.display;
        vientooff.style.display = inactivo.display;
        etheroff.style.display = inactivo.display;
    }
  } else {
    document.getElementById('Title-text').textContent = "Pitta predominante";
    document.getElementById('Result-text').textContent = "Si tu resultado es Pitta predominante, tu naturaleza es intensa, enfocada y apasionada. Las personas Pitta suelen tener una constitución media, piel sensible al sol y una digestión fuerte. Son líderes natos, con una mente clara y una gran capacidad para resolver problemas. Sin embargo, cuando están desequilibrados, pueden ser propensos a la irritabilidad, la inflamación y el sobrecalentamiento. El exceso de calor y la competitividad son sus mayores desafíos. Para mantener el equilibrio, es importante evitar el exceso de calor y consumir alimentos refrescantes. Actividades como nadar, caminar en la naturaleza y practicar la paciencia son ideales. ¡Aprende a canalizar tu energía Pitta de manera positiva y alcanza tu máximo potencial!";
    //Pitta
        viento.style.display = activo.display;
        ether.style.display = activo.display;
        vientooff.style.display = inactivo.display;
        etheroff.style.display = inactivo.display;
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