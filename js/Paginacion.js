// Lista de preguntas
const questions = [
    {
    question: "Tengo una complexión delgada y me cuesta ganar peso.",
    name: "vataT1",
    options: [
        { value: "0", "label": "No se aplica a mí." },
        { value: "1", "label": "A veces o parcialmente." },
        { value: "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Mi piel tiende a ser seca, especialmente en invierno.",
    "name": "vataT2",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Aprendo rápido, pero también olvido con facilidad.",
    "name": "vataT3",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Soy una persona activa y me gusta moverme constantemente.",
    "name": "vataT4",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Prefiero climas cálidos y húmedos, ya que el frío me afecta.",
    "name": "vataT5",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Mi apetito es irregular; a veces como mucho y otras veces poco.",
    "name": "vataT6",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo digestiones irregulares, a veces con gases o estreñimiento.",
    name: "vataT7",
    options: [
        { value: "0", "label": "No se aplica a mí." },
        { value: "1", "label": "A veces o parcialmente." },
        { value: "2", "label": "Casi siempre o completamente." }
    ]
},
{
    question: "Soy creativo/a y me gusta expresarme artísticamente.",
    name: "vataT8",
    options: [
        { value: "0", "label": "No se aplica a mí." },
        { value: "1", "label": "A veces o parcialmente." },
        { value: "2", "label": "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta mantener una rutina estable.",
    name: "vataT9",
    options: [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta mantener una rutina estable.",
    name: "vataT10",
    options: [
        { value: "0", "label": "No se aplica a mí." },
        { value: "1", "label": "A veces o parcialmente." },
        { value: "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Mi estado de ánimo cambia rápidamente, pasando de la alegría a la tristeza.",
    "name": "vataT11",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Me siento más energético/a por la tarde o noche.",
    "name": "vataT12",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Tiendo a sentirme ansioso/a o preocupado/a con facilidad.",
    "name": "vataT13",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Mis manos y pies suelen estar fríos.",
    "name": "vataT14",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    "question": "Me gusta probar cosas nuevas y emocionantes.",
    "name": "vataT15",
    "options": [
        { "value": "0", "label": "No se aplica a mí." },
        { "value": "1", "label": "A veces o parcialmente." },
        { "value": "2", "label": "Casi siempre o completamente." }
    ]
},
{
    question: "Hablo rápido y me muevo con agilidad.",
    name: "vataT16",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta relajarme y desconectar.",
    name: "vataT17",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a tener problemas de sueño, como insomnio.",
    name: "vataT18",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta viajar y cambiar de entorno con frecuencia.",
    name: "vataT19",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me siento más cómodo/a en ambientes cálidos y acogedores.",
    name: "vataT20",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a sentirme cansado/a después de un día agitado.",
    name: "vataT21",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta la variedad en la comida y no como siempre lo mismo.",
    name: "vataT22",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "A menudo siento rigidez en las articulaciones.",
    name: "vataT23",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta tomar decisiones rápidas.",
    name: "vataT24",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona muy imaginativa y soñadora.",
    name: "vataT25",
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo una complexión media y un peso equilibrado.",
    name: "PittaT26", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Mi piel es sensible y se enrojece con facilidad.",
    name: "PittaT27", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona organizada y me gusta planificar.",
    name: "PittaT28", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo un apetito fuerte y me molesta si no como a tiempo.",
    name: "PittaT29", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Prefiero climas frescos, ya que el calor me afecta.",
    name: "PittaT30", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a sudar con facilidad.",
    name: "PittaT31", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona competitiva y me gusta alcanzar metas.",
    name: "PittaT32", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me enojo con facilidad, pero me calmo rápido.",
    name: "PittaT33", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo digestiones fuertes y rara vez tengo problemas estomacales.",
    name: "PittaT34", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona decidida y confío en mis decisiones.",
    name: "PittaT35", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta liderar y tomar el control de las situaciones.",
    name: "PittaT36", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},{
    question: "Mi pelo es fino y tiende a encanecer prematuramente.",
    name: "PittaT37", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy perfeccionista y me gusta que las cosas estén bien hechas.",
    name: "PittaT38", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me siento más energético/a al mediodía.",
    name: "PittaT39", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a ser crítico/a conmigo mismo/a y con los demás.",
    name: "PittaT40", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta resolver problemas y enfrentar desafíos.",
    name: "PittaT41", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Prefiero comidas frías y refrescantes.",
    name: "PittaT42", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a tener acné o erupciones cutáneas.",
    name: "PittaT43", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona apasionada y entusiasta.",
    name: "PittaT44", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me molesta el desorden y la falta de eficiencia.",
    name: "PittaT45", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo una mente aguda y me gusta aprender cosas nuevas.",
    name: "PittaT46", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me siento incómodo/a en ambientes calurosos y húmedos.",
    name: "PittaT47", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a ser impaciente cuando las cosas no salen como espero.",
    name: "PittaT48", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta hacer ejercicio intenso, como correr o levantar pesas.",
    name: "PittaT49", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona directa y digo lo que pienso.",
    name: "PittaT50", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo una complexión robusta y gano peso con facilidad.",
    name: "kaphaT51", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Mi piel es suave y bien hidratada.",
    name: "kaphaT52", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona tranquila y relajada.",
    name: "kaphaT53", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta levantarme por la mañana.",
    name: "kaphaT54", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Prefiero climas cálidos y secos, ya que la humedad me afecta.",
    name: "kaphaT55", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Mi apetito es estable, pero como lentamente.",
    name: "kaphaT56", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tengo digestiones lentas y me siento pesado/a después de comer.",
    name: "kaphaT57", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona paciente y tolerante.",
    name: "kaphaT58", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta dormir mucho y me cuesta despertarme.",
    name: "kaphaT59", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a ser afectuoso/a y compasivo/a.",
    name: "kaphaT60", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me siento más energético/a por la mañana temprano.",
    name: "kaphaT61", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona metódica y me gusta seguir una rutina.",
    name: "kaphaT62", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Mi pelo es grueso y brillante.",
    name: "kaphaT63", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta la comida caliente y picante.",
    name: "kaphaT64", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a acumular líquidos y sentirme hinchado/a.",
    name: "kaphaT65", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona leal y confiable.",
    name: "kaphaT66", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me cuesta adaptarme a los cambios.",
    name: "kaphaT67", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Prefiero ejercicios suaves, como yoga o caminar.",
    name: "kaphaT68", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a ser ahorrativo/a y conservador/a.",
    name: "kaphaT69", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta pasar tiempo en casa y relajarme.",
    name: "kaphaT70", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona romántica y sentimental.",
    name: "kaphaT71", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me siento cómodo/a en ambientes estables y predecibles.",
    name: "kaphaT72", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Tiendo a tener alergias o congestión nasal.",
    name: "kaphaT73", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Soy una persona calmada y no me enfado fácilmente.",
    name: "kaphaT74", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
},
{
    question: "Me gusta disfrutar de la vida sin prisas.",
    name: "kaphaT75", 
    options: [
        { value: "0", label: "No se aplica a mí." },
        { value: "1", label: "A veces o parcialmente." },
        { value: "2", label: "Casi siempre o completamente." }
    ]
}



];

const itemsPerPage = 5; // Número de preguntas a mostrar por página
let currentPage = 1; // Página actual

// Función para renderizar las preguntas
function renderItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentQuestions = questions.slice(start, end);

    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = currentQuestions.map(q => `
        <div class="question">
            <p class="fw-bold">${q.question}</p>
            ${q.options.map(option => {
                const storedAnswer = localStorage.getItem(q.name); // Obtener la respuesta almacenada
                const isChecked = storedAnswer === option.value ? 'checked' : ''; // Verificar si es la respuesta seleccionada

                return `
                    <div class="form-check mb-2">
                        <input class="form-check-input" type="radio" name="${q.name}" value="${option.value}" id="${q.name}-${option.value}" ${isChecked} />
                        <label class="form-check-label" for="${q.name}-${option.value}">
                            ${option.label}
                        </label>
                    </div>
                `;
            }).join('')}
        </div>
    `).join('');

    // Añadir evento a los radio buttons para guardar la selección
    currentQuestions.forEach(q => {
        q.options.forEach(option => {
            const radioButton = document.getElementById(`${q.name}-${option.value}`);
            radioButton.addEventListener('change', function() {
                if (this.checked) {
                    localStorage.setItem(q.name, option.value); // Guardar la respuesta seleccionada en localStorage
                }
            });
        });
    });
}

// Función para crear los botones de paginación
function renderPagination() {
    const totalPages = Math.ceil(questions.length / itemsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');

    paginationContainer.innerHTML = ''; // Limpiar botones previos

    // Crear los botones de paginación
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('span');
        button.textContent = i;
        button.classList.add('page-item');
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', function() {
            currentPage = i;
            renderItems(currentPage);
            renderPagination();
        });
        paginationContainer.appendChild(button);
    }
}

// Inicializar la paginación y renderizar la primera página
renderItems(currentPage);
renderPagination();
