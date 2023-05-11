var x = 5;
var y = 4;
let z = 2;

console.log(x+y);

var d = new Date();
console.log(d);
var y = d.getFullYear() ;

console.log(y);

var Alon = {
    age : 21, 
    family : "Levy",
    Time : new Date()
    } ;

console.log(Alon.Time);

var H = d.getHours();
 H = 22;

 console.log(H);
if (H < 6) {
    document.getElementById("greetingH1").innerHTML = "ZZZZ";
} 
else if (H <12) {
    document.getElementById("greetingH1").innerHTML = "Good Morning";
document.getElementsByTagName("body").classList.remove("NightStyle")//no need
}

else if (H < 16 ){
    document.getElementById("greetingH1").innerHTML = "Good Afternoon";

}
 else if (H < 20) {
    document.getElementById("greetingH1").innerHTML = "Good Evening";
document.getElementById("body").classList.add("NightStyle");
 }
else {
    document.getElementById("greetingH1").innerHTML = "Good NIght";
    document.getElementById("body").classList.add("NightStyle");
}

var carsImg = [
    "https://images.hindustantimes.com/auto/img/2022/08/11/1600x900/Medium-16676-MaseratiGhibliHybrid_1623992202002_1660214514631_1660214514631.jpg",
    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2022/06_20/gallery/sian_05_m.jpg"
 ]
 
function TimeFunc() {
    document.getElementById("Time").innerHTML = text;
    document.getElementsByTagName("button")[0].innerHTML = "that's it"; //no need
    document.getElementById("btn").innerHTML = "that's it boy";
    for (let i = 0; i < carsImg.length; i++) {
        document.getElementById("IMG_cars").src = carsImg[i];
    }
}

var cars = ["mazda", "volvo", "ferari", "mazarati", "lamburgini"];
var l = cars.length;
console.log(cars[l-1]);
console.log(cars[2]);

var text = "";
for (let i=0; i<l; i++){
    text += cars[i] + "<br>";
    console.log(text);
}




