/*events-ref = http://www.w3schools.com/jsref/dom_obj_event.asp
radio Button events = http://www.w3schools.com/jsref/prop_radio_checked.asp
*/

/*BMI is diff from BMR = http://www.thecalculatorsite.com/health/bmr-calculator.php
my calculations are inLine with this = http://www.myfitnesspal.com/tools/bmr-calculator
*/

/*http://stackoverflow.com/questions/27849944/input-value-is-a-string-instead-of-a-number*/
//use element.valueAsNumber to fetch value as a number
//or multiply element.value by say '1' to convert it to number BEFORE using + otherwise it will catenete (NO addition).


//variables that need to be used by >1 fn. Otherwise u get NaN at times.
var result = 0;
var age = 0;
var feet = 0;
var inches = 0;
var pounds = 0;
var cm = 0;
var kg = 0;
var ageMet = 0;
var ht = 0;
var wt = 0;
var isItMetric = false;

//Event Listeners
document.getElementById("unit1").addEventListener("click", reset, false);
document.getElementById("unit1").addEventListener("click", showimperial, false);
document.getElementById("unit2").addEventListener("click", reset, false);
document.getElementById("unit2").addEventListener("click", showmetric, false);

document.getElementById("genderMale").addEventListener("click", calcMen, false);
document.getElementById("genderFemale").addEventListener("click", calcWomen, false);
window.addEventListener("load", reset, false);
for (var i = 0; i < 5; i++) {
    document.getElementsByName("activity")[i].addEventListener("change", activityLevel, false);
}




       
        function showimperial()
        {
        document.getElementById("metricDiv").style.visibility = "hidden";
        document.getElementById("metricDiv").style.opacity = "0";
        document.getElementById("imperialDiv").style.visibility = "visible";
        document.getElementById("imperialDiv").style.opacity = "1.0";
        isItMetric = false;
        }

           
        function showmetric()
        {
        document.getElementById("metricDiv").style.visibility = "visible";
        document.getElementById("metricDiv").style.opacity = "1.0";
        document.getElementById("imperialDiv").style.visibility = "hidden";
        document.getElementById("imperialDiv").style.opacity = "0";
        isItMetric = true;
        }





//Activity Level changes "result" - radio btn.
function activityLevel() {
    var x = [1.2, 1.375, 1.55, 1.725, 1.9];
    for (var i = 0; i < 5; i++) {
        var y = document.getElementsByName("activity")[i];
        if (y.checked)
        { document.getElementById("result").innerHTML = "Your Metabolic Rate is: "+ (result * x[i]).toFixed(0); }
    }
}




//Reset fields on page load: 
//get ele by tag dot att = http://www.w3schools.com/jsref/met_element_getattribute.asp
//setAttr = http://www.w3schools.com/jsref/met_element_setattribute.asp
//it's Element(s) pleural for TagName - for loop .Length property to change all = http://www.w3schools.com/jsref/met_document_getelementsbytagname.asp


function reset() {
    document.getElementById("result").innerHTML = "";

    /*var x = document.getElementsByTagName("input");
    for (var i = 0; i < x.length; i++) {
        x[i].value = 0;
        x[i].checked = false;
        
    }*/
    
    document.getElementById("myForm1").reset();
    document.getElementById("myForm2").reset();

    document.getElementById("divInConstant").style.visibility = "hidden";
    document.getElementById("divInConstant").style.opacity = "0";
}





//calculating functions
function calcMen() {

    document.getElementById("result").innerHTML = "";
    age = document.getElementById("age").valueAsNumber;
    ageMet = document.getElementById("ageMet").valueAsNumber;
    feet = document.getElementById("feet").valueAsNumber;
    inches = document.getElementById("inches");
    pounds = document.getElementById("pounds").valueAsNumber;
    ht = document.getElementById("ht").valueAsNumber;
    wt = document.getElementById("wt").valueAsNumber;
    
    
    if (isItMetric == false) {
        cm = 2.54 * (feet * 12 + inches.value * 1);
        kg = 0.453592 * pounds;
    }
    else {
        cm = ht;
        kg = wt;
        age = ageMet;
    }
    result = (10 * kg) + (6.25 * cm) - (5 * age) + 5;
    
    
    
    if (result <= 0 || isNaN(result) == true)
    { window.alert("Please Enter Valid Values") }
    else {
        document.getElementById("result").innerHTML = "Your BMR is: "+ result.toFixed(0);
        activityLevel();
        document.getElementById("divInConstant").style.visibility = "visible";
        document.getElementById("divInConstant").style.opacity = "1.0";
    }
}





function calcWomen() {

    document.getElementById("result").innerHTML = "";
    age = document.getElementById("age").valueAsNumber;
    ageMet = document.getElementById("ageMet").valueAsNumber;
    feet = document.getElementById("feet").valueAsNumber;
    inches = document.getElementById("inches");
    pounds = document.getElementById("pounds").valueAsNumber;
    ht = document.getElementById("ht").valueAsNumber;
    wt = document.getElementById("wt").valueAsNumber;
    
    
    if (isItMetric == false) {
        cm = 2.54 * (feet * 12 + inches.value * 1);

        kg = 0.453592 * pounds;
    }
    else {
        cm = ht;
        kg = wt;
        age = ageMet;
    }
    result = (10 * kg) + (6.25 * cm) - (5 * age) - 161;
    
    
    if (result <= 0 || isNaN(result) == true)
    { window.alert("Please Enter Valid Values") }
    else {

        document.getElementById("result").innerHTML = "Your BMR is: "+ result.toFixed(0);
        activityLevel();
        document.getElementById("divInConstant").style.visibility = "visible";
        document.getElementById("divInConstant").style.opacity = "1.0";
    }

}



