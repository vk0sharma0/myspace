fetch('http://localhost:8000')
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
    for (let i = 0; i < data.filtered.data.length; i++){
        var first_arry=[0];
        first_arry.push(data.filltered.data[i].CE.changeinOpenInterest)
            if(data.filltered.data[i].CE.changeinOpenInterest>data.filltered.data[0].CE.changeinOpenInterest){
                first_arry.push(data.filltered.data[i].CE.changeinOpenInterest)
            }
    }

}).catch((err)=>{
    console.log(err);
})






































// let cech = document.querySelector(".cech");
// let call_rate = document.querySelector(".call_rate");
// let put_rate = document.querySelector(".put_rate");
// let pech = document.querySelector(".pech");
// let ce = document.querySelector(".ce");
// let pe = document.querySelector(".pe");
// let sp = document.querySelector(".sp");
// let nifty = document.querySelector('.nifty');
// let exDate = document.querySelector('.exDate');
// let time = document.querySelector('.time');
// let currPrice = document.querySelector('.currPrice');
// let stts = document.querySelector('.status');
// let cbidlist = document.querySelector('.cbidlist');
// let casklist = document.querySelector('.casklist');
// let pbidlist = document.querySelector('.pbidlist');
// let pasklist = document.querySelector('.pasklist');
// let cltplist = document.querySelector('.cltplist');
// let pltplist = document.querySelector('.pltplist');
// let total_call_oi = document.querySelector('.total_call_oi');
// let total_put_oi = document.querySelector('.total_put_oi');
// let Total_call_oi_change = document.querySelector('.Total_call_oi_change');
// let Total_put_oi_change = document.querySelector('.Total_put_oi_change');
// let call_history = document.querySelector(".call_history");
// let put_history = document.querySelector(".put_history");
// let total_call_his_change_minus = document.querySelector('.total_call_his_change_minus');
// let total_put_his_change_minus = document.querySelector('.total_put_his_change_minus');
// let diff_value = document.querySelector('.diff_value');
// let diff_symbol = document.querySelector('.diff_symbol');
// let call_put_symbol = document.querySelector('.call_put_symbol');
// let pcr_value = document.querySelector('.pcrvalue');
// let diff_oi_change_PCR = document.querySelector('.diff_oi_change_PCR');

// let call_prices = [];
// let put_prices = [];
// let call_data1 = [];
// let put_data1 = [];
// let call_data2 = [];
// let put_data2 = [];
// let oi_change_pcr = [];
// let timestamps = [];
// let call_chart_diff_value = [];
// let put_chart_diff_value = [];
// let put_rate_chart = [];
// let call_rate_chart = [];

// let his_data_con_call = [];
// let his_data_con_put = [];
// let timer = document.querySelector('.timer');
// let interval_time = 30000;
// let expiryDate;
// let count = 0;
// let strikep;
// let newDiv;
// let newDiv2;
// let newDiv3;
// let newDiv4;
// let newDiv5;
// let newDiv6;
// let newDiv7;
// let newDiv8;
// let newDiv9;
// let newDiv10;
// let tot_call_oi_change = 0;
// let tot_put_oi_change = 0;
// let call_his_data = 0;
// let put_his_data = 0;
// let a = 0;
// let b;
// let a1 = 0;
// let b1;
// let x = 0;
// let vkc;
// let vkp;
// let store = 0;

// let timer_time = interval_time;
// setInterval(() => {
//   timer.innerHTML = timer_time / 1000;
//   timer_time -= 1000;
// }, 1000);

// setInterval(() => {
//   timer_time = interval_time;
//   tot_call_oi_change = 0;
//   tot_put_oi_change = 0;
//   let call_ascending = [];
//   let put_ascending = [];

//   console.log(`reload ${count} times`);
//   count++;
//   //fetch("data.json")
//   fetch("http://localhost:8000")
//     .then((res) => {
//       if (res.status == 200) {
//         stts.innerHTML = "Data Fetched Successfully.";
//       } else {
//         stts.innerHTML = "Data Fetching Unsuccessfully.";

//       }
//       return res.json()
//     })
//     .then((data) => {

