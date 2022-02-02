function  names(){
   document.getElementById('names').value = "Arman Alpar CS-2121";
}

const data = new Date();
function  date() {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   document.getElementById('data').value = data;
}

function calculate(){
   document.getElementById('vis').style.display ="none";
   document.getElementById('time').style.display ="block";
   let Year = 2024 - data.getFullYear();
   let Month = 8 - data.getMonth();
   let Day = 5 - data.getDate();
   document.getElementById('time').value = Year.toString( ) + " years " + Month.toString() + " months " + Day.toString() + " days";
}

function Divide(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first / second;
}
function Multiply(){
   let first = document.getElementById('first').value;
   let second = document.getElementById('second').value;
   document.getElementById('answer').value =first * second;
}
