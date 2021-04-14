
location.href = "https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js";
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

 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 


var chartB = new Highcharts.Chart({
  chart:{ renderTo:'chart-brightness' },
  title: { text: 'Brightness' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Candela (Cd)' }
  },
  credits: { enabled: false }
});
setInterval(function ( ) {
  
  
   
      var x = (new Date()).getTime(),
          y = parseInt(document.getElementById("brightne").innerText);
       //console.log(this.responseText);
      if(chartB.series[0].data.length > 40) {
        chartB.series[0].addPoint([x, y], true, true, true);
      } else {
        chartB.series[0].addPoint([x, y], true, false, true);
      }
 
}, 3000 ) ;
var chartT= new Highcharts.Chart({
  chart:{ renderTo:'chart-temperature' },
  title: { text: 'Temperature' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Temperature (Celsius)' }
  },
  credits: { enabled: false }
});
setInterval(function ( ) {
  
  
   
      var x = (new Date()).getTime(),
          y = parseInt(document.getElementById("temp").innerText);
       //console.log(this.responseText);
      if(chartT.series[0].data.length > 40) {
        chartT.series[0].addPoint([x, y], true, true, true);
      } else {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
 
}, 3000 ) ;
var chartH= new Highcharts.Chart({
  chart:{ renderTo:'chart-humidity' },
  title: { text: 'Humidity' },
  series: [{
    showInLegend: false,
    data: []
  }],
  plotOptions: {
    line: { animation: false,
      dataLabels: { enabled: true }
    },
    series: { color: '#18009c' }
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: { second: '%H:%M:%S' }
  },
  yAxis: {
    title: { text: 'Humidity (%)' }
  },
  credits: { enabled: false }
});
setInterval(function ( ) {
  
  
   
      var x = (new Date()).getTime(),
          y = parseInt(document.getElementById("hum").innerText);
       //console.log(this.responseText);
      if(chartH.series[0].data.length > 40) {
        chartH.series[0].addPoint([x, y], true, true, true);
      } else {
        chartH.series[0].addPoint([x, y], true, false, true);
      }
 
}, 3000 ) ;
var temparute = document.getElementById('temp');
            var dbRef = firebase.database().ref().child('IOTPrimary/Trang Trại/Nhiệt Độ');
            dbRef.on('value', snap => temparute.innerText = snap.val());
            
            var brightnes = document.getElementById('brightne');
            var dbRef2 = firebase.database().ref().child('IOTPrimary/Trang Trại/Cường Độ Sáng');
            dbRef2.on('value', snap => brightnes.innerText = snap.val());

            var humidity = document.getElementById('hum');
            var dbRef3 = firebase.database().ref().child('IOTPrimary/Trang Trại/Độ Ẩm');
            dbRef3.on('value', snap => humidity.innerText = snap.val());