//       expiryDate = data.records.expiryDates[0];
//       nifty.innerHTML = data.filtered.data[0].PE.underlying;
//       exDate.innerHTML = data.filtered.data[0].expiryDate;
//       time.innerHTML = data.records.timestamp;
//       currPrice.innerHTML = data.records.underlyingValue;

//       sp.innerHTML = "";
//       ce.innerHTML = "";
//       pe.innerHTML = "";
//       cech.innerHTML = "";
//       pech.innerHTML = "";
//       cbidlist.innerHTML = "";
//       casklist.innerHTML = "";
//       pbidlist.innerHTML = "";
//       pasklist.innerHTML = "";
//       cltplist.innerHTML = "";
//       pltplist.innerHTML = "";

//       for (let i = 0; i < data.filtered.data.length; i++) {
//         let num2 = Math.round(data.records.underlyingValue / 100) * 100;
//         let num1 = Math.round(data.filtered.data[i].strikePrice);

//         if (data.filtered.data[i].expiryDate == expiryDate) {


//           call_ascending.push(data.filtered.data[i].CE.changeinOpenInterest);




//           strikep = document.createElement("div");
//           strikep.innerHTML = data.filtered.data[i].strikePrice;
//           strikep.style.border = "1px solid green"
//           strikep.style.textAlign = "center"
//           sp.appendChild(strikep);


//           newDiv = document.createElement("div");
//           newDiv.innerHTML = data.filtered.data[i].CE.openInterest;
//           newDiv.style.border = "1px solid green"
//           newDiv.style.textAlign = "center"
//           ce.appendChild(newDiv);

//           newDiv2 = document.createElement("div");
//           newDiv2.innerHTML = data.filtered.data[i].CE.changeinOpenInterest;
//           newDiv2.style.border = "1px solid green"
//           newDiv2.style.textAlign = "center"
//           cech.appendChild(newDiv2);


//           newDiv3 = document.createElement("div");
//           newDiv3.innerHTML = data.filtered.data[i].PE.openInterest;
//           newDiv3.style.border = "1px solid green"
//           newDiv3.style.textAlign = "center"
//           pe.appendChild(newDiv3);


//           newDiv4 = document.createElement("div");
//           newDiv4.innerHTML = data.filtered.data[i].PE.changeinOpenInterest;
//           newDiv4.style.border = "1px solid green"
//           newDiv4.style.textAlign = "center"
//           pech.appendChild(newDiv4);


//           newDiv5 = document.createElement("div");
//           newDiv5.innerHTML = data.filtered.data[i].CE.bidQty;
//           newDiv5.style.border = "1px solid green"
//           newDiv5.style.textAlign = "center"
//           cbidlist.appendChild(newDiv5);

//           newDiv6 = document.createElement("div");
//           newDiv6.innerHTML = data.filtered.data[i].CE.askQty;
//           newDiv6.style.border = "1px solid green"
//           newDiv6.style.textAlign = "center"
//           casklist.appendChild(newDiv6);


//           newDiv7 = document.createElement("div");
//           newDiv7.innerHTML = data.filtered.data[i].PE.bidQty;
//           newDiv7.style.border = "1px solid green"
//           newDiv7.style.textAlign = "center"
//           pbidlist.appendChild(newDiv7);


//           newDiv8 = document.createElement("div");
//           newDiv8.innerHTML = data.filtered.data[i].PE.askQty;
//           newDiv8.style.border = "1px solid green"
//           newDiv8.style.textAlign = "center"
//           pasklist.appendChild(newDiv8);


//           newDiv9 = document.createElement("div");
//           newDiv9.innerHTML = data.filtered.data[i].CE.lastPrice;
//           newDiv9.style.border = "1px solid green"
//           newDiv9.style.textAlign = "center"
//           cltplist.appendChild(newDiv9);


//           newDiv10 = document.createElement("div");
//           newDiv10.innerHTML = data.filtered.data[i].PE.lastPrice;
//           newDiv10.style.border = "1px solid green"
//           newDiv10.style.textAlign = "center"
//           pltplist.appendChild(newDiv10);


