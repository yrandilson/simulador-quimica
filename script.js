// Aguardar carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('Simulador de Química Interativo v6.1 carregado com sucesso!');

    // --- SELEÇÃO DOS ELEMENTOS DA MODAL ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalDetailsContent = document.getElementById('modal-details-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // --- BANCO DE DADOS COMPLETO (118 ELEMENTOS) ---
    const ELEMENTS_DATA = [
        { number: 1, name: "Hidrogênio", symbol: "H", group: 1, period: 1, mass: 1.008, category: "diatomic-nonmetal", electronegativity: 2.20 },
        { number: 2, name: "Hélio", symbol: "He", group: 18, period: 1, mass: 4.0026, category: "noble-gas", electronegativity: null },
        { number: 3, name: "Lítio", symbol: "Li", group: 1, period: 2, mass: 6.94, category: "alkali", electronegativity: 0.98 },
        { number: 4, name: "Berílio", symbol: "Be", group: 2, period: 2, mass: 9.0122, category: "alkaline-earth", electronegativity: 1.57 },
        { number: 5, name: "Boro", symbol: "B", group: 13, period: 2, mass: 10.81, category: "metalloid", electronegativity: 2.04 },
        { number: 6, name: "Carbono", symbol: "C", group: 14, period: 2, mass: 12.011, category: "polyatomic-nonmetal", electronegativity: 2.55 },
        { number: 7, name: "Nitrogênio", symbol: "N", group: 15, period: 2, mass: 14.007, category: "diatomic-nonmetal", electronegativity: 3.04 },
        { number: 8, name: "Oxigênio", symbol: "O", group: 16, period: 2, mass: 15.999, category: "diatomic-nonmetal", electronegativity: 3.44 },
        { number: 9, name: "Flúor", symbol: "F", group: 17, period: 2, mass: 18.998, category: "diatomic-nonmetal", electronegativity: 3.98 },
        { number: 10, name: "Neônio", symbol: "Ne", group: 18, period: 2, mass: 20.180, category: "noble-gas", electronegativity: null },
        { number: 11, name: "Sódio", symbol: "Na", group: 1, period: 3, mass: 22.990, category: "alkali", electronegativity: 0.93 },
        { number: 12, name: "Magnésio", symbol: "Mg", group: 2, period: 3, mass: 24.305, category: "alkaline-earth", electronegativity: 1.31 },
        { number: 13, name: "Alumínio", symbol: "Al", group: 13, period: 3, mass: 26.982, category: "post-transition", electronegativity: 1.61 },
        { number: 14, name: "Silício", symbol: "Si", group: 14, period: 3, mass: 28.085, category: "metalloid", electronegativity: 1.90 },
        { number: 15, name: "Fósforo", symbol: "P", group: 15, period: 3, mass: 30.974, category: "polyatomic-nonmetal", electronegativity: 2.19 },
        { number: 16, name: "Enxofre", symbol: "S", group: 16, period: 3, mass: 32.06, category: "polyatomic-nonmetal", electronegativity: 2.58 },
        { number: 17, name: "Cloro", symbol: "Cl", group: 17, period: 3, mass: 35.45, category: "diatomic-nonmetal", electronegativity: 3.16 },
        { number: 18, name: "Argônio", symbol: "Ar", group: 18, period: 3, mass: 39.948, category: "noble-gas", electronegativity: null },
        { number: 19, name: "Potássio", symbol: "K", group: 1, period: 4, mass: 39.098, category: "alkali", electronegativity: 0.82 },
        { number: 20, name: "Cálcio", symbol: "Ca", group: 2, period: 4, mass: 40.078, category: "alkaline-earth", electronegativity: 1.00 },
        { number: 21, name: "Escândio", symbol: "Sc", group: 3, period: 4, mass: 44.956, category: "transition", electronegativity: 1.36 },
        { number: 22, name: "Titânio", symbol: "Ti", group: 4, period: 4, mass: 47.867, category: "transition", electronegativity: 1.54 },
        { number: 23, name: "Vanádio", symbol: "V", group: 5, period: 4, mass: 50.942, category: "transition", electronegativity: 1.63 },
        { number: 24, name: "Cromo", symbol: "Cr", group: 6, period: 4, mass: 51.996, category: "transition", electronegativity: 1.66 },
        { number: 25, name: "Manganês", symbol: "Mn", group: 7, period: 4, mass: 54.938, category: "transition", electronegativity: 1.55 },
        { number: 26, name: "Ferro", symbol: "Fe", group: 8, period: 4, mass: 55.845, category: "transition", electronegativity: 1.83 },
        { number: 27, name: "Cobalto", symbol: "Co", group: 9, period: 4, mass: 58.933, category: "transition", electronegativity: 1.88 },
        { number: 28, name: "Níquel", symbol: "Ni", group: 10, period: 4, mass: 58.693, category: "transition", electronegativity: 1.91 },
        { number: 29, name: "Cobre", symbol: "Cu", group: 11, period: 4, mass: 63.546, category: "transition", electronegativity: 1.90 },
        { number: 30, name: "Zinco", symbol: "Zn", group: 12, period: 4, mass: 65.38, category: "transition", electronegativity: 1.65 },
        { number: 31, name: "Gálio", symbol: "Ga", group: 13, period: 4, mass: 69.723, category: "post-transition", electronegativity: 1.81 },
        { number: 32, name: "Germânio", symbol: "Ge", group: 14, period: 4, mass: 72.63, category: "metalloid", electronegativity: 2.01 },
        { number: 33, name: "Arsênio", symbol: "As", group: 15, period: 4, mass: 74.922, category: "metalloid", electronegativity: 2.18 },
        { number: 34, name: "Selênio", symbol: "Se", group: 16, period: 4, mass: 78.971, category: "polyatomic-nonmetal", electronegativity: 2.55 },
        { number: 35, name: "Bromo", symbol: "Br", group: 17, period: 4, mass: 79.904, category: "diatomic-nonmetal", electronegativity: 2.96 },
        { number: 36, name: "Criptônio", symbol: "Kr", group: 18, period: 4, mass: 83.798, category: "noble-gas", electronegativity: 3.00 },
        { number: 37, name: "Rubídio", symbol: "Rb", group: 1, period: 5, mass: 85.468, category: "alkali", electronegativity: 0.82 },
        { number: 38, name: "Estrôncio", symbol: "Sr", group: 2, period: 5, mass: 87.62, category: "alkaline-earth", electronegativity: 0.95 },
        { number: 39, name: "Ítrio", symbol: "Y", group: 3, period: 5, mass: 88.906, category: "transition", electronegativity: 1.22 },
        { number: 40, name: "Zircônio", symbol: "Zr", group: 4, period: 5, mass: 91.224, category: "transition", electronegativity: 1.33 },
        { number: 41, name: "Nióbio", symbol: "Nb", group: 5, period: 5, mass: 92.906, category: "transition", electronegativity: 1.6 },
        { number: 42, name: "Molibdênio", symbol: "Mo", group: 6, period: 5, mass: 95.96, category: "transition", electronegativity: 2.16 },
        { number: 43, name: "Tecnécio", symbol: "Tc", group: 7, period: 5, mass: 98, category: "transition", electronegativity: 1.9 },
        { number: 44, name: "Rutênio", symbol: "Ru", group: 8, period: 5, mass: 101.07, category: "transition", electronegativity: 2.2 },
        { number: 45, name: "Ródio", symbol: "Rh", group: 9, period: 5, mass: 102.91, category: "transition", electronegativity: 2.28 },
        { number: 46, name: "Paládio", symbol: "Pd", group: 10, period: 5, mass: 106.42, category: "transition", electronegativity: 2.20 },
        { number: 47, name: "Prata", symbol: "Ag", group: 11, period: 5, mass: 107.87, category: "transition", electronegativity: 1.93 },
        { number: 48, name: "Cádmio", symbol: "Cd", group: 12, period: 5, mass: 112.41, category: "transition", electronegativity: 1.69 },
        { number: 49, name: "Índio", symbol: "In", group: 13, period: 5, mass: 114.82, category: "post-transition", electronegativity: 1.78 },
        { number: 50, name: "Estanho", symbol: "Sn", group: 14, period: 5, mass: 118.71, category: "post-transition", electronegativity: 1.96 },
        { number: 51, name: "Antimônio", symbol: "Sb", group: 15, period: 5, mass: 121.76, category: "metalloid", electronegativity: 2.05 },
        { number: 52, name: "Telúrio", symbol: "Te", group: 16, period: 5, mass: 127.60, category: "metalloid", electronegativity: 2.1 },
        { number: 53, name: "Iodo", symbol: "I", group: 17, period: 5, mass: 126.90, category: "diatomic-nonmetal", electronegativity: 2.66 },
        { number: 54, name: "Xenônio", symbol: "Xe", group: 18, period: 5, mass: 131.29, category: "noble-gas", electronegativity: 2.6 },
        { number: 55, name: "Césio", symbol: "Cs", group: 1, period: 6, mass: 132.91, category: "alkali", electronegativity: 0.79 },
        { number: 56, name: "Bário", symbol: "Ba", group: 2, period: 6, mass: 137.33, category: "alkaline-earth", electronegativity: 0.89 },
        { number: 57, name: "Lantânio", symbol: "La", group: 3, period: 9, mass: 138.91, category: "lanthanide", electronegativity: 1.1 },
        { number: 58, name: "Cério", symbol: "Ce", group: 4, period: 9, mass: 140.12, category: "lanthanide", electronegativity: 1.12 },
        { number: 59, name: "Praseodímio", symbol: "Pr", group: 5, period: 9, mass: 140.91, category: "lanthanide", electronegativity: 1.13 },
        { number: 60, name: "Neodímio", symbol: "Nd", group: 6, period: 9, mass: 144.24, category: "lanthanide", electronegativity: 1.14 },
        { number: 61, name: "Promécio", symbol: "Pm", group: 7, period: 9, mass: 145, category: "lanthanide", electronegativity: 1.13 },
        { number: 62, name: "Samário", symbol: "Sm", group: 8, period: 9, mass: 150.36, category: "lanthanide", electronegativity: 1.17 },
        { number: 63, name: "Európio", symbol: "Eu", group: 9, period: 9, mass: 151.96, category: "lanthanide", electronegativity: 1.2 },
        { number: 64, name: "Gadolínio", symbol: "Gd", group: 10, period: 9, mass: 157.25, category: "lanthanide", electronegativity: 1.2 },
        { number: 65, name: "Térbio", symbol: "Tb", group: 11, period: 9, mass: 158.93, category: "lanthanide", electronegativity: 1.1 },
        { number: 66, name: "Disprósio", symbol: "Dy", group: 12, period: 9, mass: 162.50, category: "lanthanide", electronegativity: 1.22 },
        { number: 67, name: "Hólmio", symbol: "Ho", group: 13, period: 9, mass: 164.93, category: "lanthanide", electronegativity: 1.23 },
        { number: 68, name: "Érbio", symbol: "Er", group: 14, period: 9, mass: 167.26, category: "lanthanide", electronegativity: 1.24 },
        { number: 69, name: "Túlio", symbol: "Tm", group: 15, period: 9, mass: 168.93, category: "lanthanide", electronegativity: 1.25 },
        { number: 70, name: "Itérbio", symbol: "Yb", group: 16, period: 9, mass: 173.05, category: "lanthanide", electronegativity: 1.1 },
        { number: 71, name: "Lutécio", symbol: "Lu", group: 17, period: 9, mass: 174.97, category: "lanthanide", electronegativity: 1.27 },
        { number: 72, name: "Háfnio", symbol: "Hf", group: 4, period: 6, mass: 178.49, category: "transition", electronegativity: 1.3 },
        { number: 73, name: "Tântalo", symbol: "Ta", group: 5, period: 6, mass: 180.95, category: "transition", electronegativity: 1.5 },
        { number: 74, name: "Tungstênio", symbol: "W", group: 6, period: 6, mass: 183.84, category: "transition", electronegativity: 2.36 },
        { number: 75, name: "Rênio", symbol: "Re", group: 7, period: 6, mass: 186.21, category: "transition", electronegativity: 1.9 },
        { number: 76, name: "Ósmio", symbol: "Os", group: 8, period: 6, mass: 190.23, category: "transition", electronegativity: 2.2 },
        { number: 77, name: "Irídio", symbol: "Ir", group: 9, period: 6, mass: 192.22, category: "transition", electronegativity: 2.20 },
        { number: 78, name: "Platina", symbol: "Pt", group: 10, period: 6, mass: 195.08, category: "transition", electronegativity: 2.28 },
        { number: 79, name: "Ouro", symbol: "Au", group: 11, period: 6, mass: 196.97, category: "transition", electronegativity: 2.54 },
        { number: 80, name: "Mercúrio", symbol: "Hg", group: 12, period: 6, mass: 200.59, category: "transition", electronegativity: 2.00 },
        { number: 81, name: "Tálio", symbol: "Tl", group: 13, period: 6, mass: 204.38, category: "post-transition", electronegativity: 1.62 },
        { number: 82, name: "Chumbo", symbol: "Pb", group: 14, period: 6, mass: 207.2, category: "post-transition", electronegativity: 2.33 },
        { number: 83, name: "Bismuto", symbol: "Bi", group: 15, period: 6, mass: 208.98, category: "post-transition", electronegativity: 2.02 },
        { number: 84, name: "Polônio", symbol: "Po", group: 16, period: 6, mass: 209, category: "metalloid", electronegativity: 2.0 },
        { number: 85, name: "Ástato", symbol: "At", group: 17, period: 6, mass: 210, category: "metalloid", electronegativity: 2.2 },
        { number: 86, name: "Radônio", symbol: "Rn", group: 18, period: 6, mass: 222, category: "noble-gas", electronegativity: 2.2 },
        { number: 87, name: "Frâncio", symbol: "Fr", group: 1, period: 7, mass: 223, category: "alkali", electronegativity: 0.7 },
        { number: 88, name: "Rádio", symbol: "Ra", group: 2, period: 7, mass: 226, category: "alkaline-earth", electronegativity: 0.9 },
        { number: 89, name: "Actínio", symbol: "Ac", group: 3, period: 10, mass: 227, category: "actinide", electronegativity: 1.1 },
        { number: 90, name: "Tório", symbol: "Th", group: 4, period: 10, mass: 232.04, category: "actinide", electronegativity: 1.3 },
        { number: 91, name: "Protactínio", symbol: "Pa", group: 5, period: 10, mass: 231.04, category: "actinide", electronegativity: 1.5 },
        { number: 92, name: "Urânio", symbol: "U", group: 6, period: 10, mass: 238.03, category: "actinide", electronegativity: 1.38 },
        { number: 93, name: "Neptúnio", symbol: "Np", group: 7, period: 10, mass: 237, category: "actinide", electronegativity: 1.36 },
        { number: 94, name: "Plutônio", symbol: "Pu", group: 8, period: 10, mass: 244, category: "actinide", electronegativity: 1.28 },
        { number: 95, name: "Amerício", symbol: "Am", group: 9, period: 10, mass: 243, category: "actinide", electronegativity: 1.13 },
        { number: 96, name: "Cúrio", symbol: "Cm", group: 10, period: 10, mass: 247, category: "actinide", electronegativity: 1.28 },
        { number: 97, name: "Berquélio", symbol: "Bk", group: 11, period: 10, mass: 247, category: "actinide", electronegativity: 1.3 },
        { number: 98, name: "Califórnio", symbol: "Cf", group: 12, period: 10, mass: 251, category: "actinide", electronegativity: 1.3 },
        { number: 99, name: "Einstênio", symbol: "Es", group: 13, period: 10, mass: 252, category: "actinide", electronegativity: 1.3 },
        { number: 100, name: "Férmio", symbol: "Fm", group: 14, period: 10, mass: 257, category: "actinide", electronegativity: 1.3 },
        { number: 101, name: "Mendelévio", symbol: "Md", group: 15, period: 10, mass: 258, category: "actinide", electronegativity: 1.3 },
        { number: 102, name: "Nobélio", symbol: "No", group: 16, period: 10, mass: 259, category: "actinide", electronegativity: 1.3 },
        { number: 103, name: "Laurêncio", symbol: "Lr", group: 17, period: 10, mass: 262, category: "actinide", electronegativity: 1.3 },
        { number: 104, name: "Rutherfórdio", symbol: "Rf", group: 4, period: 7, mass: 267, category: "transition", electronegativity: null },
        { number: 105, name: "Dúbnio", symbol: "Db", group: 5, period: 7, mass: 268, category: "transition", electronegativity: null },
        { number: 106, name: "Seabórgio", symbol: "Sg", group: 6, period: 7, mass: 271, category: "transition", electronegativity: null },
        { number: 107, name: "Bóhrio", symbol: "Bh", group: 7, period: 7, mass: 272, category: "transition", electronegativity: null },
        { number: 108, name: "Hássio", symbol: "Hs", group: 8, period: 7, mass: 277, category: "transition", electronegativity: null },
        { number: 109, name: "Meitnério", symbol: "Mt", group: 9, period: 7, mass: 276, category: "unknown", electronegativity: null },
        { number: 110, name: "Darmstádio", symbol: "Ds", group: 10, period: 7, mass: 281, category: "unknown", electronegativity: null },
        { number: 111, name: "Roentgênio", symbol: "Rg", group: 11, period: 7, mass: 280, category: "unknown", electronegativity: null },
        { number: 112, name: "Copernício", symbol: "Cn", group: 12, period: 7, mass: 285, category: "transition", electronegativity: null },
        { number: 113, name: "Nihônio", symbol: "Nh", group: 13, period: 7, mass: 284, category: "unknown", electronegativity: null },
        { number: 114, name: "Fleróvio", symbol: "Fl", group: 14, period: 7, mass: 289, category: "unknown", electronegativity: null },
        { number: 115, name: "Moscóvio", symbol: "Mc", group: 15, period: 7, mass: 288, category: "unknown", electronegativity: null },
        { number: 116, name: "Livermório", symbol: "Lv", group: 16, period: 7, mass: 293, category: "unknown", electronegativity: null },
        { number: 117, name: "Tenesso", symbol: "Ts", group: 17, period: 7, mass: 294, category: "unknown", electronegativity: null },
        { number: 118, name: "Oganessônio", symbol: "Og", group: 18, period: 7, mass: 294, category: "unknown", electronegativity: null }
    ];

    const SUBSTANCE_DATABASE = {
        'h2': { name: 'Hidrogênio', type: 'substância pura simples', formula: 'H₂', state: 'gasoso' },
        'o2': { name: 'Oxigênio', type: 'substância pura simples', formula: 'O₂', state: 'gasoso' },
        'n2': { name: 'Nitrogênio', type: 'substância pura simples', formula: 'N₂', state: 'gasoso' },
        'fe': { name: 'Ferro', type: 'substância pura simples', formula: 'Fe', state: 'sólido' },
        'au': { name: 'Ouro', type: 'substância pura simples', formula: 'Au', state: 'sólido' },
        'h2o': { name: 'Água', type: 'substância pura composta', formula: 'H₂O', state: 'líquido' },
        'agua': { name: 'Água', type: 'substância pura composta', formula: 'H₂O', state: 'líquido' },
        'co2': { name: 'Dióxido de carbono', type: 'substância pura composta', formula: 'CO₂', state: 'gasoso' },
        'nacl': { name: 'Cloreto de sódio', type: 'substância pura composta', formula: 'NaCl', state: 'sólido' },
        'sal': { name: 'Cloreto de sódio', type: 'substância pura composta', formula: 'NaCl', state: 'sólido' },
        'nh3': { name: 'Amônia', type: 'substância pura composta', formula: 'NH₃', state: 'gasoso' },
        'ch4': { name: 'Metano', type: 'substância pura composta', formula: 'CH₄', state: 'gasoso' }
    };

    const QUIZ_QUESTIONS = [
        { question: "Qual é o número atômico do carbono?", options: ["4", "6", "8", "12"], correct: 1, explanation: "O carbono tem 6 prótons em seu núcleo, portanto seu número atômico é 6." },
        { question: "Qual família da tabela periódica é conhecida como gases nobres?", options: ["Família 1", "Família 17", "Família 18", "Família 2"], correct: 2, explanation: "Os gases nobres estão na família 18 (grupo 18) da tabela periódica." },
        { question: "Quantos elétrons cabem na primeira camada eletrônica?", options: ["2", "8", "18", "32"], correct: 0, explanation: "A primeira camada (camada K) pode conter no máximo 2 elétrons." },
        { question: "Qual é a fórmula química da água?", options: ["HO", "H₂O", "H₃O", "HO₂"], correct: 1, explanation: "A água é formada por 2 átomos de hidrogênio e 1 átomo de oxigênio: H₂O." },
        { question: "O que representa o número de massa de um átomo?", options: ["Número de elétrons", "Número de prótons", "Soma de prótons e nêutrons", "Número de nêutrons"], correct: 2, explanation: "O número de massa é a soma do número de prótons e nêutrons no núcleo." },
        { question: "Qual elemento tem símbolo Na?", options: ["Nitrogênio", "Sódio", "Neônio", "Níquel"], correct: 1, explanation: "Na é o símbolo do sódio (do latim natrium)." },
        { question: "Quantos períodos tem a tabela periódica?", options: ["6", "7", "8", "18"], correct: 1, explanation: "A tabela periódica atual tem 7 períodos (linhas horizontais)." },
        { question: "Qual é a unidade padrão para massa atômica?", options: ["Gramas", "Quilogramas", "Unidade de massa atômica (u)", "Miligramas"], correct: 2, explanation: "A massa atômica é medida em unidades de massa atômica (u ou uma)." },
        { question: "O que caracteriza os metais alcalinos?", options: ["Ter 1 elétron na camada de valência", "Ter 2 elétrons na camada de valência", "Ser gases à temperatura ambiente", "Ter alta eletronegatividade"], correct: 0, explanation: "Os metais alcalinos (grupo 1) têm 1 elétron na camada de valência." },
        { question: "Qual processo ocorre quando um átomo perde elétrons?", options: ["Redução", "Oxidação", "Neutralização", "Ionização"], correct: 1, explanation: "Quando um átomo perde elétrons, ocorre oxidação e ele se torna um cátion." }
    ];
    
    const equations = [
        { reactants: { H2: 2, O2: 1 }, products: { H2O: 2 } },
        { reactants: { N2: 1, H2: 3 }, products: { NH3: 2 } },
        { reactants: { CH4: 1, O2: 2 }, products: { CO2: 1, H2O: 2 } },
        { reactants: { Fe: 4, O2: 3 }, products: { Fe2O3: 2 } },
        { reactants: { P4: 1, O2: 5 }, products: { P4O10: 1 } },
    ];

    // --- GLOSSÁRIO EXPANDIDO ---
    const GLOSSARY_DATA = {
        "Átomo": {
            definition: "A unidade fundamental da matéria, composta por um núcleo (com prótons e nêutrons) e elétrons que orbitam este núcleo.",
            example: "Um átomo de Hidrogênio é o mais simples, com apenas 1 próton e 1 elétron."
        },
        "Molécula": {
            definition: "Um grupo de dois ou mais átomos ligados quimicamente.",
            example: "A molécula de água (H₂O) é formada por dois átomos de Hidrogênio e um de Oxigênio."
        },
        "Íon": {
            definition: "Um átomo ou molécula que ganhou ou perdeu um ou mais elétrons, adquirindo assim uma carga elétrica líquida.",
            example: "Quando o Sódio (Na) perde um elétron, ele se torna o cátion Na⁺."
        },
        "Cátion": {
            definition: "Um íon com carga elétrica positiva, formado quando um átomo neutro perde elétrons.",
            example: "O Cálcio (Ca) forma o cátion Ca²⁺ ao perder dois elétrons."
        },
        "Ânion": {
            definition: "Um íon com carga elétrica negativa, formado quando um átomo neutro ganha elétrons.",
            example: "O Cloro (Cl) forma o ânion Cl⁻ ao ganhar um elétron."
        },
        "Ligação Iônica": {
            definition: "Uma ligação química formada pela atração eletrostática entre íons de cargas opostas (cátions e ânions). Geralmente ocorre entre um metal e um ametal.",
            example: "No sal de cozinha (NaCl), o Sódio (Na⁺) e o Cloro (Cl⁻) são unidos por uma ligação iônica."
        },
        "Ligação Covalente": {
            definition: "Uma ligação química que envolve o compartilhamento de pares de elétrons entre átomos. Geralmente ocorre entre ametais.",
            example: "Na molécula de Oxigênio (O₂), os dois átomos compartilham elétrons para se estabilizarem."
        },
        "Eletronegatividade": {
            definition: "A medida da tendência de um átomo para atrair elétrons em uma ligação química.",
            example: "O Flúor (F) é o elemento mais eletronegativo, atraindo fortemente os elétrons."
        },
        "Número Atômico (Z)": {
            definition: "O número de prótons no núcleo de um átomo. Este número define a identidade do elemento químico.",
            example: "O Carbono sempre terá número atômico 6, pois possui 6 prótons."
        },
        "Número de Massa (A)": {
            definition: "A soma do número de prótons e nêutrons no núcleo de um átomo.",
            example: "O isótopo Carbono-14 possui 6 prótons e 8 nêutrons, então seu número de massa é 14."
        },
        "Isótopos": {
            definition: "Átomos do mesmo elemento químico (mesmo número de prótons) que possuem diferentes números de nêutrons e, portanto, diferentes números de massa.",
            example: "O Carbono-12 (6 prótons, 6 nêutrons) e o Carbono-14 (6 prótons, 8 nêutrons) são isótopos."
        },
        "pH": {
            definition: "Potencial Hidrogeniônico. Uma escala logarítmica que mede a acidez ou alcalinidade de uma solução aquosa. Varia de 0 (muito ácido) a 14 (muito alcalino), com 7 sendo neutro.",
            example: "O suco de limão tem um pH em torno de 2 (ácido), enquanto a água pura tem pH 7 (neutro)."
        },
        "Solução": {
            definition: "Uma mistura homogênea composta por um soluto (substância dissolvida) e um solvente (substância que dissolve).",
            example: "Água com açúcar é uma solução onde o açúcar é o soluto e a água é o solvente."
        },
        "Reação de Oxirredução": {
            definition: "Uma reação química onde ocorre a transferência de elétrons entre espécies químicas. Envolve processos de oxidação (perda de elétrons) e redução (ganho de elétrons).",
            example: "A ferrugem do ferro é uma reação de oxirredução onde o ferro oxida (perde elétrons para o oxigênio)."
        },
        "Estado de Oxidação (Nox)": {
            definition: "Um número atribuído a um elemento em um composto que representa o número de elétrons que o átomo perdeu ou ganhou.",
            example: "Na água (H₂O), o Nox do Hidrogênio é +1 e o do Oxigênio é -2."
        }
    };

    // --- VARIÁVEIS GLOBAIS ---
    let currentAtom = { protons: 0, neutrons: 0, electrons: 0 };
    let currentQuiz = { questionIndex: 0, score: 0, questions: [], answered: false };
    let currentEquation;
    let selectedAtomsForBonding = [null, null];

    // --- FUNÇÕES UTILITÁRIAS ---
    function showModule(moduleId) {
        document.querySelectorAll('.module-content').forEach(module => module.classList.add('hidden'));
        const targetModule = document.getElementById(moduleId);
        if (targetModule) {
            targetModule.classList.remove('hidden');
            targetModule.classList.add('fade-in');
        }
        document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`#nav-${moduleId.replace('-content', '')}`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    function getElementByProtons(protons) {
        return ELEMENTS_DATA.find(element => element.number === protons);
    }

    function parseMolecularFormula(formula) {
        const elements = {};
        const regex = /([A-Z][a-z]?)(\d*)/g;
        let match;
        while ((match = regex.exec(formula)) !== null) {
            const element = match[1];
            const count = parseInt(match[2]) || 1;
            elements[element] = (elements[element] || 0) + count;
        }
        return elements;
    }

    function formatElectronConfiguration(electrons) {
        if (electrons === 0) return "—";
        const shells = [];
        let remainingElectrons = electrons;
        const layers = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
        const maxElectronsPerShell = [2, 8, 18, 32, 32, 18, 8];
        for (let i = 0; i < layers.length; i++) {
            if (remainingElectrons > 0) {
                const electronsInShell = Math.min(remainingElectrons, maxElectronsPerShell[i]);
                shells.push(`${layers[i]}: ${electronsInShell}`);
                remainingElectrons -= electronsInShell;
            } else {
                break;
            }
        }
        return shells.join(' | ');
    }

    // --- MÓDULO 1: ESTRUTURA ATÔMICA ---
    function updateAtomDisplay() {
        const { protons, neutrons, electrons } = currentAtom;
        const element = getElementByProtons(protons);
        document.getElementById('proton-count').textContent = protons;
        document.getElementById('neutron-count').textContent = neutrons;
        document.getElementById('electron-count').textContent = electrons;
        document.getElementById('stat-protons').textContent = protons;
        document.getElementById('stat-neutrons').textContent = neutrons;
        document.getElementById('stat-electrons').textContent = electrons;
        document.getElementById('stat-mass').textContent = protons + neutrons;
        if (element && protons > 0) {
            document.getElementById('element-name').textContent = element.name;
            document.getElementById('element-symbol').textContent = element.symbol;
        } else {
            document.getElementById('element-name').textContent = protons > 0 ? 'Elemento Desconhecido' : 'Elemento Neutro';
            document.getElementById('element-symbol').textContent = 'X';
        }
        document.getElementById('atomic-number').textContent = protons;
        document.getElementById('mass-number').textContent = protons + neutrons;
        const charge = protons - electrons;
        document.getElementById('element-charge').textContent = charge === 0 ? '0' : (charge > 0 ? `+${charge}` : charge);
        document.getElementById('config-text').textContent = formatElectronConfiguration(electrons);
        const nucleus = document.getElementById('nucleus');
        nucleus.textContent = protons + neutrons > 0 ? `${protons + neutrons}` : '';
        updateElectronShells();
    }

function updateElectronShells() {
        const viz = document.getElementById('atom-visualization');
        viz.querySelectorAll('.electron').forEach(e => e.remove());
        let remainingElectrons = currentAtom.electrons;
        const maxElectronsPerShell = [2, 8, 18];
        const shells = document.querySelectorAll('.electron-shell');
        shells.forEach((shell, index) => {
            if (remainingElectrons <= 0) return;
            const maxInThisShell = maxElectronsPerShell[index] || 32;
            const electronsInShell = Math.min(remainingElectrons, maxInThisShell);
            for (let i = 0; i < electronsInShell; i++) {
                const electron = document.createElement('div');
                electron.className = 'electron';
                const angle = (i / electronsInShell) * 2 * Math.PI;
                const radius = (shell.offsetWidth / 2) - 5;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                electron.style.left = `calc(50% + ${x}px)`;
                electron.style.top = `calc(50% + ${y}px)`;
                electron.style.transform = 'translate(-50%, -50%)';
                viz.appendChild(electron);
            }
            remainingElectrons -= electronsInShell;
        }); // ✅ Corrigido fechamento do forEach
    }

    

    // --- MÓDULO 2: TABELA PERIÓDICA E MODAL ---
    function generatePeriodicTable() {
        const container = document.getElementById('periodic-table-container');
        if (!container) return;
        container.innerHTML = '';
        ELEMENTS_DATA.forEach(element => {
            const tile = document.createElement('div');
            tile.className = `element-tile ${element.category}`;
            tile.dataset.category = element.category; // Adiciona data-attribute para o filtro
            tile.style.gridColumn = element.group;
            tile.style.gridRow = element.period;
            
            // Adiciona placeholders para os Lantanídeos e Actinídeos na tabela principal
            if (element.number === 57) {
                const placeholder = document.createElement('div');
                placeholder.className = 'element-tile lanthanide';
                placeholder.innerHTML = `<div class="atomic-number">57-71</div><div class="symbol">*</div>`;
                placeholder.style.gridColumn = 3;
                placeholder.style.gridRow = 6;
                container.appendChild(placeholder);
            } else if (element.number === 89) {
                 const placeholder = document.createElement('div');
                placeholder.className = 'element-tile actinide';
                placeholder.innerHTML = `<div class="atomic-number">89-103</div><div class="symbol">**</div>`;
                placeholder.style.gridColumn = 3;
                placeholder.style.gridRow = 7;
                container.appendChild(placeholder);
            }
            
            tile.innerHTML = `<div class="atomic-number">${element.number}</div><div class="symbol">${element.symbol}</div><div class="name">${element.name}</div>`;
            tile.addEventListener('click', () => openModalWithElement(element));
            container.appendChild(tile);
        });
    }

    function generateLegend() {
        const legendContainer = document.getElementById('periodic-table-legend');
        if (!legendContainer) return;

        const categoryMap = {
            "alkali": "Metais Alcalinos",
            "alkaline-earth": "Metais Alcalinoterrosos",
            "lanthanide": "Lantanídeos",
            "actinide": "Actinídeos",
            "transition": "Metais de Transição",
            "post-transition": "Metais Pós-transição",
            "metalloid": "Semimetais",
            "polyatomic-nonmetal": "Não Metais Poliatômicos",
            "diatomic-nonmetal": "Não Metais Diatômicos",
            "noble-gas": "Gases Nobres",
            "unknown": "Propriedades Desconhecidas"
        };

        // Adiciona o botão de reset
        legendContainer.innerHTML = `<button id="reset-filter-btn" class="action-button">Mostrar Todos</button>`;

        for (const category in categoryMap) {
            const legendItem = document.createElement('div');
            legendItem.className = `legend-item ${category}`;
            legendItem.textContent = categoryMap[category];
            legendItem.dataset.category = category;
            legendItem.addEventListener('click', () => filterPeriodicTableByCategory(category));
            legendContainer.appendChild(legendItem);
        }

        document.getElementById('reset-filter-btn').addEventListener('click', () => filterPeriodicTableByCategory('all'));
    }

    function filterPeriodicTableByCategory(category) {
        const allTiles = document.querySelectorAll('#periodic-table-container .element-tile');
        const allLegendItems = document.querySelectorAll('#periodic-table-legend .legend-item');

        allLegendItems.forEach(item => item.classList.remove('active'));

        if (category === 'all') {
            allTiles.forEach(tile => tile.classList.remove('faded'));
        } else {
            const activeLegend = document.querySelector(`.legend-item[data-category="${category}"]`);
            if (activeLegend) {
                activeLegend.classList.add('active');
            }
            allTiles.forEach(tile => {
                if (tile.dataset.category === category) {
                    tile.classList.remove('faded');
                } else {
                    tile.classList.add('faded');
                }
            });
        }
    }

    function openModalWithElement(element) {
        const categoryName = element.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const detailsHTML = `<h3>${element.name} (${element.symbol})</h3><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; text-align: left; padding: 10px; font-size: 1.1em;"><div><strong>Número Atômico:</strong> ${element.number}</div><div><strong>Massa Atômica:</strong> ${element.mass || 'N/A'} u</div><div><strong>Grupo:</strong> ${element.group}</div><div><strong>Período:</strong> ${element.period > 7 ? element.period - 3 : element.period}</div><div><strong>Categoria:</strong> ${categoryName}</div></div>`;
        modalDetailsContent.innerHTML = detailsHTML;
        modalOverlay.classList.remove('hidden');
        setTimeout(() => modalOverlay.classList.add('visible'), 10);
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
        setTimeout(() => modalOverlay.classList.add('hidden'), 300);
    }

    // --- MÓDULOS 3 & 4: FERRAMENTAS ---
    function calculateMolarMass(formula) {
        const elements = parseMolecularFormula(formula);
        let totalMass = 0;
        let breakdown = [];
        let error = false;
        for (const [symbol, count] of Object.entries(elements)) {
            const element = ELEMENTS_DATA.find(e => e.symbol === symbol);
            if (element && element.mass) {
                const mass = element.mass * count;
                totalMass += mass;
                breakdown.push(`${count}×${symbol} = ${count}×${element.mass.toFixed(3)} = ${mass.toFixed(3)} g/mol`);
            } else {
                error = true;
                break;
            }
        }
        if (error || Object.keys(elements).length === 0) {
            return { totalMass: 0, breakdown: [] };
        }
        return { totalMass: totalMass.toFixed(3), breakdown };
    }

    // --- MÓDULO 5: QUIZ ---
    function startQuiz() {
        currentQuiz.questions = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
        currentQuiz.questionIndex = 0;
        currentQuiz.score = 0;
        currentQuiz.answered = false;
        document.getElementById('start-quiz').classList.add('hidden');
        document.getElementById('quiz-final-result').classList.add('hidden');
        document.getElementById('quiz-header').style.display = 'flex';
        document.getElementById('quiz-question').style.display = 'block';
        document.getElementById('quiz-options').style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        const question = currentQuiz.questions[currentQuiz.questionIndex];
        document.getElementById('quiz-progress').textContent = `Questão ${currentQuiz.questionIndex + 1} de ${currentQuiz.questions.length}`;
        document.getElementById('quiz-score').textContent = `Pontuação: ${currentQuiz.score}`;
        document.getElementById('quiz-question').innerHTML = question.question;
        const optionsContainer = document.getElementById('quiz-options');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.innerHTML = option;
            optionDiv.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(optionDiv);
        });
        document.getElementById('quiz-feedback').classList.add('hidden');
        document.getElementById('next-question').classList.add('hidden');
        currentQuiz.answered = false;
    }

    function selectAnswer(selectedIndex) {
        if (currentQuiz.answered) return;
        currentQuiz.answered = true;
        const question = currentQuiz.questions[currentQuiz.questionIndex];
        const options = document.querySelectorAll('.quiz-option');
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        const isCorrect = selectedIndex === question.correct;
        if (isCorrect) {
            currentQuiz.score += 10;
            document.getElementById('quiz-score').textContent = `Pontuação: ${currentQuiz.score}`;
        }
        const feedback = document.getElementById('quiz-feedback');
        feedback.innerHTML = `<div style="color: ${isCorrect ? '#10b981' : '#ef4444'}; font-weight: 600; margin-bottom: 10px;">${isCorrect ? '✅ Correto!' : '❌ Incorreto!'}</div><div>${question.explanation}</div>`;
        feedback.classList.remove('hidden');
        if (currentQuiz.questionIndex < currentQuiz.questions.length - 1) {
            document.getElementById('next-question').classList.remove('hidden');
        } else {
            setTimeout(endQuiz, 2500);
        }
    }

    function nextQuestion() {
        currentQuiz.questionIndex++;
        showQuestion();
    }

    function endQuiz() {
        const finalScore = currentQuiz.score;
        const maxScore = currentQuiz.questions.length * 10;
        const percentage = (finalScore / maxScore * 100).toFixed(0);
        document.getElementById('final-score-text').textContent = `${finalScore}/${maxScore} pontos (${percentage}%)`;
        document.getElementById('quiz-final-result').classList.remove('hidden');
        document.getElementById('quiz-header').style.display = 'none';
        document.getElementById('quiz-question').style.display = 'none';
        document.getElementById('quiz-options').style.display = 'none';
        document.getElementById('quiz-feedback').classList.add('hidden');
        document.getElementById('next-question').classList.add('hidden');
    }

    function restartQuiz() {
        document.getElementById('quiz-final-result').classList.add('hidden');
        document.getElementById('start-quiz').classList.remove('hidden');
        document.getElementById('quiz-progress').textContent = `Questão 1 de ${QUIZ_QUESTIONS.length}`;
        document.getElementById('quiz-score').textContent = `Pontuação: 0`;
        document.getElementById('quiz-question').innerHTML = '';
        document.getElementById('quiz-options').innerHTML = '';
    }

    // --- MÓDULO 6: BALANCEAMENTO ---
    function loadNewEquation() {
        const equationContainer = document.getElementById('equation-container');
        currentEquation = equations[Math.floor(Math.random() * equations.length)];
        equationContainer.innerHTML = '';
        const createSideHTML = (side) => {
            let html = '';
            const formulas = Object.keys(side);
            formulas.forEach((formula, index) => {
                html += `<div class="equation-component"><input type="number" class="coefficient-input" min="1" value="1" data-formula="${formula}"> <span>${formula}</span></div>`;
                if (index < formulas.length - 1) {
                    html += ' <span>+</span> ';
                }
            });
            return html;
        };
        equationContainer.innerHTML = createSideHTML(currentEquation.reactants);
        equationContainer.innerHTML += ' <span>→</span> ';
        equationContainer.innerHTML += createSideHTML(currentEquation.products);
        document.querySelectorAll('.coefficient-input').forEach(input => {
            input.addEventListener('input', updateBalanceCount);
        });
        document.getElementById('balance-feedback').classList.add('hidden');
        updateBalanceCount();
    }

    function updateBalanceCount() {
        const counts = { reactants: {}, products: {} };
        let isBalanced = true;
        const countSideAtoms = (side) => {
            const sideAtoms = {};
            document.querySelectorAll(`#equation-container input[data-formula]`).forEach(input => {
                const formula = input.dataset.formula;
                if (currentEquation[side] && currentEquation[side][formula]) {
                    const coefficient = parseInt(input.value) || 0;
                    const atomsInFormula = parseMolecularFormula(formula);
                    for (const [atom, count] of Object.entries(atomsInFormula)) {
                        sideAtoms[atom] = (sideAtoms[atom] || 0) + (count * coefficient);
                    }
                }
            });
            return sideAtoms;
        };
        counts.reactants = countSideAtoms('reactants');
        counts.products = countSideAtoms('products');
        const displayCounts = (div, sideCounts) => {
            let html = `<h3>${div.id === 'reactants-count' ? 'Reagentes' : 'Produtos'}</h3>`;
            const sortedAtoms = Object.keys(sideCounts).sort();
            for (const atom of sortedAtoms) {
                html += `<p>${atom}: <strong>${sideCounts[atom]}</strong></p>`;
            }
            div.innerHTML = html;
        };
        displayCounts(document.getElementById('reactants-count'), counts.reactants);
        displayCounts(document.getElementById('products-count'), counts.products);
        const allAtoms = new Set([...Object.keys(counts.reactants), ...Object.keys(counts.products)]);
        if (allAtoms.size === 0) isBalanced = false;
        allAtoms.forEach(atom => {
            if ((counts.reactants[atom] || 0) !== (counts.products[atom] || 0)) {
                isBalanced = false;
            }
        });
        const balanceFeedbackDiv = document.getElementById('balance-feedback');
        if (isBalanced) {
            balanceFeedbackDiv.innerHTML = '🎉 Equação Balanceada! Parabéns! 🎉';
            balanceFeedbackDiv.style.background = 'var(--success-gradient)';
            balanceFeedbackDiv.classList.remove('hidden');
        } else {
            balanceFeedbackDiv.classList.add('hidden');
        }
    }

    // --- MÓDULO 7: LIGAÇÕES QUÍMICAS ---
    function generateMiniPeriodicTable() {
        const miniPeriodicTable = document.getElementById('mini-periodic-table');
        if (!miniPeriodicTable) return;
        miniPeriodicTable.innerHTML = '';
        ELEMENTS_DATA.forEach(element => {
            if (element.period <= 7) { // Exclui Lantanídeos/Actinídeos da mini-tabela
                const tile = document.createElement('div');
                tile.className = `element-tile ${element.category}`;
                tile.innerHTML = `<div class="atomic-number">${element.number}</div><div class="symbol">${element.symbol}</div>`;
                tile.addEventListener('click', () => selectAtomForBonding(element));
                miniPeriodicTable.appendChild(tile);
            }
        });
    }

    function selectAtomForBonding(element) {
        if (!selectedAtomsForBonding[0]) {
            selectedAtomsForBonding[0] = element;
        } else if (!selectedAtomsForBonding[1]) {
            selectedAtomsForBonding[1] = element;
        } else {
            selectedAtomsForBonding[0] = selectedAtomsForBonding[1];
            selectedAtomsForBonding[1] = element;
        }
        updateAtomSlots();
    }

    function updateAtomSlots() {
        const slots = [document.getElementById('atom-slot-1'), document.getElementById('atom-slot-2')];
        slots.forEach((slot, index) => {
            const atom = selectedAtomsForBonding[index];
            if (atom) {
                slot.innerHTML = `<div class="symbol">${atom.symbol}</div><div class="name">${atom.name}</div>`;
                slot.classList.add('filled');
            } else {
                slot.innerHTML = `<p>Elemento ${index + 1}</p>`;
                slot.classList.remove('filled');
            }
        });
    }

    function determineAndShowBond() {
        const [atom1, atom2] = selectedAtomsForBonding;
        const bondResultDiv = document.getElementById('bond-result');
        if (!atom1 || !atom2) {
            bondResultDiv.innerHTML = 'Por favor, selecione dois elementos para combinar.';
            bondResultDiv.classList.remove('hidden');
            return;
        }
        if (atom1.category === 'noble-gas' || atom2.category === 'noble-gas') {
            bondResultDiv.innerHTML = `<h4>Ligação Improvável</h4><p>Gases nobres como <strong>${atom1.name}</strong> e <strong>${atom2.name}</strong> são muito estáveis e raramente formam ligações químicas.</p>`;
            bondResultDiv.classList.remove('hidden');
            return;
        }
        const electronegativity1 = atom1.electronegativity || 1.0; // Default para elementos sem dados
        const electronegativity2 = atom2.electronegativity || 1.0;
        const diff = Math.abs(electronegativity1 - electronegativity2);
        let resultHTML = '';
        if (diff >= 1.7) {
            const metal = electronegativity1 < electronegativity2 ? atom1 : atom2;
            const nonmetal = electronegativity1 > electronegativity2 ? atom1 : atom2;
            resultHTML = `<h4><i class="fas fa-atom"></i> Ligação Iônica</h4><p>A diferença de eletronegatividade (${diff.toFixed(2)}) é alta. O <strong>${metal.name}</strong> (metal) tende a <strong>doar</strong> elétrons para o <strong>${nonmetal.name}</strong> (ametal).</p><p>Isso forma íons com cargas opostas (cátion e ânion) que se atraem, criando a ligação iônica.</p><p><strong>Fórmula provável:</strong> ${metal.symbol}${nonmetal.symbol}</p>`;
        } else {
            resultHTML = `<h4><i class="fas fa-share-alt"></i> Ligação Covalente</h4><p>A diferença de eletronegatividade (${diff.toFixed(2)}) é baixa. Os átomos de <strong>${atom1.name}</strong> e <strong>${atom2.name}</strong> tendem a <strong>compartilhar</strong> elétrons.</p><p>Este compartilhamento de pares de elétrons forma uma molécula estável.</p><p><strong>Fórmula provável:</strong> ${atom1.symbol}${atom2.symbol}</p>`;
        }
        bondResultDiv.innerHTML = resultHTML;
        bondResultDiv.classList.remove('hidden');
    }

    function resetBondSimulator() {
        selectedAtomsForBonding = [null, null];
        updateAtomSlots();
        document.getElementById('bond-result').classList.add('hidden');
        document.getElementById('bond-result').innerHTML = '';
    }

    function simulateReaction() {
        const input = document.getElementById('reaction-input').value;
        const resultDiv = document.getElementById('reaction-result');
        if (!input.includes('->')) {
            resultDiv.innerHTML = 'Formato da reação inválido. Use "->" para separar reagentes e produtos.';
            resultDiv.classList.remove('hidden');
            return;
        }
        const [reactantsStr, productsStr] = input.split('->').map(s => s.trim());
        const parseSide = (sideStr) => {
            const components = sideStr.split('+').map(s => s.trim());
            const atomCounts = {};
            for (const component of components) {
                const match = component.match(/^(\d*)(\D.*)/);
                if (!match) continue;
                const coefficient = parseInt(match[1]) || 1;
                const formula = match[2];
                const atomsInFormula = parseMolecularFormula(formula);
                for (const [atom, count] of Object.entries(atomsInFormula)) {
                    atomCounts[atom] = (atomCounts[atom] || 0) + (count * coefficient);
                }
            }
            return atomCounts;
        };
        const reactantAtoms = parseSide(reactantsStr);
        const productAtoms = parseSide(productsStr);
        const allAtoms = new Set([...Object.keys(reactantAtoms), ...Object.keys(productAtoms)]);
        let isBalanced = true;
        let resultHTML = '<h4>Análise da Reação:</h4>';
        resultHTML += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">';
        resultHTML += '<div><strong>Reagentes:</strong><ul>';
        Object.keys(reactantAtoms).sort().forEach(atom => {
            resultHTML += `<li>${atom}: ${reactantAtoms[atom]}</li>`;
        });
        resultHTML += '</ul></div>';
        resultHTML += '<div><strong>Produtos:</strong><ul>';
        Object.keys(productAtoms).sort().forEach(atom => {
            resultHTML += `<li>${atom}: ${productAtoms[atom]}</li>`;
        });
        resultHTML += '</ul></div></div>';
        allAtoms.forEach(atom => {
            if ((reactantAtoms[atom] || 0) !== (productAtoms[atom] || 0)) {
                isBalanced = false;
            }
        });
        if (isBalanced && allAtoms.size > 0) {
            resultHTML += '<p style="margin-top: 20px; color: #10b981; font-weight: bold;">✅ A equação está balanceada!</p>';
        } else {
            resultHTML += '<p style="margin-top: 20px; color: #ef4444; font-weight: bold;">❌ A equação NÃO está balanceada.</p>';
        }
        resultDiv.innerHTML = resultHTML;
        resultDiv.classList.remove('hidden');
    }

    // --- MÓDULO 8: GLOSSÁRIO ---
    function populateGlossary(filter = '') {
        const container = document.getElementById('glossary-container');
        if (!container) return;
        container.innerHTML = '';
        
        const lowerCaseFilter = filter.toLowerCase();
        const filteredTerms = Object.keys(GLOSSARY_DATA).filter(term => 
            term.toLowerCase().includes(lowerCaseFilter)
        ).sort();

        if (filteredTerms.length === 0) {
            container.innerHTML = `<div class="no-results">Nenhum termo encontrado para "${filter}"</div>`;
            return;
        }

        for (const term of filteredTerms) {
            const termDiv = document.createElement('div');
            termDiv.className = 'glossary-term';
            termDiv.textContent = term;
            termDiv.addEventListener('click', () => showGlossaryTerm(term));
            container.appendChild(termDiv);
        }
    }

    function showGlossaryTerm(term) {
        const data = GLOSSARY_DATA[term];
        if (!data) return;
        const detailsHTML = `
            <h4>${term}</h4>
            <p>${data.definition}</p>
            <p class="example"><strong>Exemplo:</strong> ${data.example}</p>
        `;
        modalDetailsContent.innerHTML = detailsHTML;
        modalOverlay.classList.remove('hidden');
        setTimeout(() => modalOverlay.classList.add('visible'), 10);
    }
    
    // --- INICIALIZAÇÃO E EVENT LISTENERS ---
    function initialize() {
        // Gerar conteúdo dinâmico
        generatePeriodicTable();
        generateLegend();
        generateMiniPeriodicTable();
        populateGlossary();
        loadNewEquation();
        
        // Configurar todos os ouvintes de eventos
        // Navegação Principal
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.addEventListener('click', () => {
                const moduleId = btn.id.replace('nav-', '') + '-content';
                showModule(moduleId);
            });
        });
        
        // Fechamento da Modal
        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (event) => { if (event.target === modalOverlay) closeModal(); });

        // Módulo 1
        document.getElementById('add-proton').addEventListener('click', () => { currentAtom.protons++; updateAtomDisplay(); });
        document.getElementById('remove-proton').addEventListener('click', () => { if (currentAtom.protons > 0) currentAtom.protons--; updateAtomDisplay(); });
        document.getElementById('add-neutron').addEventListener('click', () => { currentAtom.neutrons++; updateAtomDisplay(); });
        document.getElementById('remove-neutron').addEventListener('click', () => { if (currentAtom.neutrons > 0) currentAtom.neutrons--; updateAtomDisplay(); });
        document.getElementById('add-electron').addEventListener('click', () => { currentAtom.electrons++; updateAtomDisplay(); });
        document.getElementById('remove-electron').addEventListener('click', () => { if (currentAtom.electrons > 0) currentAtom.electrons--; updateAtomDisplay(); });
        document.getElementById('reset-button').addEventListener('click', () => { currentAtom = { protons: 0, neutrons: 0, electrons: 0 }; updateAtomDisplay(); });
        document.getElementById('random-element').addEventListener('click', () => {
            const elementsFromMainTable = ELEMENTS_DATA.filter(el => el.period <= 7 && el.mass);
            const randomEl = elementsFromMainTable[Math.floor(Math.random() * elementsFromMainTable.length)];
            if(randomEl) {
                currentAtom.protons = randomEl.number;
                currentAtom.electrons = randomEl.number;
                currentAtom.neutrons = Math.round(randomEl.mass) - randomEl.number;
                updateAtomDisplay();
            }
        });
        document.getElementById('toggle-explanation-btn').addEventListener('click', (e) => {
            const panel = document.getElementById('explanation-panel');
            if (panel.classList.contains('hidden')) {
                const { protons, neutrons, electrons } = currentAtom;
                const element = getElementByProtons(protons);
                let explanation = '<h4>Análise do Átomo Atual:</h4>';
                explanation += `<p><strong>Prótons (p⁺):</strong> ${protons}. O número de prótons define o elemento químico. Com ${protons} prótons, este é um átomo de <strong>${element ? element.name : 'um elemento desconhecido'}</strong>.</p>`;
                explanation += `<p><strong>Nêutrons (n⁰):</strong> ${neutrons}. Prótons e nêutrons formam o núcleo. A soma deles (${protons + neutrons}) é o <strong>número de massa</strong>, que define o isótopo do elemento.</p>`;
                explanation += `<p><strong>Elétrons (e⁻):</strong> ${electrons}. Elétrons orbitam o núcleo. A diferença entre prótons e elétrons define a <strong>carga elétrica</strong>.</p>`;
                const charge = protons - electrons;
                if (charge === 0) {
                    explanation += '<p>Como o número de prótons é igual ao de elétrons, o átomo é <strong>eletricamente neutro</strong>.</p>';
                } else if (charge > 0) {
                    explanation += `<p>Há mais prótons que elétrons, resultando em uma carga positiva (+${charge}). Isso é um <strong>cátion</strong>.</p>`;
                } else {
                    explanation += `<p>Há mais elétrons que prótons, resultando em uma carga negativa (${charge}). Isso é um <strong>ânion</strong>.</p>`;
                }
                panel.innerHTML = explanation;
                panel.classList.remove('hidden');
                e.target.innerHTML = '<i class="fas fa-lightbulb"></i> Esconder Explicação';
            } else {
                panel.classList.add('hidden');
                e.target.innerHTML = '<i class="fas fa-lightbulb"></i> Mostrar Explicação';
            }
        });

        // Módulos 3 e 4
        document.getElementById('classify-substance').addEventListener('click', () => {
            const input = document.getElementById('substance-input').value.toLowerCase().trim();
            const resultDiv = document.getElementById('substance-result');
            const substance = SUBSTANCE_DATABASE[input];
            resultDiv.innerHTML = substance ? `<strong>${substance.formula} (${substance.name}):</strong> é uma <strong>${substance.type}</strong>.` : 'Substância não encontrada.';
            resultDiv.classList.remove('hidden');
        });
        document.getElementById('convert-units').addEventListener('click', () => {
            const value = parseFloat(document.getElementById('conversion-value').value);
            const fromUnit = document.getElementById('conversion-from').value;
            const toUnit = document.getElementById('conversion-to').value;
            const resultDiv = document.getElementById('conversion-result');
            if(isNaN(value)) { resultDiv.innerHTML = 'Valor inválido.'; resultDiv.classList.remove('hidden'); return; }
            const toGrams = { 'g': 1, 'kg': 1000, 'mg': 0.001 };
            const fromGrams = { 'g': 1, 'kg': 0.001, 'mg': 1000 };
            const valueInGrams = value * toGrams[fromUnit];
            const finalValue = valueInGrams * fromGrams[toUnit];
            resultDiv.innerHTML = `${value} ${fromUnit} = <strong>${finalValue.toPrecision(4)} ${toUnit}</strong>`;
            resultDiv.classList.remove('hidden');
        });
        document.getElementById('calculate-molar-mass').addEventListener('click', () => {
            const formula = document.getElementById('formula-input').value.trim();
            const resultDiv = document.getElementById('molar-mass-result');
            const result = calculateMolarMass(formula);
            resultDiv.innerHTML = result.totalMass > 0 ? `<strong>Massa Molar de ${formula}: ${result.totalMass} g/mol</strong><br><small><i>${result.breakdown.join('<br>')}</i></small>` : `Fórmula inválida.`;
            resultDiv.classList.remove('hidden');
        });
        document.getElementById('calculate-stoichiometry').addEventListener('click', () => {
            const reactantFormula = document.getElementById('reactant-formula').value.trim();
            const productFormula = document.getElementById('product-formula').value.trim();
            const reactantMass = parseFloat(document.getElementById('reactant-mass').value);
            const resultDiv = document.getElementById('stoichiometry-result');
            if (!reactantFormula || !productFormula || isNaN(reactantMass)) { resultDiv.innerHTML = 'Preencha todos os campos.'; resultDiv.classList.remove('hidden'); return; }
            const reactantMolarMass = parseFloat(calculateMolarMass(reactantFormula).totalMass);
            const productMolarMass = parseFloat(calculateMolarMass(productFormula).totalMass);
            if (reactantMolarMass === 0 || productMolarMass === 0) { resultDiv.innerHTML = 'Fórmulas inválidas.'; resultDiv.classList.remove('hidden'); return; }
            const reactantMoles = reactantMass / reactantMolarMass;
            const productMass = reactantMoles * productMolarMass;
            resultDiv.innerHTML = `Com proporção 1:1, ${reactantMass.toFixed(2)}g de ${reactantFormula} produzem <strong>${productMass.toFixed(2)}g</strong> de ${productFormula}.`;
            resultDiv.classList.remove('hidden');
        });
        document.getElementById('simulate-reaction').addEventListener('click', simulateReaction);

        // Módulo 5: Quiz
        document.getElementById('start-quiz').addEventListener('click', startQuiz);
        document.getElementById('next-question').addEventListener('click', nextQuestion);
        document.getElementById('restart-quiz').addEventListener('click', restartQuiz);

        // Módulo 6: Balanceamento
        document.getElementById('new-equation-btn').addEventListener('click', loadNewEquation);

        // Módulo 7: Ligações Químicas
        document.getElementById('combine-atoms-btn').addEventListener('click', determineAndShowBond);
        document.getElementById('reset-bond-btn').addEventListener('click', resetBondSimulator);

        // Módulo 8: Glossário
        document.getElementById('glossary-search-input').addEventListener('input', (e) => {
            populateGlossary(e.target.value);
        });

        // Exibir o primeiro módulo e atualizar a tela inicial
        showModule('module1-content');
        updateAtomDisplay();
    }

    initialize();
});
