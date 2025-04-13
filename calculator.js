const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-bmi-btn');
const resultDiv = document.getElementById('result');

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convert height to meters
  
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid weight and height.';
    resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
    return;
  }

  const bmi = weight / (height * height);
  let bmiCategory = '';

  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
  resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
  resultDiv.classList.add(bmiCategory);
}

calculateButton.addEventListener('click', calculateBMI);