//           if (i % 2 == 0) {
//             newDiv.style.backgroundColor = "#4b4040";
//             newDiv2.style.backgroundColor = "#4b4040";
//             newDiv3.style.backgroundColor = "#4b4040";
//             newDiv4.style.backgroundColor = "#4b4040";
//             newDiv5.style.backgroundColor = "#4b4040";
//             newDiv6.style.backgroundColor = "#4b4040";
//             newDiv7.style.backgroundColor = "#4b4040";
//             newDiv8.style.backgroundColor = "#4b4040";
//             newDiv9.style.backgroundColor = "#4b4040";
//             newDiv10.style.backgroundColor = "#4b4040";
//             strikep.style.backgroundColor = "#4b4040";
//           }
//           if (num1 == num2) {
//             newDiv.style.backgroundColor = "red";
//             newDiv2.style.backgroundColor = "red";
//             newDiv3.style.backgroundColor = "red";
//             newDiv4.style.backgroundColor = "red";
//             strikep.style.backgroundColor = "red";
//             newDiv5.style.backgroundColor = "red";
//             newDiv6.style.backgroundColor = "red";
//             newDiv7.style.backgroundColor = "red";
//             newDiv8.style.backgroundColor = "red";
//             newDiv9.style.backgroundColor = "red";
//             newDiv10.style.backgroundColor = "red";
//           }



//         }

//         tot_call_oi_change += data.filtered.data[i].CE.changeinOpenInterest;
//         tot_put_oi_change += data.filtered.data[i].PE.changeinOpenInterest;
//       }

//       if (a != tot_call_oi_change) {

//         timestamps.push(data.records.timestamp.split(' ')[1].toString());
//         if (timestamps.length >= 20) {
//           timestamps.shift();
//         }


//         call_prices.push(tot_call_oi_change);
//         if (call_prices.length >= 20) {
//           call_prices.shift();
//         }
//         put_prices.push(tot_put_oi_change);
//         if (put_prices.length >= 20) {
//           put_prices.shift();
//         }
//         call_data1.push(data.filtered.CE.totOI);
//         if (call_data1.length >= 20) {
//           call_data1.shift();
//         }
//         put_data1.push(data.filtered.PE.totOI);
//         if (put_data1.length >= 20) {
//           put_data1.shift();
//         }



//         Total_call_oi_change.innerHTML = tot_call_oi_change;
//         Total_put_oi_change.innerHTML = tot_put_oi_change;


//         call_ascending.sort(function (a, b) { return (a - b) });
//         let n = call_ascending.reverse().slice(0, 6);


//         b = tot_call_oi_change - a;
//         b1 = tot_put_oi_change - a1;

//         a = tot_call_oi_change;
//         a1 = tot_put_oi_change;

//         call_his_data = b;
//         put_his_data = b1;


//         his_data_con_call.push(call_his_data);
//         his_data_con_put.push(put_his_data);

//         let tem1 = tot_call_oi_change / tot_put_oi_change;
//         let tem2 = 0;
//         tem2 = tem1.toString().split('.')[1].slice(0, 6);
//         pcr_value.innerHTML = parseFloat(tem1.toString().split('.')[0] + ('.') + tem2);
//         pcr_value.style.backgroundColor = "#0e8ba1";

//         oi_change_pcr.push(parseFloat(tem1.toString().split('.')[0] + ('.') + tem2));
//         if (oi_change_pcr.length >= 20) {
//           oi_change_pcr.shift();
//         }


//         if (call_his_data > put_his_data) {
//           let z = document.createElement('div');
//           z.innerHTML = "C";
//           z.style.backgroundColor = 'red';
//           z.style.margin = '5px';
//           z.style.padding = '5px';
//           call_put_symbol.appendChild(z);


//         } else if (put_his_data > call_his_data) {
//           let z = document.createElement('div');
//           z.style.padding = '5px';
//           z.innerHTML = "P";
//           z.style.margin = '5px';
//           z.style.backgroundColor = 'green';
//           call_put_symbol.appendChild(z);


//         } else {
//           let z = document.createElement('div');
//           z.style.padding = '5px';
//           z.style.margin = '5px';
//           z.innerHTML = "EQ";
//           z.style.backgroundColor = 'black';
//           call_put_symbol.appendChild(z);
//         }

//         total_call_oi.innerHTML = data.filtered.CE.totOI;
//         total_put_oi.innerHTML = data.filtered.PE.totOI;

//         let q = call_put_symbol.getElementsByTagName('*').length;

