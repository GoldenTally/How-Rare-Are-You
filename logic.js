






const height = document.getElementById("height");
let fheight;
const size = document.getElementById("Size");
const IQ = document.getElementById("IQ");
const submit = document.getElementById("submitbutton")
let male = true;


const haircolors = [{name: "Black", rare: 1.3, rarep: .75}, {name: "Brown", rare: 5, rarep: .2}, {name: "Blonde", rare: 50, rarep: .002}, {name: "Red", rare: 100, rarep: .001}, {name: "Grey", rare:2,rarep:.5 }, {name: "White", rare: 10000, rarep: .001}, {name: "Other",rare:1, rarep: 1}];
const races = [{name: "White", rare: 6.25, rarep: .16}, {name: "Black", rare:5.88, rarep:.17}, {name: "Asian", rare:5.3, rarep:0.19},{name: "Indian", rare:4, rarep:.25}, {name: "Hispanic", rare:12.5, rarep:.08}, {name: "Middle Eastern", rare: 10, rarep: .1}, {name: "Native American", rare: 17, rarep: 0.06}, {name: "Pacific Islander", rare: 160, rarep: .006}, {name: "Other", rare: 100, rarep:.01}];
const eyecolors = [{name: "Brown", rare: 1.27, rarep: 0.79}, {name: "Blue", rare: 12.5, rarep: 0.08}, {name: "Green", rare: 50, rarep: 0.02}, {name: "Hazel", rare: 20, rarep: 0.05}, {name: "Gray", rare:100, rarep:.01}, {name: "Amber", rare: 20, rarep: .05}, {name: "Other", rare:200, rarep: .005}];




function cycle(value1){
    value1 = Math.abs(value1);
if(value1 <= 0){
    let rare = 1;
    let rarep = .50;
    return [rare, rarep];
}

else if(value1 <= 1){
    let rare = 3;
    let rarep = .304;
    return [rare, rarep];
}

else if(value1 <= 2 && value1 > 1){
    let rare = 14;
    let rarep = .07;
    return [rare, rarep];
}

else if(value1 <= 3 && value1 > 2){
    let rare = 233;
    let rarep = .004280;
    return [rare, rarep];
}

else if(value1 <= 4 && value1 > 3){
    let rare = 33000;
    let rarep = 0.00003;
    return [rare, rarep];
}


else if(value1 <= 5 && value1 > 4){
    let rare = 3480000;
    let rarep = .000000287;
    return [rare, rarep];
}

else if(value1 <= 6 && value1> 5){
    let rare = 101000000;
    let rarep = .00000000987;
    return [rare, rarep];
}

else if(value1 <= 7 && value1 > 6){
    let rare = 780000000;     
    let rarep = .000000000128;
    return [rare, rarep];
}

else{
    console.log("failed")
}
}





function filter(array, filt){
    return array.filter(e => e.name === filt)[0] || {rare: 1, rarep: 1};
}


function organize(rare, rarep){
    return [rare, rarep];
}

submit.onclick = function(){



const n = [{name: "height", hgt: height, y: 68, x: 2.9 }, {name: "iq", iqc: IQ, y: 100, x: 15}, {name: "size", sze: size,y: 26, x: 7}]

function equation(vari){
    const value = 
        vari.hgt?.value || vari.iqc?.value || vari.sze?.value || 0;


    return (Number(value-vari.y)/vari.x);
}
const SD = n.map(equation).filter(Number.isFinite);


const rarityv = SD.map(z => cycle(z))
const mult = rarityv.map(r => r[1]).reduce((a,b) => a*b, 1);
const onein = 1/mult;

console.log(`1 in ${onein.toLocaleString()}`)

console.log(mult)


console.log(rarityv)



console.log(SD)


const haircolor = document.getElementById("Hair").value;
const race = document.getElementById("Race").value;
const eyecolor = document.getElementById("Eye").value;


const hairdata = filter(haircolors, haircolor);
const racedata = filter(races, race);
const eyedata = filter(eyecolors, eyecolor);


const hairr = organize(hairdata.rare, hairdata.rarep);
const racer = organize(racedata.rare, racedata.rarep);
const eyer = organize(eyedata.rare, eyedata.rarep);


if (!haircolor || !race || !eyecolor){
    alert("Please select all options");
    return;
}

const mult2 = [hairr[1], racer[1], eyer[1]].reduce((a,b) => a*b, 1);
const onein2 = 1/mult2;
console.log(`1 in ${onein2.toLocaleString()}`)


const multall = mult * mult2;
const oneinall = 1/multall;
const percentall = multall * 100;
console.log(`percentage: ${percentall.toFixed(8)}%`)
console.log(`overall: 1 in ${oneinall.toLocaleString()}`)

console.log(height)
console.log(size)
console.log(IQ)

console.log(haircolor)
console.log(race)
console.log(eyecolor)

document.getElementById("Rarity").textContent = (`${oneinall.toLocaleString()}`);
document.getElementById("Rarity%").textContent = (`${percentall.toFixed(8)}%`)

    const box3 = document.querySelector(".Box3");





    const box1 = document.querySelector(".Box1");



    const button = document.querySelector(".Container button");





    submit.addEventListener('click', function handler() {
        box1.classList.remove("show");
        box3.classList.remove("show");
        button.classList.remove("show");

        void box1.offsetWidth;
        void box3.offsetWidth;
        void button.offsetWidth;

        box1.classList.add("show");
        box3.classList.add("show");
        button.classList.add("show");
        
        setTimeout(() => {
        box1.classList.remove("show");
        box3.classList.remove("show");
        button.classList.remove("show");
        }, 5000);
    });
}
