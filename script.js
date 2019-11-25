var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'Batcave',
            'Maubeuge', 'un réacteur nucléaire', 'Martinique', 'Balamb garden',
            "enfer", 'Montbeliard', 'Namek', 'Londres', 'une île', 'dans une cave',
            'au Caire', 'New York', 'Le Tampon', 'Berlaimont',];

var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28,
                    20, 37.2, -30, 35, "hot", 27, -100, 55 ];
console.log(temperatures);

var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson",
            "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V",
            "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var objets = ['valise', 'poivrier connecté', 'épée', 'cahier', 'pneu', 'table', 'godsabre',
            'truelle', 'madeleine', 'trident', 'pull rose', 'pc', 'tisonnier', 'guimbarde',
            'chandelier', 'verre', 'table bancale', 'arbre', 'souris', 'dague'];

var verbes = ['danser' ,'frapper' ,'lubrifier', 'trikiter', 'procrastiner', 'foutre', 'prendre',
            'nager', 'recoudre', 'punir', 'attaquer', 'coder', 'jouer', 'manger', 'avoir'];


var boutonGenerer = document.getElementById('boutonGenerer');

var genre =" ";
var ou = " ";

function generer() {
boutonGenerer.addEventListener('click', function () {
    var paragraphe = document.createElement("p");
    paragraphe.className = "para";


//Noms
var numRandomNoms = Math.floor(Math.random()*noms.length);
var motRandomNoms = noms[numRandomNoms];
paragraphe.innerHTML+="Aujourd'hui " +motRandomNoms;
document.getElementById('histoire2').appendChild(paragraphe);

//Lieux
var numRandomLieux = Math.floor(Math.random()*lieux.length);
var motRandomLieux = lieux[numRandomLieux];

    switch (motRandomLieux) {

        case "Tombouctou":
        case "Lille":
        case "Montcuq":
        case "Batcave":
        case "Maubeuge":
        case "Sataya":
        case "Paris":
        case "Balamb garden":
        case "Montbeliard":
        case "Namek":
        case "Londres":
        case "New York":
        case "Le Tampon":
        case "Berlaimont":
            motRandomLieux= ou+"à "+motRandomLieux;
            break;
        case "Martinique":
        case "enfer":
            motRandomLieux= ou+"en "+motRandomLieux;
            break;
        case "un réacteur nucléaire":
        case "une cave":
            motRandomLieux= ou+"dans "+motRandomLieux;
            break;
        case "une île":
            motRandomLieux= ou+"sur "+motRandomLieux;
            break;
        case "au Caire":
            motRandomLieux= ou+" "+motRandomLieux;
            break;
        default:
            break;
    }


paragraphe.innerHTML+=" est " +motRandomLieux;
document.getElementById('histoire2').appendChild(paragraphe);

//Températures
var numRandomTemp = Math.floor(Math.random()*temperatures.length);
var motRandomTemp = temperatures[numRandomTemp];

switch (motRandomTemp) {
    case "hot":
        motRandomTemp="chaud";
        break;
    default:
        motRandomTemp=motRandomTemp+" degrés";
        break
}

paragraphe.innerHTML+=" où il fait "+motRandomTemp+".";
document.getElementById('histoire2').appendChild(paragraphe);

//Verbes
var numRandomVerbes = Math.floor(Math.random()*verbes.length);
var motRandomVerbes = verbes[numRandomVerbes];

    switch (motRandomNoms){
        case "Babe":
        case "Paul":
        case "Clodomir":
        case "George":
        case "Homer-Simpson":
        case"Quintus":
        case "Styvens":
        case "Keen-V":
        case "Kylian":
        case "Georges-Clooney":
        case "Ludovic":
        case "Yoshi":
        case "Lucifer":
        case "Pumba":
        case "Cayde-6":
        case "Poutine":
        case "Squall":
            motRandomNoms=" Il ";
            break;
        case "Brigitte":
        case "Anais":
        case "Eglantine":
            motRandomNoms=" Elle ";
        default:
            break;
    }


switch (motRandomVerbes) {
    case "danser": motRandomVerbes="danse";
        break;
    case "frapper": motRandomVerbes="frappe des mains";
        break;
    case "lubrifier": motRandomVerbes="lubrifie";
        break;
    case "trikiter": motRandomVerbes="trikite";
        break;
    case "procrastiner": motRandomVerbes="procrastine";
        break;
    case "foutre":motRandomVerbes="s'en fout";
        break;
    case "prendre": motRandomVerbes="prend le bus";
        break;
    case "nager": motRandomVerbes="nage";
        break;
    case "recoudre": motRandomVerbes="recoud";
        break;
    case "punir": motRandomVerbes="ne va pas être puni(e)";
        break;
    case "attaquer": motRandomVerbes="attaque un sprint";
        break;
    case "coder": motRandomVerbes="code";
        break;
    case "jouer": motRandomVerbes="joue";
        break;
    case "manger": motRandomVerbes="mange";
        break;
    case "avoir": motRandomVerbes="a faim";
        break;

    default:
        break;
}

paragraphe.innerHTML+= motRandomNoms + motRandomVerbes;
document.getElementById('histoire2').appendChild(paragraphe);

//Objets
var numRandomObjets = Math.floor(Math.random()*objets.length);
var motRandomObjets = objets[numRandomObjets];

    switch (motRandomObjets) {

        case "poivrier connecté":
        case "cahier":
        case "pneu":
        case "godsabre":
        case "trident":
        case "pull rose":
        case "pc":
        case "tisonnier":
        case "chandelier":
        case "verre":
        case "arbre":

            motRandomObjets= genre+"un "+motRandomObjets;
            break;

        case "valise":
        case "épée":
        case "table":
        case "truelle":
        case "madeleine":
        case "guimbarde":
        case "table bancale":
        case "souris":
        case "dague":
            motRandomObjets= genre+"une "+motRandomObjets;
            break;
        default:
            break;
    }
    paragraphe.innerHTML+=" et achète "+ motRandomObjets+".";

document.getElementById('histoire2').appendChild(paragraphe);


})
}
generer();