//         if (q >= 16) {
//           let firstElement = call_put_symbol.firstChild;
//           call_put_symbol.removeChild(firstElement);
//         }

//         if (tot_call_oi_change !== his_data_con_call) {
//           call_history.innerHTML = his_data_con_call;
//         }
//         if (tot_put_oi_change !== his_data_con_put) {
//           put_history.innerHTML = his_data_con_put;
//         }

//         if (his_data_con_call.length >= 9) {
//           his_data_con_call.shift();
//         }
//         if (his_data_con_put.length >= 9) {
//           his_data_con_put.shift();
//         }

//         vkc = data.filtered.CE.totOI;
//         vkp = data.filtered.PE.totOI;





//         var xValues = ["call O.I", "PUT O.I"];
//         var yValues = [`${vkc}`, `${vkp}`];
//         var barColors = ["red", "green"];

//         new Chart("myChart1", {
//           type: "bar",
//           data: {
//             labels: xValues,
//             datasets: [{
//               backgroundColor: barColors,
//               data: yValues
//             }]
//           },
//           options: {
//             legend: {
//               display: false
//             },
//             title: {
//               display: true,
//               text: "NIFTY TOTAL O.I. DATA"
//             }
//           }
//         });

//         let x = 0;
//         let y = 0;
//         his_data_con_call.forEach(element => {

//           x += element;

//         });
//         his_data_con_put.forEach(element => {
//           y += element;
//         });

        
//         call_rate.innerHTML = (x / 120).toString().split(".")[0] + "  LOT/SEC";
//         put_rate.innerHTML = (y / 120).toString().split(".")[0] + "  LOT/SEC";;

//         call_rate_chart.push(parseInt((x / 120).toString().split(".")[0]));
//         if (call_rate_chart.length >= 20) {
//           call_rate_chart.shift();
//         }
//         put_rate_chart.push(parseInt((y / 120).toString().split(".")[0]));
//         if (put_rate_chart.length >= 20) {
//           put_rate_chart.shift();
//         }


//         total_call_his_change_minus.innerHTML = x;
//         total_put_his_change_minus.innerHTML = y;


//         call_data2.push(x);
//         if (call_data2.length >= 20) {
//           call_data2.shift();
//         }
//         put_data2.push(y);
//         if (put_data2.length >= 20) {
//           put_data2.shift();
//         }

//         let tem3 = x / y;
//         tem4 = tem3.toString().split('.')[1].slice(0, 6);
//         diff_oi_change_PCR.innerHTML = 'PCR :- ' + parseFloat(tem1.toString().split('.')[0] + ('.') + tem2);
//         diff_oi_change_PCR.style.backgroundColor = "#0e1ba1";



//         diff_value.innerHTML = (x - y).toString().split('-')[1];
//         if (x > y) {
//           diff_symbol.innerHTML = 'CALL O.I BUILDING';
//           diff_value.style.backgroundColor = "red";
//           call_chart_diff_value.push(x - y);
//           put_chart_diff_value.push(0);
//           pcr_value.style.backgroundColor="red"
//         } else {
//           diff_symbol.innerHTML = 'PUT O.I BUILDING';
//           diff_value.style.backgroundColor = "green";
//           pcr_value.style.backgroundColor="green"
//           put_chart_diff_value.push(parseInt((x - y).toString().split('-')[1]));
//           console.log(parseInt((x - y).toString().split('-')[1]))
//           call_chart_diff_value.push(0);
//         }

//         if (call_chart_diff_value.length >= 20) {
//           call_chart_diff_value.shift();
//           put_chart_diff_value.shift();
//         }


//         new Chart("chart", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:'call',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,0,0,1.0)",
//               borderColor: "rgba(255,0,0,1.0)",
//               data: call_prices
//             }, {
//               label:'put',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(0,255,0,1.0)",
//               borderColor: "rgba(0,255,0,1.0)",
//               data: put_prices
//             }]
//           },
//           options: {
//             legend: {
//               display: true
//             },
//             scales: {

//             }, title: {
//               display: true,
//               text: "NIFTY LINE CHART TOTAL O.I. CHANGE DATA"
//             }
//           }
//         });

