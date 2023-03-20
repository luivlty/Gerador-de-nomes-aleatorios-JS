var female_names = [
    "Helena",
    "Alice",
    "Laura",
    "Manuela",
    "Sophia",
    "Isabella",
    "Eloá",
    "Júlia",
    "Isis",
    "Giovanna",
    "Isabelly",
    "Mariana",
    "Emilly",
    "Ashley",
    "Gal",
    "Emma",
    "Mia",
    "Hannah",
    "Evelyn",
    "Chloe",
    "Grace",
    "Zara",
    "Gabrielle",
    "Lena",
    "Bertha",
    "Catalina",
    "Bianca",
    "Wendy"
];

var masculine_names = [
    "Arthur",
    "Benjamin",
    "Matheus",
    "Gabriel",
    "Lucas",
    "Nicolas",
    "Lucca",
    "Rafael",
    "Bento",
    "Eduardo",
    "Vitor",
    "Raul",
    "Ronaldo",
    "Leon",
    "Ethan",
    "Kai",
    "Samir",
    "Anthony",
    "Felix",
    "Ivan",
    "Alexander",
    "Théo",
    "Vincent"
];

var last_names = [
    "Weber",
    "Barker",
    "Costello",
    "Donovan",
    "Dempsey",
    "Duncan",
    "Faulkner",
    "Fletcher",
    "Ramsey",
    "Silva",
    "Matias",
    "Reese",
    "Walsh",
    "Sinclair",
    "McLaughlin",
    "McCracken",
    "Conway",
    "Barr",
    "Atkinson",
    "Ballard"
]

function random_female_name(){
    var random_name = female_names[Math.floor(Math.random() * female_names.length)];
    var random_last_name = last_names[Math.floor(Math.random() * last_names.length)];

    document.getElementById("input_femaleGenerator").value = random_name;
    document.getElementById("input_last_name_fem").value = random_last_name;

    document.getElementById("full_fem_name").innerHTML = `Nome completo sugerido: <b>${random_name} ${random_last_name}<b>`
};

function random_male_name(){
    var random_name = masculine_names[Math.floor(Math.random() * masculine_names.length)];
    var random_last_name = last_names[Math.floor(Math.random() * last_names.length)];

    document.getElementById("input_maleGenerator").value = random_name;
    document.getElementById("input_last_name_male").value = random_last_name;

    document.getElementById("full_male_name").innerHTML = `Nome completo sugerido: <b>${random_name} ${random_last_name}<b>`
};