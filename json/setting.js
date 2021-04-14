const firebaseConfig = {
    apiKey: "AIzaSyA3k1fnRpoxpTgazwrg245N5riPc7nj6Sw",
    authDomain: "iot-primary.firebaseapp.com",
    databaseURL: "https://iot-primary-default-rtdb.firebaseio.com",
    projectId: "iot-primary",
    storageBucket: "iot-primary.appspot.com",
    messagingSenderId: "527853565604",
    appId: "1:527853565604:web:9e8c3024bd00305be01831",
    measurementId: "G-S2GXXQB13J"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function toggleCheckbox(element) {
var xhr = new XMLHttpRequest();
if(element.checked){ xhr.open("GET", "/setting?output="+element.id+"&state=1", true); 
console.log("send ok")    ;
}
else { xhr.open("GET", "/setting?output="+element.id+"&state=0", true);  
console.log("send failed");}
xhr.send();

}
function updateSliderPWM(element) {
var sliderValue = document.getElementById("pwmSlider").value;
document.getElementById("textSliderValue").innerHTML = sliderValue;
console.log(sliderValue);
var slidervalue;
    firebase.database().ref('slider 1: /').set({
        slidervalue: sliderValue  });

}
function updateSliderPWM2(element) {
var sliderValue2 = document.getElementById("pwmSlider2").value;
document.getElementById("textSliderValue2").innerHTML = sliderValue2;
console.log(sliderValue2);
var slidervalue;
    firebase.database().ref('slider 2: /').set({
        slidervalue: sliderValue2  });

}
function updateSliderPWM3(element) {
var sliderValue3 = document.getElementById("pwmSlider3").value;
document.getElementById("textSliderValue3").innerHTML = sliderValue3;
console.log(sliderValue3);
var slidervalue;
    firebase.database().ref('slider 3: /').set({
        slidervalue: sliderValue3  });
}