//         new Chart("chart3", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:"call",
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,0,0,1.0)",
//               borderColor: "rgba(255,0,0,1.0)",
//               data: call_rate_chart
//             }, {
//               label:"put",
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(0,255,0,1.0)",
//               borderColor: "rgba(0,255,0,1.0)",
//               data: put_rate_chart
//             }]
//           },
//           options: {
//             legend: {
//               display: true
              
//             },
//             scales: {

//             }, title: {
//               display: true,
//               text: "line chart lot per second data"
//             }
//           }
//         });

//         new Chart("chart_pcr", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:'call_put_ratio',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,150,0,1.0)",
//               borderColor: "rgba(255,150,0,1.0)",
//               data: oi_change_pcr
//             }]
//           },
//           options: {
//             legend: { display: false },
//             scales: {

//             }, title: {
//               display: true,
//               text: "NIFTY TOTAL CHANGE OI PCR "
//             }
//           }
//         });



//         new Chart("chart1", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:'call',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,0,0,1.0)",
//               borderColor: "rgba(255,0,0,1.0)",
//               data: call_data1
//             }, {
//               label:'put',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(0,255,0,1.0)",
//               borderColor: "rgba(0,255,0,1.0)",
//               data: put_data1
//             }]
//           },
//           options: {
//             legend: { display: true },
//             scales: {

//             }, title: {
//               display: true,
//               text: "NIFTY LINE CHART TOTAL O.I. DATA"
//             }
//           }
//         });


//         new Chart("chart2", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:'call',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,0,0,1.0)",
//               borderColor: "rgba(255,0,0,1.0)",
//               data: call_data2
//             }, {
//               label:'put',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(0,255,0,1.0)",
//               borderColor: "rgba(0,255,0,1.0)",
//               data: put_data2
//             }]
//           },
//           options: {
//             legend: {
//               display: true

//             },
//             scales: {

//             }, title: {
//               display: true,
//               text: "NIFTY LINE CHART TOTAL O.I. CHANGE DIFFRENCE DATA"
//             }
//           }
//         });




//         new Chart("chart_diff_value", {
//           type: "line",
//           data: {
//             labels: timestamps,
//             datasets: [{
//               label:'call',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(255,0,0,1.0)",
//               borderColor: "rgba(255,0,0,1.0)",
//               data: call_chart_diff_value
//             }, {
//               label:'put',
//               fill: false,
//               lineTension: 0.3,
//               backgroundColor: "rgba(0,255,0,1.0)",
//               borderColor: "rgba(0,255,0,1.0)",
//               data: put_chart_diff_value
//             }]
//           },
//           options: {
//             legend: {
//               display: true

//             },
//             scales: {

//             }, title: {
//               display: true,
//               text: "NIFTY LINE CHART DIFF OF TOT CHNG OI CALL AND PUT VALUE"
//             }
//           }
//         });


//         let vkcc = tot_call_oi_change;
//         let vkcp = tot_put_oi_change;

//         var xValues2 = ["call O.I change", "PUT O.I change"];
//         var yValues2 = [`${vkcc}`, `${vkcp}`];
//         var barColors2 = ["red", "green"];

//         new Chart("myChart2", {
//           type: "bar",
//           data: {
//             labels: xValues2,
//             datasets: [{
//               backgroundColor: barColors2,
//               data: yValues2
//             }]
//           },
//           options: {
//             legend: {
//               display: false


//             },
//             title: {
//               display: true,
//               text: "NIFTY TOTAL O.I. CHANGE DATA"
//             }
//           }
//         });



//         let vkdc = x;
//         let vkdp = y;
//         var xValues3 = ["CALL DIFFRENCE", "PUT DIFFRENCE"];
//         var yValues3 = [`${vkdc}`, `${vkdp}`];
//         var barColors3 = ["red", "green"];
//         new Chart("myChart3", {
//           type: "bar",
//           data: {
//             labels: xValues3,
//             datasets: [{
//               backgroundColor: barColors3,
//               data: yValues3
//             }]
//           },
//           options: {
//             legend: {
//               display: false

//             },
//             title: {
//               display: true,
//               text: "NIFTY TOTAL O.I. CHANGE DIFFRENCE DATA"
//             }
//           }
//         });




//       }
//     })

// }, interval_time);
