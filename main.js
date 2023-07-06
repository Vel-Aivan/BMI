function showBMI() {
  var height = document.getElementById("height").value;
  
  var weight = document.getElementById("weight").value;
  
  height = height / 100;
  var bmi = weight / (height * height);
  
  if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
    alert('Please fill all fields with valid numbers');
  }
  
  else if (bmi < 18.5) {
    document.getElementById("result").innerHTML = "Underweight:" + bmi;
  }
  
  else if (bmi < 25) {
    document.getElementById("result").innerHTML = "Normal:" + bmi;
  }
  
  else if (bmi < 30) {
    document.getElementById("result").innerHTML = "Overweight:" + bmi;
  }
  
  else if (bmi > 30 && bmi < 40) {
    document.getElementById("result").innerHTML = "Obese:" + bmi;
  }
  
  else {
    document.getElementById("result").innerHTML = "Invalid!";
  }
}

function userReset() {
  location.reload();
}