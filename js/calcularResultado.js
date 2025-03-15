    
function resultado() {
    function obtenerSeleccionado(nombreGrupo) {
        let valor = localStorage.getItem(nombreGrupo);
        if (valor !== null) {
            return parseInt(valor); // Devuelve el valor guardado
        } else {
            return 0; // Si no hay selección, devuelve 0 (o puedes devolver `null`, según lo que prefieras)
        }
    }
    
    // Vata
    var vataTotal = 0;
    vataTotal += obtenerSeleccionado('vataT1'); // Pregunta 1
    vataTotal += obtenerSeleccionado('vataT2'); // Pregunta 2
    vataTotal += obtenerSeleccionado('vataT3'); // Pregunta 3
    vataTotal += obtenerSeleccionado('vataT4'); // Pregunta 4
    vataTotal += obtenerSeleccionado('vataT5'); // Pregunta 5
    vataTotal += obtenerSeleccionado('vataT6'); // Pregunta 6
    vataTotal += obtenerSeleccionado('vataT7'); // Pregunta 7
    vataTotal += obtenerSeleccionado('vataT8'); // Pregunta 8
    vataTotal += obtenerSeleccionado('vataT9'); // Pregunta 9
    vataTotal += obtenerSeleccionado('vataT10'); // Pregunta 10
    vataTotal += obtenerSeleccionado('vataT11'); // Pregunta 11
    vataTotal += obtenerSeleccionado('vataT12'); // Pregunta 12
    vataTotal += obtenerSeleccionado('vataT13'); // Pregunta 13
    vataTotal += obtenerSeleccionado('vataT14'); // Pregunta 14
    vataTotal += obtenerSeleccionado('vataT15'); // Pregunta 15
    vataTotal += obtenerSeleccionado('vataT16'); // Pregunta 16
    vataTotal += obtenerSeleccionado('vataT17'); // Pregunta 17
    vataTotal += obtenerSeleccionado('vataT18'); // Pregunta 18
    vataTotal += obtenerSeleccionado('vataT19'); // Pregunta 19
    vataTotal += obtenerSeleccionado('vataT20'); // Pregunta 20
    vataTotal += obtenerSeleccionado('vataT21'); // Pregunta 21
    vataTotal += obtenerSeleccionado('vataT22'); // Pregunta 22
    vataTotal += obtenerSeleccionado('vataT23'); // Pregunta 23
    vataTotal += obtenerSeleccionado('vataT24'); // Pregunta 24
    vataTotal += obtenerSeleccionado('vataT25'); // Pregunta 25
    console.log('Total de Vata:' + vataTotal);


    var PittaTotal = 0;

    PittaTotal += obtenerSeleccionado('PittaT26'); // Pregunta 26
    PittaTotal += obtenerSeleccionado('PittaT27'); // Pregunta 27
    PittaTotal += obtenerSeleccionado('PittaT28'); // Pregunta 28
    PittaTotal += obtenerSeleccionado('PittaT29'); // Pregunta 29
    PittaTotal += obtenerSeleccionado('PittaT30'); // Pregunta 30
    PittaTotal += obtenerSeleccionado('PittaT31'); // Pregunta 31
    PittaTotal += obtenerSeleccionado('PittaT32'); // Pregunta 32
    PittaTotal += obtenerSeleccionado('PittaT33'); // Pregunta 33
    PittaTotal += obtenerSeleccionado('PittaT34'); // Pregunta 34
    PittaTotal += obtenerSeleccionado('PittaT35'); // Pregunta 35
    PittaTotal += obtenerSeleccionado('PittaT36'); // Pregunta 36
    PittaTotal += obtenerSeleccionado('PittaT37'); // Pregunta 37
    PittaTotal += obtenerSeleccionado('PittaT38'); // Pregunta 38
    PittaTotal += obtenerSeleccionado('PittaT39'); // Pregunta 39
    PittaTotal += obtenerSeleccionado('PittaT40'); // Pregunta 40
    PittaTotal += obtenerSeleccionado('PittaT41'); // Pregunta 41
    PittaTotal += obtenerSeleccionado('PittaT42'); // Pregunta 42
    PittaTotal += obtenerSeleccionado('PittaT43'); // Pregunta 43
    PittaTotal += obtenerSeleccionado('PittaT44'); // Pregunta 44
    PittaTotal += obtenerSeleccionado('PittaT45'); // Pregunta 45
    PittaTotal += obtenerSeleccionado('PittaT46'); // Pregunta 46
    PittaTotal += obtenerSeleccionado('PittaT47'); // Pregunta 47
    PittaTotal += obtenerSeleccionado('PittaT48'); // Pregunta 48
    PittaTotal += obtenerSeleccionado('PittaT49'); // Pregunta 49
    PittaTotal += obtenerSeleccionado('PittaT50'); // Pregunta 50
    
    console.log('Total de Pitta:' + PittaTotal);


    var KaphaTotal = 0;
    KaphaTotal += obtenerSeleccionado('kaphaT51'); // Pregunta 51
    KaphaTotal += obtenerSeleccionado('kaphaT52'); // Pregunta 52
    KaphaTotal += obtenerSeleccionado('kaphaT53'); // Pregunta 53
    KaphaTotal += obtenerSeleccionado('kaphaT54'); // Pregunta 54
    KaphaTotal += obtenerSeleccionado('kaphaT55'); // Pregunta 55
    KaphaTotal += obtenerSeleccionado('kaphaT56'); // Pregunta 56
    KaphaTotal += obtenerSeleccionado('kaphaT57'); // Pregunta 57
    KaphaTotal += obtenerSeleccionado('kaphaT58'); // Pregunta 58
    KaphaTotal += obtenerSeleccionado('kaphaT59'); // Pregunta 59
    KaphaTotal += obtenerSeleccionado('kaphaT60'); // Pregunta 60
    KaphaTotal += obtenerSeleccionado('kaphaT61'); // Pregunta 61
    KaphaTotal += obtenerSeleccionado('kaphaT62'); // Pregunta 62
    KaphaTotal += obtenerSeleccionado('kaphaT63'); // Pregunta 63
    KaphaTotal += obtenerSeleccionado('kaphaT64'); // Pregunta 64
    KaphaTotal += obtenerSeleccionado('kaphaT65'); // Pregunta 65
    KaphaTotal += obtenerSeleccionado('kaphaT66'); // Pregunta 66
    KaphaTotal += obtenerSeleccionado('kaphaT67'); // Pregunta 67
    KaphaTotal += obtenerSeleccionado('kaphaT68'); // Pregunta 68
    KaphaTotal += obtenerSeleccionado('kaphaT69'); // Pregunta 69
    KaphaTotal += obtenerSeleccionado('kaphaT70'); // Pregunta 70
    KaphaTotal += obtenerSeleccionado('kaphaT71'); // Pregunta 71
    KaphaTotal += obtenerSeleccionado('kaphaT72'); // Pregunta 72
    KaphaTotal += obtenerSeleccionado('kaphaT73'); // Pregunta 73
    KaphaTotal += obtenerSeleccionado('kaphaT74'); // Pregunta 74
    KaphaTotal += obtenerSeleccionado('kaphaT75'); // Pregunta 75

    console.log('Total de Kapha:' + KaphaTotal);


    localStorage.setItem('vataTotal', vataTotal);
    localStorage.setItem('PittaTotal', PittaTotal);
    localStorage.setItem('kaphaTotal', KaphaTotal);

    window.location.href = 'ResultadoDoshas.html';

}
