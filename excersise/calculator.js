// Check if user is logged in based on userEmail in localStorage
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("userEmail")) {
  } else {
  }
});

// Storing values in variables
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateButton = document.getElementById('calculate-bmi-btn');
const resultDiv = document.getElementById('result');
const historyTable = document.getElementById('history-table').getElementsByTagName('tbody')[0];
// Retrieve BMI history 
function loadHistory() {
  const bmiHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];
  bmiHistory.forEach(entry => {
    addHistoryRow(entry);
  });
}
// Save BMI history 
function saveHistory(bmi, category) {
  const bmiHistory = JSON.parse(localStorage.getItem('bmiHistory')) || [];
  const date = new Date().toLocaleString();
  const entry = { date, bmi, category };
  bmiHistory.push(entry);
  localStorage.setItem('bmiHistory', JSON.stringify(bmiHistory));
  addHistoryRow(entry);
}

// Add a row 
function addHistoryRow(entry) {
  const row = historyTable.insertRow();
  // Add the class 
  row.classList.add(entry.category.toLowerCase());
  row.insertCell(0).textContent = entry.date;
  row.insertCell(1).textContent = entry.bmi.toFixed(2);
  row.insertCell(2).textContent = entry.category;
}
// BMI Calculation
function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100;  
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'Please enter valid weight and height.';
    resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
    return;
  }
  const bmi = weight / (height * height);
  let bmiCategory = '';
  // BMI result classification
  if (bmi < 18.5) {
    bmiCategory = 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'normal';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'overweight';
  } else {
    bmiCategory = 'obese';
  }
  // Display BMI result
  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
  resultDiv.classList.remove('underweight', 'normal', 'overweight', 'obese');
  resultDiv.classList.add(bmiCategory);

  // Scroll to section according to BMI category
  const targetSection = document.getElementById(bmiCategory);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
  // Save BMI result in history
  saveHistory(bmi, bmiCategory);
}
calculateButton.addEventListener('click', calculateBMI);
// Load BMI history on page 
window.onload = loadHistory;
const clearButton = document.getElementById('clear-history-btn');
clearButton.addEventListener('click', () => {
  // Clear local storage
  localStorage.removeItem('bmiHistory');
  while (historyTable.firstChild) {
    historyTable.removeChild(historyTable.firstChild);
  }
});
